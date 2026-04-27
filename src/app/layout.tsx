import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import Call from "@/components/ContactButton/Call";
import { contact } from "@/utils/constent";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saraaya Glamping Retreat | Luxury Stay in Dharamshala Himalayas",
  description:
    "Saraaya is a luxury glamping retreat in Dharamshala, Himachal Pradesh. Stay beside a pristine glacier stream with Himalayan views, forest surroundings, and exclusive tent experiences. Only four tents available per night.",
  keywords:
    "Saraaya, glamping Dharamshala, luxury tents Himachal Pradesh, Himalayan retreat, glamping India, Kareri Lake stay, Lam Dal trek stay, luxury camping Himalayas, boutique retreat Dharamshala",
  openGraph: {
    title: "Saraaya Glamping Retreat | Luxury Stay in Dharamshala Himalayas",
    description:
      "Saraaya is a luxury glamping retreat in Dharamshala, Himachal Pradesh. Stay beside a pristine glacier stream with Himalayan views, forest surroundings, and exclusive tent experiences. Only four tents available per night.",
    images: [
      {
        url: "/logo-1.png",
        width: 800,
        height: 600,
        alt: "Saraaya Glamping Retreat",
      },
    ],
    siteName: "Saraaya Glamping Retreat",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
        <Call callNumber={contact.phone[0]} />
        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "48efe4a5-80fe-4f2a-9615-9e4f98dc57a3",
              hid: "61357866",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
