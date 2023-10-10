import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function MCMModal() {
  const { mcm } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "mcm" });
  return (
    <Dialog open={mcm.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/mcm/mcm-hand.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static -left-16 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Mark Carroll Method</DialogHeading>
              <DialogDescription>
                This fitness application is designed to assist individuals in achieving their fitness
                goals and maintaining motivation.
              </DialogDescription>
              <DialogDesLink href="https://markcarrollmethod.com/">Open live site</DialogDesLink>
            </div>
          </div>
          <DialogDescription className="max-w-4xl py-12 px-4 md:px-10 sm:text-base">
            Users have the option to select a program from a
            diverse range of expert-designed programs, enabling them to commence their training
            regimen either at the gym or within the comfort of their home. Each program is
            comprised of a series of workout exercises, complete with video instructions for every
            day of the program. Whether the user is a novice or an experienced athlete, the
            application caters to individuals of all fitness levels. Users can diligently log and
            monitor their strength training efforts, including details such as the amount of
            weight lifted and the number of repetitions completed. They also have the ability to
            search for exercises based on their targeted muscle groups or fitness level. Moreover,
            the application allows users to track their body measurements, monitor their progress,
            customize their meal plans, and achieve their fitness goals with ease.
          </DialogDescription>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-2.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-4.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-6.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-8.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-9.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-10.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-11.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-12.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-13.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/mcm/mcm-14.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
            </Slider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
