import ImgBanner from "@/components/banners/ImgBanner";
import { accommodationPageData } from "./components/pageData";
import RoomCardSection from "./components/RoomCardSection";
import RoomAbout from "./components/RoomAbout";
import EscapeSection from "../(home)/components/EscapeSection";
import ReviewsSection from "../(home)/components/ReviewsSection";
import { homePageData } from "../(home)/components/pageData";
import TitleSection from "@/components/TitleSection";

const page = () => {
  return (
    <main>
      <TitleSection titles={homePageData.titles} />
      <ImgBanner {...accommodationPageData.hero} />
      <RoomAbout {...accommodationPageData.about} />
      <RoomCardSection cards={accommodationPageData.accommodations} />
      <EscapeSection {...accommodationPageData.feelingSection} />
      <ReviewsSection {...homePageData.reviewsSection} />
      <TitleSection titles={homePageData.titles} colorChange />
    </main>
  );
};

export default page;
