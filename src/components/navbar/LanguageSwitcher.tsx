"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useClickOutside from "@/hooks/useClickOutside";

/* ---------- helpers ---------- */
const getCookieLang = (allowed: string[]) => {
  if (typeof document === "undefined") return "en";

  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith("googtrans="));

  if (!match) return "en";

  const lang = match.split("/").pop();
  return lang && allowed.includes(lang) ? lang : "en";
};

const LanguageSwitcher = () => {
  const languages = useMemo(
    () => [
      { lang: "ar", label: "Arabic", src: "/flags/ar.svg" },
      { lang: "zh-CN", label: "Chinese (Simplified)", src: "/flags/zh-CN.svg" },
      { lang: "nl", label: "Dutch", src: "/flags/nl.svg" },
      { lang: "en", label: "English", src: "/flags/en.svg" },
      { lang: "fr", label: "French", src: "/flags/fr.svg" },
      { lang: "de", label: "German", src: "/flags/de.svg" },
      { lang: "it", label: "Italian", src: "/flags/it.svg" },
      { lang: "pt", label: "Portuguese", src: "/flags/pt.svg" },
      { lang: "ru", label: "Russian", src: "/flags/ru.svg" },
      { lang: "es", label: "Spanish", src: "/flags/es.svg" },
    ],
    []
  );

  const allowedLangs = useMemo(() => languages.map((l) => l.lang), [languages]);

  const buttonRef = useRef<HTMLDivElement>(null);
  const pendingLangRef = useRef<string | null>(null);

  /* ✅ Lazy initialization (NO effect, NO warning) */
  const [selectedLanguage, setSelectedLanguage] = useState(() =>
    getCookieLang(allowedLangs)
  );
  const [openDropdown, setOpenDropdown] = useState(false);

  /* ✅ Effect = external side-effects ONLY */
  useEffect(() => {
    if (!pendingLangRef.current) return;

    const lang = pendingLangRef.current;
    pendingLangRef.current = null;

    // cookies
    document.cookie = `googtrans=/en/${lang}; path=/; max-age=31536000`;
    document.cookie = `googtrans=/en/${lang}; domain=.${window.location.hostname}; path=/; max-age=31536000`;

    // trigger GTranslate
    const interval = setInterval(() => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 100);

    // fallback reload
    setTimeout(() => {
      clearInterval(interval);
      if (!document.documentElement.className.includes("translated")) {
        window.location.reload();
      }
    }, 2000);
  }, [selectedLanguage]);

  const changeLanguage = (lang: string) => {
    pendingLangRef.current = lang;
    setSelectedLanguage(lang);
    setOpenDropdown(false);
  };

  useClickOutside(buttonRef, () => {
    if (openDropdown) setOpenDropdown(false);
  });

  const currentLanguage =
    languages.find((l) => l.lang === selectedLanguage) || languages[3];

  return (
    <div className="relative" ref={buttonRef}>
      <button
        onClick={() => setOpenDropdown(!openDropdown)}
        className="flex items-center gap-2 text-white text-sm uppercase hover:opacity-80 transition-opacity"
      >
        <Image
          src={currentLanguage.src}
          width={24}
          height={24}
          alt={currentLanguage.label}
          className="rounded-sm md:block hidden"
        />
        <span>{selectedLanguage.toUpperCase()}</span>
        <IoIosArrowDown
          size={18}
          className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
        />
      </button>

      {openDropdown && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-xs z-50 w-38 py-1 max-h-56 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.lang}
              onClick={() => changeLanguage(lang.lang)}
              className={`flex text-secondary font-semibold secondary-font items-center gap-3 w-full px-3 py-2.5  transition-colors ${
                selectedLanguage === lang.lang
                  ? "bg-primary text-white  font-medium"
                  : "hover:bg-gray-100 hover:text-primary"
              }`}
            >
              <Image
                src={lang.src}
                alt={lang.label}
                width={24}
                height={24}
                className="rounded-sm shrink-0"
              />
              <span className="flex-1 text-left">{lang.label}</span>
              {/* {selectedLanguage === lang.lang && (
                <span className="text-blue-600">✓</span>
              )} */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
