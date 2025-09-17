import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModals, useModalsDispatch } from "@/contexts";
import { DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function EveModal() {
  const { eve } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "eve" });
  return (
    <Dialog open={eve.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center gap-8 sm:gap-16 px-4 md:px-10 pt-8 bg-modal">
            <div className="text-center">
              <DialogHeading>Eve Admin</DialogHeading>
              <DialogDescription className="text-left md:text-center">
                Eve allows clients to measure vitals, such as blood pressure, heart rate, oxygen
                saturation, disease risks and much more with only their smartphone and enables to
                create data-driven care plans. Eve admin is used as a remote monitoring platform for
                tracking vitals of company employees. It contains hundreds of health tips and helps
                to teach employees more about their health and enhance their overall well-being.
              </DialogDescription>
            </div>
            <Image src="/eve/eve-2.png" width={768} height={590} alt="preview" />
            <DialogDescription className="text-left md:text-center ml-0 md:ml-auto">
              Implemented user authentication using Jwt Auth, data visualisation using various types
              of charts and tables with filtering, sorting and searching, import and export of data
              in XLS and CSV formats or manually
            </DialogDescription>
          </div>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-2.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-4.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-6.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-8.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/eve/eve-9.png"
                  alt="screenshot"
                  className="w-full h-auto"
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
