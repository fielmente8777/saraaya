import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface MountainSectionProps {
  heading: string;
  cards: {
    images: string[];
    icon: string;
    subTitle: string;
    description: string;
  }[];
}

const MountainSection: React.FC<MountainSectionProps> = ({
  heading,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background">
      {cards.map((card, index) => (
        <div key={index} className="sticky top-0 bg-background">
          <div className=" h-[75dvh] items-center grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] gap-8 lg:gap-16 pt-8">
            {/* Left Image */}
            <div className="relative w-full aspect-[4/4.5] overflow-hidden lg:block hidden">
              <Image
                src={card.images[0]}
                alt={card.subTitle}
                fill
                className="object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col">
              {/* Fixed Heading */}
              <p className="text-center text-sm text-secondary flex items-center gap-2 justify-center uppercase">
                <span className="w-10 bg-secondary h-px inline-block" />
                {card.subTitle}
                <span className="w-10 bg-secondary h-px inline-block" />
              </p>
              <SectionHeading title={heading} textCenter />

              {/* Current Card Content */}
              <div className="flex flex-col justify-center">
                <div className="relative mx-auto w-full max-w-[100px] aspect-[4/2]">
                  <Image
                    src={card.icon}
                    alt={card.subTitle}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="mt-4 text-center">{card.description}</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/4.5] overflow-hidden lg:block hidden">
              <Image
                src={card.images[1]}
                alt={card.subTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </SectionWithContainer>
  );
};

export default MountainSection;
