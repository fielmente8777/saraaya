"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "../sectionComponants";
import LinkButton from "../buttons/LinkButton";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const WebSiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 py-3 ${
          isScrolled
            ? "bg-primary shadow-md"
            : `${pathName === "/" ? "" : "bg-primary"}`
        }`}
      >
        <nav>
          <Container className="flex justify-between items-center">
            <div className="flex items-center md:gap-10 gap-3">
              <div
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <CiMenuBurger size={25} color="#fff" />
              </div>

              <Link
                href="/"
                className="block md:w-28 w-22 relative aspect-[4/1.45]"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <LinkButton
                arrowIcon={false}
                label="Book Now"
                href="/booking-form/"
                className="bg-white rounded-full border-none text-sm py-3 primary-font text-primary italic font-bold"
              />
            </div>
          </Container>
        </nav>
      </header>
      <div
        className={`mt-16 ${
          pathName === "/" ? "hidden" : "block"
        }`}
      />
      <MobileNavbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default WebSiteNavbar;
