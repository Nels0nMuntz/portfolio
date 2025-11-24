import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { PropsWithChildren } from "react";
import { SwiperOptions } from "swiper/types";
import "swiper/css/navigation";

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
      navigation
      autoplay={
        autoplay === undefined
          ? {
              delay: 3000,
              disableOnInteraction: false,
            }
          : autoplay
      }
      modules={[Autoplay, Navigation]}
      speed={700}
      breakpoints={{
        768: {
          centeredSlides: true,
          spaceBetween: 50,
        },
      }}
      className="w-full max-w-modal"
      wrapperClass="items-center"
    >
      {children}
    </Swiper>
  );
}
