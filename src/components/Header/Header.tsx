"use client";

import React from "react";
import Link from "next/link";
import NavLink from "./components/NavLink";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  return (
    <header className="w-full fixed bottom-0 md:bottom-auto md:top-0 left-0 z-fixed">
      <nav className="h-[var(--header-height)] flex justify-between items-center gap-4 container">
        <Link href="#" className="font-medium text-dark-2">
          Eugene
        </Link>
        <div className={["nav-menu", menuVisible ? "visible" : ""].join(" ")}>
          <ul className="grid grid-cols-3 gap-0 xs:gap-8 md:flex md:items-center md:justify-end md:gap-8">
            <li className="nav-item">
              <NavLink href="#home" isActive={true}>
                <i className="uil uil-estate text-lg md:hidden" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#about" isActive={false}>
                <i className="uil uil-user md:hidden" />
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#skills" isActive={false}>
                <i className="uil uil-file-alt md:hidden" />
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#servicess" isActive={false}>
                <i className="uil uil-briefcase md:hidden" />
                Servicess
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#portfolio" isActive={false}>
                <i className="uil uil-scenery md:hidden" />
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#contact" isActive={false}>
                <i className="uil uil-message md:hidden" />
                Contact
              </NavLink>
            </li>
          </ul>
          <Button
            variant="ghost"
            className="absolute right-5 bottom-2 text-2xl text-dark-2 hover:text-dark-1 md:hidden"
            onClick={closeMenu}
          >
            <i className="uil uil-times"></i>
          </Button>
        </div>
        <Button variant="ghost" className="px-2 md:hidden" onClick={openMenu}>
          <i className="uil uil-apps text-[1.1rem] cursor-pointer"></i>
        </Button>
      </nav>
    </header>
  );
}
