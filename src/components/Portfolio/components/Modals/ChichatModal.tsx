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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/movier/movier-hand.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static -left-16 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Chichat</DialogHeading>
              <DialogDescription>Realtime Chat Application</DialogDescription>
              <DialogDesLink href="https://chichat-web.netlify.app">Open live site</DialogDesLink>
            </div>
          </div>
          <div className="py-12 px-4 md:px-10 sm:text-base">
            <DialogDescription>
              Chichat is a user-friendly messaging platform facilitating real-time text and
              multimedia communication. Developed a robust user authentication system utilizing JWT
              and created dynamic chat rooms that enable users to exchange text and multimedia
              messages, including photos, videos, and voice notes. The application also features a
              user-friendly search functionality to connect with others. Built with React on the
              frontend, and powered by Express, MongoDB, and the Socket.io web socket library on the
              backend.
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
