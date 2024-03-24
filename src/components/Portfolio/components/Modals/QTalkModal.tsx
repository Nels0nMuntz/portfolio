import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";
import Slider from "../Slider";

const data = [
  {
    term: "User Authentication",
    definition: "log in with Google or custom credentials using NextAuth",
  },
  {
    term: "Infinite Scrolling",
    definition: "a smooth browsing experience with dynamically loading posts",
  },
  { term: "Customized Feed", definition: "authenticated users have access to a personalized feed" },
  {
    term: "Efficient Data Fetching",
    definition: "utilizing React-Query, the app ensures fast and optimized data retrieva",
  },
  { term: "Optimistic updates", definition: "ensures a seamless and responsive user experience" },
  { term: "Post Editor", definition: "a convenient and highly functional post editor" },
  {
    term: "Image uploads and link previews",
    definition: "easily upload images and share links with automatic previews",
  },
  {
    term: "Interactive Comments",
    definition: "an ability to comment on posts, featuring nested replies",
  },
  { term: "Voting", definition: "upvoting or downvoting both posts and comments" },
];

export default function QTalkModal() {
  const { qtalk } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "qtalk" });
  return (
    <Dialog open={qtalk.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center px-4 md:px-10 pt-8 bg-modal">
            <Image
              src="/qtalk/qtalk-2.png"
              width={410}
              height={700}
              alt="preview"
              className="relative left-8 2sm:-left-4 w-full max-w-lg h-auto justify-self-center md:justify-self-auto order-2 md:order-none ml-[-24%] 2sm:ml-0"
            />
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left order-1 md:order-none">
              <DialogHeading>qTalk</DialogHeading>
              <DialogDescription>
                <strong>qTalk</strong> is a network of communities where people can dive into their
                interests, hobbies and passions.
              </DialogDescription>
              <div className="flex gap-x-4">
                <DialogDesLink href="https://qtalk.vercel.app/">Open live site</DialogDesLink>
                <DialogDesLink variant="outline" href="https://github.com/Nels0nMuntz/qTalk-client">Open code</DialogDesLink>
              </div>
            </div>
          </div>
          <DialogDescription className="max-w-4xl mt-6 py-4 px-4 md:px-10 sm:text-base">
            qTalk is an application where users can create communities based on their interests,
            hobbies, or passions. In this vibrant online space, users can submit posts, share links,
            and engage in discussions within these communities. Each community, known as a subtalk,
            is dedicated to a specific topic, allowing like-minded people to connect and share their
            thoughts. Users can upvote or downvote posts and comments, determining their visibility
            and popularity within the community.
          </DialogDescription>
          <DialogDescription className="max-w-4xl py-4 px-4 md:px-10 sm:text-base">
            <span className="block mb-4">Key features implemented in the application include:</span>
            <ul className="space-y-3">
              {data.map(({ term, definition }, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2">✔</span>
                  <span>
                    <strong>{term}:</strong>&nbsp;{definition}.
                  </span>
                </li>
              ))}
            </ul>
          </DialogDescription>
          <div className="pt-20 pb-14 pl-4 md:pl-0 bg-[#F8F9F9]">
            <Slider>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-1.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-2.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-3.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-4.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-5.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-6.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-7.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-8.png"
                  alt="screenshot"
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-9.png"
                  alt="screenshot"
                  className="w-full h-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="hidden sm:block">
                <Image
                  width={680}
                  height={540}
                  src="/qtalk/qtalk-10.png"
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
