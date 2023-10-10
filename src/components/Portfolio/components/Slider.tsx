import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PropsWithChildren } from "react";

export default function Slider({ children }: PropsWithChildren) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.35}
      centeredSlides={false}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
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
