import VideoBanner from "@/components/banners/VideoBanner";
import { homePageData } from "./components/pageData";
import About from "./components/About";
import EscapeSection from "./components/EscapeSection";
import ReviewsSection from "./components/ReviewsSection";

const page = () => {
  return (
    <main>
      <VideoBanner {...homePageData.banner} />
      <About {...homePageData.about} />
      <EscapeSection {...homePageData.escapeSection} />
      <EscapeSection {...homePageData.feelingSection} />
      <ReviewsSection {...homePageData.reviewsSection} />
    </main>
  );
};

export default page;
