import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

export default function PulseUpModal() {
  const { pulseup } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "pulseup" });
  console.log({ pulseup });

  return (
    <Dialog open={pulseup.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/pulseup/pulseup-preview.png"
              width={380}
              height={700}
              alt="preview"
              className="static 2sm:relative md:static w-full max-w-[320px] mx-auto h-auto justify-self-center md:justify-self-auto order-2 md:order-none"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>PulseUp</DialogHeading>
              <div className="flex flex-col items-stretch xsm:items-center md:items-start gap-y-1">
                <DialogDescription>
                  PulseUp is an anonymous, real-time platform where your daily tap supports causes,
                  trends, and topics, shaping a live map of what’s gaining momentum locally and
                  globally.
                </DialogDescription>
                <DialogDesLink href="https://apps.apple.com/us/app/pulse-up-what-matters-today/id6744602366">
                  Download on the App Store
                </DialogDesLink>
                <DialogDesLink href="https://play.google.com/store/apps/details?id=com.pulseup">
                  Get it on Google Play
                </DialogDesLink>
                <DialogDesLink href="https://pulseup.com">Open live site</DialogDesLink>
              </div>
            </div>
          </div>
          <div className="py-12 px-4 md:px-10 sm:text-base text-center">
            <DialogDescription className="max-w-4xl md:ml-auto text-left">
              PulseUp is an anonymous, real-time platform that lets you support causes, candidates,
              teams, and trends with a single tap. Users can support candidates, causes, teams,
              protests, memes, or cultural moments. Each choice lasts 24 hours, shaping a live map
              of what people are backing locally and globally. PulseUp reveals what’s gaining
              momentum and invites everyone to support what matters.
            </DialogDescription>
            <DialogDescription className="max-w-4xl md:ml-auto font-bold text-left">
              What I Worked On:
            </DialogDescription>
            <DialogDescription className="max-w-4xl md:ml-auto text-left">
              <h3 className="text-inherit">Mobile App</h3>
              <ul className="list-disc list-inside">
                <li>
                  Built the mobile app from the ground up, covering everything from architecture
                  design to final release.
                </li>
                <li>Released and maintained the app on App Store and Google Play.</li>
                <li>Solved platform-specific issues (e.g., UI/UX differences, deep links).</li>
                <li>
                  Optimized app performance for smooth, responsive interactions, fluid animations,
                  optimistic UI updates.
                </li>
                <li>
                  Worked on offline support and improved error handling for unstable network
                  conditions.
                </li>
                <li>
                  Regularly proposed and discussed new product ideas, helping improve the app’s user
                  experience and features.
                </li>
              </ul>
            </DialogDescription>
            <DialogDescription className="max-w-4xl md:ml-auto text-left">
              <h3 className="text-inherit">Web App</h3>
              <ul className="list-disc list-inside">
                <li>
                  Added new features to extend the functionality available on the web platform.
                </li>
                <li>
                  Optimized performance by minimizing unnecessary re-renders, implementing lazy
                  loading and code splitting, reducing network requests, and using modern fonts and
                  image formats.
                </li>
                <li>
                  Maintained code quality with refactoring, bug fixes, and reusable components.
                </li>
                <li>Suggested ideas to make the app easier and more enjoyable to use.</li>
              </ul>
            </DialogDescription>
          </div>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-1.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-2.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-3.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-4.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-5.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-6.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/pulseup/pulseup-mobile-7.png"
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
