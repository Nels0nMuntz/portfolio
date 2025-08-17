import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PropsWithChildren } from "react";
import { SwiperOptions } from "swiper/types";

interface Props extends PropsWithChildren {
  autoplay?: SwiperOptions["autoplay"];
}

export default function Slider({ autoplay, children }: Props) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.35}
      centeredSlides={false}
      loop
      autoplay={
        autoplay || {
          delay: 3000,
          disableOnInteraction: false,
        }
      }
      modules={[Autoplay]}
      speed={700}
      breakpoints={{
        768: {
          centeredSlides: true,
          spaceBetween: 50,
        },
      }}
      className="w-full max-w-modal"
    >
      {children}
    </Swiper>
  );
}
