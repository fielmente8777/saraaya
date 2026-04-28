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
      <head>
        {/* <!-- Meta Pixel Code --> */}
        <script>
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1297264175884694');
            fbq('track', 'PageView');`}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1297264175884694&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PVZG7NGGMG"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PVZG7NGGMG');`}
        </Script>
      </head>
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
