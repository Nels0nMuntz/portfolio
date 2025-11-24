import React from "react";
import type { Metadata } from "next";
import {
  About,
  Contact,
  Home as HomeSection,
  Portfolio,
  Qualification,
  Skills,
} from "@/components";

export const metadata: Metadata = {
  other: {
    freelancehunt: "b160fcb0d065e22",
  },
};

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
    </>
  );
}
