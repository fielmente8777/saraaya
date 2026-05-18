import VideoBanner from "@/components/banners/VideoBanner";
import { homePageData } from "./components/pageData";
import About from "./components/About";
import EscapeSection from "./components/EscapeSection";
import ReviewsSection from "./components/ReviewsSection";
import GlampsSection from "./components/GlampsSection";
import ExperiencesSection from "./components/ExperiencesSection";

const page = () => {
  return (
    <main>
      <VideoBanner {...homePageData.banner} />
      <About {...homePageData.about} />
      <EscapeSection {...homePageData.escapeSection} />
      <GlampsSection {...homePageData.glampsSection} />
      <EscapeSection {...homePageData.feelingSection} />
      <ExperiencesSection {...homePageData.experiencesSection} />
      <ReviewsSection {...homePageData.reviewsSection} />
    </main>
  );
};

export default page;
