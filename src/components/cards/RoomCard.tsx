import { RoomsType } from "@/@types/type";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import Image from "next/image";
import { SlideBtnIcon } from "@/utils/sliderButtonIcon";

const RoomCard: React.FC<RoomsType["rooms"][0]> = ({ images, roomName }) => {
  return (
    <div className="w-full relative">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".rooms-next-" + roomName.replace(/\s+/g, "-"),
          prevEl: ".rooms-prev-" + roomName.replace(/\s+/g, "-"),
        }}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full relative md:aspect-[4/4.5] aspect-4/4">
            <Image
              src={src}
              alt="Image"
              className="object-cover rounded-3xl"
              fill
            />
          </div>
        )}
      />
      <div className="absolute z-10 inset-x-2 bottom-4 flex max-md:flex-col gap-4 md:items-center justify-between">
        <h3 className="capitalize! md:text-lg text-sm px-4 py-2 rounded-full bg-primary text-white md:text-nowrap max-md:order-2">
          {roomName}
        </h3>
        <div className="flex gap-2 max-md:order-1 max-md:self-end">
          <button className={`rooms-prev-${roomName.replace(/\s+/g, "-")} px-5 py-2 bg-dark text-white rounded-full active:scale-95 hover:bg-white hover:text-dark rotate-180`}>
            <SlideBtnIcon />
            <span className="sr-only">Previous</span>
          </button>
          <button className={`rooms-next-${roomName.replace(/\s+/g, "-")} px-5 py-2 bg-dark text-white rounded-full active:scale-95 hover:bg-white hover:text-dark`}>
            <SlideBtnIcon />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
