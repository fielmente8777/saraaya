"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/":
      return <LandingFooter />;
    
    default:
      return <LandingFooter />;
  }
};

export default Footer;
