import React from "react";
import { About, Header, Home as HomeSection } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:mt-[var(--header-height)]">
        <HomeSection />
        <About />
      </main>
    </>
  );
}
