"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebSiteFooter from "./WebSiteFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingFooter />;
    case "/gallery/":
        return null ;
      case "/contact-us/":
        return null ;    
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
