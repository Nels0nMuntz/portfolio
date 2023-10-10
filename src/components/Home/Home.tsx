import React from "react";
import Social from "./components/Social";
import Data from "./components/Data";
import ScrollDown from "./components/ScrollDown";

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container grid gap-28">
        <div className="grid grid-cols-[0.5fr_3fr] md:grid-cols-[100px_repeat(2,_1fr)] xm:grid-cols-[116px_repeat(2,_1fr)] gap-5 xm:gap-8 items-center pt-14 md:pt-20">
          <Social />
          <div className="w-48 xs:w-52 md:w-64 xm:w-[300px] h-48 xs:h-52 md:h-64 xm:h-[300px] md:justify-self-center bg-profile bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_7px_rgba(255,_255,_255,_0.3)] xm:shadow-[inset_0_0_0_9px_rgba(255,_255,_255,_0.3)] order-0 md:order-1 animate-profile grayscale-[98%]"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
