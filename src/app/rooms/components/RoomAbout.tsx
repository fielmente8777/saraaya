import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface Props {
  logo: string;
  title: string;
  description: string;
}
const RoomAbout: React.FC<Props> = ({ logo, title, description }) => {
  return (
    <SectionWithContainer sectionClassName="bg-background relative" containerClassName="text-center lg:space-y-16 space-y-8">
      <h2 className="text-center lg:text-6xl md:text-6xl text-3xl font-primary">{title}</h2>
      <div className="flex items-center justify-center w-full gap-10">
        <div className="w-full h-px bg-secondary" />
        <div className="w-[300px] aspect-4/2 relative ">
          <Image src={logo} alt="Image" fill className="object-cover" />
        </div>
        <div className="w-full h-px bg-secondary" />
      </div>
    </SectionWithContainer>
  );
};

export default RoomAbout;
