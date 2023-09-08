import React from "react";
import Link from "next/link";

export default function Social() {
  return (
    <div className="grid grid-cols-[max-content] gap-4">
      <Link href="https://www.instagram.com/" target="_blank">
        <i className="uil uil-instagram text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">instagram</span>
      </Link>
      <Link href="https://dribbble.com/" target="_blank">
        <i className="uil uil-dribbble text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">dribbble</span>
      </Link>
      <Link href="https://github.com/" target="_blank">
        <i className="uil uil-github-alt text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">github</span>
      </Link>
    </div>
  );
}
