import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import ReviewsSlider from "./slider/ReviewsSlider";

interface ReviewsSectionProps {
  title: string;
  reviews: {
    text: string;
    name: string;
  }[];
}
const ReviewsSection: React.FC<ReviewsSectionProps> = ({ title, reviews }) => {
  return (
    <Section className="sticky-section" defaultPadding={false}>
      <div className="relative bg-[#1F2D2A] lg:aspect-16/6 aspect-4/3">
        <Image
          src="/home/reviews-bg.png"
          alt="Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 lg:py-16 py-10">
          <Container className="md:space-y-14 space-y-8">
            <h2 className="text-white text-sm flex items-center gap-4 justify-center">
              <span className="w-10 h-px bg-white" />
              {title}
              <span className="w-10 h-px bg-white" />
            </h2>
            <ReviewsSlider cards={reviews} />
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default ReviewsSection;
