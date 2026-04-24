import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import { Metadata } from "next";
import LandingAbout from "./components/LandingAbout";
import { landingPageData } from "./components/landingPageData";
import SignatureTherapies from "./components/SignatureTherapies";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Experiences from "./components/Experiences";
import Rooms from "./components/Rooms";
import Banner from "./components/Banner";
import Testimonial from "@/components/sectionComponants/Testimonial";

export const metadata: Metadata = {
  title: "Naad Wellness | Luxury Ayurveda & Wellness Retreat Near Delhi NCR",
  description:
    "aad Wellness is a luxury wellness retreat near Delhi NCR offering Ayurveda, yoga, meditation and personalised healing programs for mind and body.",
  alternates: {
    canonical: "https://naadwellness.com/landing-page",
  },
  openGraph: {
    title: "Naad Wellness | Luxury Ayurveda & Wellness Retreat Near Delhi NCR",
    description:
      "aad Wellness is a luxury wellness retreat near Delhi NCR offering Ayurveda, yoga, meditation and personalised healing programs for mind and body.",
    url: "https://naadwellness.com/landing-page",
    siteName: "Naad Wellness",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://naadwellness.com/landing-page/og-image.png",
        width: 800,
        height: 600,
        alt: "Naad Wellness",
      },
    ],
  },
};

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Banner {...landingPageData.bannerData} />
      <LandingAbout {...landingPageData.about} />
      <SectionWithContainer
        sectionClassName="border-b border-Primary"
        containerClassName="border border-primary md:rounded-3xl p-0!"
      >
        <div className="md:rounded-3xl md:py-3 py-6 bg-primary px-0">
          <Form2 />
        </div>
      </SectionWithContainer>
      <SignatureTherapies {...landingPageData.signatureTherapiesData} />
      <Rooms {...landingPageData.rooms} />
      <SlidingTitle items={landingPageData.titles} />
      <Experiences {...landingPageData.experiences} />
      <Testimonial {...landingPageData.testimonialData} />
    </main>
  );
}
