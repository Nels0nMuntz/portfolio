"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollUp() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 560) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Link
      href="#home"
      className="fixed right-4 xs:right-6 xm:right-10 -bottom-1/4 px-[0.4rem] xm:px-2 py-1 bg-dark-2 hover:bg-dark-1 rounded-[0.4rem] shadow-md z-tooltip duration-300 data-[state=visible]:bottom-16 data-[state=visible]:md:bottom-12"
      data-state={visible ? "visible" : ""}
    >
      <i className="uil uil-arrow-up text-xl xm:text-2xl text-light-1"></i>
    </Link>
  );
}
