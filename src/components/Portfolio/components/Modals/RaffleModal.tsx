import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function RaffleModal() {
  const { raffle } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "raffle" });

  return (
    <Dialog open={raffle.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/raffle/raffle-preview-m.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static -left-16 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Raffle House</DialogHeading>
              <DialogDescription>
                UK-based Dream Home online raffle platform, which allows people the chance to win
                either their multi-million pound dream home, or a commensurate multi-million pound
                cash prize.
              </DialogDescription>
              <DialogDesLink href="https://rafflehouse.com/">Open live site</DialogDesLink>
            </div>
          </div>
          <DialogDescription className="max-w-4xl py-12 px-4 md:px-10 sm:text-base">
            Developed responsive and cross-browser markups for various pages of the web application
            ncluding the home, product info, login, signup, basket, checkout, user area pages and
            many others. Also developed markups for the admin panel. Provided a seamless user
            experience across all devices through the development of a responsive user interface.
            Implemented diverse email templates for various scenarios, such as account creation,
            ticket purchases, lots of advertising templates.
          </DialogDescription>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-2.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-4.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-6.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-8.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-1m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-2m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-3m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-4m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-5m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-6m.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/raffle/raffle-7m.png"
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
