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
              src="/raffle/rh-2m.png"
              width={410}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static w-full max-w-lg h-auto max-h-[600px] object-contain justify-self-center md:justify-self-auto order-2 md:order-none ml-0 2sm:ml-0"
              loading="eager"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>Raffle House</DialogHeading>
              <DialogDescription>
                Online raffle platform, which allows people the chance to win either their
                multi-million pound dream home, or a commensurate multi-million pound cash prize.
              </DialogDescription>
              <DialogDesLink href="https://rafflehouse.com/">Open live site</DialogDesLink>
            </div>
          </div>
          <DialogDescription className="max-w-4xl py-12 px-4 md:px-10 sm:text-base">
            <p>Major Implementations:</p>
            <ul className="list-disc [&>li]:mt-2 pl-6">
              <li>
                <strong>User Authentication:</strong> convenient sign-in and sign-up using Google,
                Apple, credentials.
              </li>
              <li>
                <strong>Profile Management:</strong> profile page for users to view and edit
                personal information, manage email marketing subscriptions, and review order
                history.
              </li>
              <li>
                <strong>Payment Processing:</strong> Secure options for purchasing tickets and
                subscriptions using credit cards or PayPal.
              </li>
              <li>
                <strong>Gift Functionality:</strong> Ability to invite friends and gift them raffle
                tickets.
              </li>
              <li>
                <strong>UI Components Library:</strong> Developed a comprehensive UI components
                library to enable the reuse and sharing of common components across the main
                website, blog, and multiple landing pages.
              </li>
              <li>
                <strong>CMS Development:</strong> Designed and implemented a custom Content
                Management System (CMS) for complex management of raffles and competitions, user
                accounts, staff and winners. The CMS also includes features for generating and
                downloading detailed reports, configuring landing pages, managing ticket and
                subscription options, and so on.
              </li>
            </ul>
          </DialogDescription>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-1m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-2.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-2m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-3m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-4.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-4m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-5m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-6.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-6m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-7m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-8.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-8m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/raffle/rh-9.png"
                  alt="screenshot"
                  className="w-full h-auto"
                  loading="eager"
                />
              </SwiperSlide>
              {/* <SwiperSlide className="hidden sm:block">
                <div className="w-full flex justify-center">
                  <Image
                    width={680}
                    height={540}
                    src="/raffle/rh-9m.png"
                    alt="screenshot"
                    className="w-full max-w-[240px] mx-auto h-auto"
                  />
                </div>
              </SwiperSlide> */}
            </Slider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
