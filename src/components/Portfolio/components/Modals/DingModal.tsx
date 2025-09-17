import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";

export default function DingModal() {
  const { ding } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "ding" });
  return (
    <Dialog open={ding.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/dingdingding/ding-iphone-mockup.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static -left-16 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
              loading="eager"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Ding Ding Ding</DialogHeading>
              <DialogDescription>
                Ding Ding Ding is a free social casino website. Developed responsive, cross-browser
                markups using HTML/CSS/JS.
              </DialogDescription>
              <DialogDesLink href="https://dingdingding.com/">Open live site</DialogDesLink>
            </div>
          </div>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-2.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-4.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-6.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-8.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-9.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-10.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-11.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-12.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto max h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-13.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/dingdingding/ding-screen-14.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto max h-auto"
                  loading="eager"
                />
              </SwiperSlide>
            </Slider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
