import Banner from "./components/Banner";
import MountainSection from "./components/MountainSection";
import { storyPageData } from "./components/pageData";

const page = () => {
    return (
        <main>
            <Banner {...storyPageData.hero} />
            <MountainSection {...storyPageData.ancestralSection} />
        </main>
    );
}

export default page;