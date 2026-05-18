import ImgBanner from "@/components/banners/ImgBanner";
import { accommodationPageData } from "./components/pageData";
import RoomCardSection from "./components/RoomCardSection";
import RoomAbout from "./components/RoomAbout";
import EscapeSection from "../(home)/components/EscapeSection";
import ReviewsSection from "../(home)/components/ReviewsSection";
import { homePageData } from "../(home)/components/pageData";

const page = () => {
  return (
    <main>
      <ImgBanner {...accommodationPageData.hero} />
      <RoomAbout {...accommodationPageData.about} />
      <RoomCardSection cards={accommodationPageData.accommodations} />
      <EscapeSection {...accommodationPageData.feelingSection} />
      <ReviewsSection {...homePageData.reviewsSection} />
    </main>
  );
};

export default page;
