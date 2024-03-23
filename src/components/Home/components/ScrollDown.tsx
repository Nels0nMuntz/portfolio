"use client"

import Link from "next/link";

export default function ScrollDown() {
  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView();
}
  return (
    <div className="hidden md:block ml-[7.5rem] xm:ml-[9.25rem]">
      <Link href="#about" className="inline-flex items-center group" onClick={handleClick}>
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={1.5}
        >
          <path
            className="stroke-dark-2 group-hover:stroke-dark-1 animate-scroll"
            d="M123.359,79.775l0,72.843"
            fill="none"
            strokeWidth={20}
          ></path>
          <path
            id="mouse"
            className="stroke-dark-2 group-hover:stroke-dark-1"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            fill="none"
            strokeWidth={20}
          ></path>
        </svg>
        <span className="mr-1 ml-0.5 font-medium text-dark-2 group-hover:text-dark-1">
          Scroll Down
        </span>
        <i className="uil uil-arrow-down text-xl text-dark-2 group-hover:text-dark-1"></i>
      </Link>
    </div>
  );
}
