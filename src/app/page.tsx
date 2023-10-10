import React from "react";
import {
  About,
  Contact,
  Home as HomeSection,
  Portfolio,
  Qualification,
  Skills,
} from "@/components";

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
