"use client";

import { Work } from "@/types";
import Card from "./components/Card";
import DingModal from "./components/Modals/DingModal";
import { ModalsProvider } from "@/contexts";
import EveModal from "./components/Modals/EveModal";
import MCMModal from "./components/Modals/MCMModal";
import MovierModal from "./components/Modals/MovierModal";
import ChichatModal from "./components/Modals/ChichatModal";
import QTalkModal from "./components/Modals/QTalkModal";
import VicharaModal from "./components/Modals/VicharaModal";
import HappyBookingModal from "./components/Modals/HappyBookingModal";
import RaffleModal from "./components/Modals/RaffleModal";

const works: Work[] = [
  {
    id: "ding",
    title: "Ding Ding Ding",
    preview: "/dingdingding/ddd-homepage.png",
    technologies: ["HTML", "CSS", "JS", "Gulp"],
  },
  {
    id: "vichara",
    title: "Vichara",
    preview: "/vichara/vichara-preview.png",
    technologies: ["HTML", "CSS", "Tailwind CSS", "GSAP", "JS", "Gulp"],
  },
  {
    id: "happyBooking",
    title: "Happy Booking",
    preview: "/happy-booking/happy-booking-1.png",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    id: "eve",
    title: "EVE Admin",
    preview: "/eve/eve-preview.png",
    technologies: ["React", "Redux", "Redux-saga", "Material UI", "Webpack"],
  },
  {
    id: "mcm",
    title: "Mark Carroll Method",
    preview: "/mcm/mcm-preview.png",
    technologies: ["React", "Redux", "Redux-saga", "Ant Design", "Webpack", "PWA"],
  },
  {
    id: "raffle",
    title: "Raffle House",
    preview: "/raffle/rh-preview.png",
    technologies: [
      "React",
      "Redux",
      "Redux-Thunk",
      "React-Admin",
      "Express",
      "MongoDB",
      "SCSS",
      "Storybook",
      "Webpack",
      "Rollup",
    ],
  },
  {
    id: "movier",
    title: "Movier",
    preview: "/movier/movier-preview.png",
    technologies: ["React", "MobX", "Material UI", "TMDb"],
    pet: true,
  },
  {
    id: "chichat",
    title: "Chichat",
    preview: "/chichat/chichat-1.png",
    technologies: ["React", "Redux", "Material UI", "Firebase", "Express", "MongoDB", "WebSocket"],
    pet: true,
  },
  {
    id: "qtalk",
    title: "qTalk",
    preview: "/qtalk/qtalk-preview.png",
    technologies: [
      "Next",
      "React",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Jest",
    ],
    pet: true,
  },
];

export default function Portfolio() {
  return (
    <ModalsProvider>
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <span className="section-subtitle">Most recent works</span>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[360px] md:max-w-none mx-auto gap-6 md:gap-8">
            {works.map((data, index) => (
              <Card {...data} key={index} />
            ))}
          </div>
        </div>
      </section>
      <DingModal />
      <EveModal />
      <MCMModal />
      <MovierModal />
      <ChichatModal />
      <QTalkModal />
      <RaffleModal />
      <VicharaModal />
      <HappyBookingModal />
    </ModalsProvider>
  );
}
