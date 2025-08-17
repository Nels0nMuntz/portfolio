import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function ChichatModal() {
  const { chichat } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "chichat" });
  return (
    <Dialog open={chichat.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="justify-center px-4 md:px-10 pt-8 bg-modal">
            <div className="flex flex-col items-center justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Chichat</DialogHeading>
              <DialogDescription className="md:ml-auto">
                Realtime Chat Application
              </DialogDescription>
              <div className="flex gap-x-4">
                <DialogDesLink href="https://chichat-web.netlify.app">Open live site</DialogDesLink>
                <DialogDesLink variant="outline" href="https://github.com/Nels0nMuntz/chichat">
                  Open code
                </DialogDesLink>
              </div>
            </div>
          </div>
          <div className="py-12 px-4 md:px-10 sm:text-base text-center">
            <DialogDescription className="max-w-4xl md:ml-auto">
              Chichat is a user-friendly messaging platform facilitating real-time text and
              multimedia communication. Developed a robust user authentication system utilizing JWT
              and created dynamic chat rooms that enable users to exchange text and multimedia
              messages, including photos, videos, and voice notes. The application also features a
              user-friendly search functionality to connect with others. Built with React on the
              frontend, and powered by Express, MongoDB, and the Socket.io web socket library on the
              backend.
            </DialogDescription>
            <DialogDescription className="max-w-4xl md:ml-auto">
              Credentials: email: eugene@gmail.com, Password: Aasdf1234
            </DialogDescription>
          </div>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/chichat/chichat-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/chichat/chichat-2.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/chichat/chichat-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/chichat/chichat-4.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/chichat/chichat-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
            </Slider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
