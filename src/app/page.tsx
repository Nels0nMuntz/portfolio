import React from "react";
import {
  About,
  Contact,
  Header,
  Home as HomeSection,
  Qualification,
  ScrollUp,
  Skills,
} from "@/components";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mb-[var(--header-height)] md:mb-0 md:mt-[var(--header-height)]">
        <HomeSection />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
