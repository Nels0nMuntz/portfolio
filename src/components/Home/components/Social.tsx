import React from "react";
import Link from "next/link";

export default function Social() {
  return (
    <div className="grid grid-cols-[max-content] gap-4">
      <Link href="https://t.me/ev6enij" target="_blank">
        <i className="uil uil-telegram-alt text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">telegram</span>
      </Link>
      <Link href="https://www.linkedin.com/in/evgeniy-chekerdes" target="_blank">
        <i className="uil uil-linkedin-alt text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">linkedin</span>
      </Link>
      <Link href="https://github.com/Nels0nMuntz" target="_blank">
        <i className="uil uil-github-alt text-lg text-dark-2 hover:text-dark-1"></i>
        <span className="sr-only">github</span>
      </Link>
    </div>
  );
}
