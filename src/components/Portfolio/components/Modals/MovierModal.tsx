import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function MovierModal() {
  const { movier } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "movier" });
  return (
    <Dialog open={movier.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/movier/movier-hand.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static -left-16 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Movier</DialogHeading>
              <DialogDescription>
                React client for TMDb.
              </DialogDescription>
              <DialogDesLink href="https://movier-web.netlify.app">Open live site</DialogDesLink>
            </div>
          </div>
          <div className="py-12 px-4 md:px-10 sm:text-base">
            <DialogDescription>
              Movier is a web app for exploring movies and series. Implemented user authentication using the TMDB provider and credentials, searching and browsing movies, series and adding them to the watchlist. Made responsive user interface with React JS that provides users with a seamless experience across all devices.
            </DialogDescription>
            <DialogDescription>
              Credentials: Username: J0lly, Password: VWXPTWOuSKtsPwo,
            </DialogDescription>
          </div>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-2.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-4.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/movier/movier-6.png"
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
