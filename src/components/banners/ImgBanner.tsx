import Image from "next/image";
import { Section } from "../sectionComponants";

interface ImgBannerProps {
  image: string;
  subtitle: string;
  title: string;
}
const ImgBanner: React.FC<ImgBannerProps> = ({ image, subtitle, title }) => {
  return (
    <Section
      defaultPadding={false}
      className="top-0 sticky z-0 overflow-hidden"
    >
      <div className="relative w-full lg:aspect-16/8 aspect-4/3">
        <Image src={image} alt="Image" fill className="object-cover" sizes="100%" />
      </div>
    </Section>
  );
};

export default ImgBanner;
