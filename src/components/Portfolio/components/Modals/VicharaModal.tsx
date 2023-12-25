import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function VicharaModal() {
  const { vichara } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "vichara" });
  return (
    <Dialog open={vichara.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center gap-8 sm:gap-16 px-4 md:px-10 pt-8 bg-[#F5F7F8]">
            <div className="text-center">
              <DialogHeading>Vichara Technologies</DialogHeading>
              {/* <DialogDescription className="text-left md:text-center">
                Eve allows clients to measure vitals, such as blood pressure, heart rate, oxygen
                saturation, disease risks and much more with only their smartphone and enables to
                create data-driven care plans. Eve admin is used as a remote monitoring platform for
                tracking vitals of company employees. It contains hundreds of health tips and helps
                to teach employees more about their health and enhance their overall well-being.
              </DialogDescription> */}
            </div>
            <div>
              <video
                className="w-full h-auto"
                width={768}
                height={590}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vichara/Mockup.mp4" type="video/mp4" />
              </video>
            </div>

            {/* <div className="w-full h-full max-h-[590px]  p-8">
            </div> */}
            {/* <Image src="/eve/eve-2.png" width={768} height={590} alt="preview" /> */}
            <DialogDescription className="text-left md:text-center ml-0 md:ml-auto">
              Developed a multi-page website using HTML, CSS, and Tailwind CSS. Implemented a
              variety of animations using GSAP that enrich the user experience with amazing visual
              elements.
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
