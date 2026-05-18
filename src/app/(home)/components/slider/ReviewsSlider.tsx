"use client";
import { TestimonialType } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
interface TestimonialsSliderProps {
  cards: TestimonialType["testimonials"];
}
const ReviewsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <div>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => (
          <div className="text-center text-white space-y-4">
            <p className="text-[1.375rem]">{card.text}</p>
            <p className="capitalize">{card.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
