import { Section, SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface Props {
  title: string;
  heading: string;
  description: string;
  experiences: {
    image: string;
    title: string;
    timing: string;
  }[];
}
const ExperiencesSection: React.FC<Props> = ({
  title,
  heading,
  description,
  experiences,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative lg:h-[410dvh] h-[470dvh] bg-primary"
    >
      <div className="relative w-full h-full aspect-auto">
        <Image
          src="/home/exp-bg.png"
          alt="Image"
          fill
          className="object-cover"
        />
        <SectionWithContainer
          sectionClassName="absolute inset-0"
          containerClassName="lg:space-y-12 space-y-8"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 relative">
            <div className="">
              <p className="flex items-center gap-2 text-background uppercase">
                <span className="w-10 bg-background h-px" />
                {title}
              </p>
              <SectionHeading title={heading} textCenter titleColor="white" />
            </div>
            <div className="">
              <p className="text-white mt-4">{description}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-30">
            {experiences.map((item, index) => (
              <div className="flex flex-col gap-2 mt-6 sticky top-0 bg-primary" key={index}>
                <div
                  className={`relative aspect-4/3.5 border-8 border-white w-full ${(index + 1) % 2 === 0 ? "lg:-mt-8" : ""}`}
                >
                  <Image
                    src={item.image}
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
               <div className="flex max-lg:flex-col items-center justify-between">
                 <p className="text-white text-sm">{item.title}</p>
                <p className="text-white text-sm">{item.timing}</p>
               </div>
              </div>
            ))}
          </div>
        </SectionWithContainer>
      </div>
    </Section>
  );
};

export default ExperiencesSection;
