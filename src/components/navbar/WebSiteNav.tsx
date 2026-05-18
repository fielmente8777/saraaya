// WebSiteNav.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import NavMenu from "./NavMenu";

const WebSiteNav = () => {
  const pathname = usePathname();

  const paths = ["/", "/rooms"];
  const isTransparent = paths.includes(pathname);

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        will-change-transform
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          isTransparent
            ? scrolled
              ? "bg-black/30 backdrop-blur-xl"
              : "bg-transparent"
            : "bg-white"
        }
      `}
    >
      {/* Top Navbar */}
      <nav className="max_width flex items-center justify-between py-4">
        <MenuButton />

        <div className="relative aspect-[4/2] w-full max-w-38">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        <LinkButton
          href="/"
          label="Book Now"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-fit rounded-full border-none
            bg-white text-secondary
            uppercase
          "
        />
      </nav>

      <NavMenu />
    </header>
  );
};

export default WebSiteNav;
