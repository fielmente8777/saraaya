import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface LandingAboutProps {
  title: string;
  description: string;
}
const LandingAbout: React.FC<LandingAboutProps> = ({ title, description }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background"
      containerClassName="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-10"
    >
      <SectionHeading title={title} fontPrimary />
      <p
        className="text-light"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </SectionWithContainer>
  );
};

export default LandingAbout;
