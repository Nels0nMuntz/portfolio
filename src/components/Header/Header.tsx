"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavLink from "./components/NavLink";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks";

const menuItems = [
  { name: "Home", href: "#home", iconClassName: "uil-estate" },
  { name: "About", href: "#about", iconClassName: "uil-user" },
  { name: "Skills", href: "#skills", iconClassName: "uil-file-alt" },
  { name: "Qualification", href: "#qualification", iconClassName: "uil-briefcase" },
  { name: "Portfolio", href: "#portfolio", iconClassName: "uil-scenery" },
  { name: "Contact", href: "#contact", iconClassName: "uil-message" },
] as const;

type NavLinkTypes = (typeof menuItems)[number]["href"];

export default function Header() {
  const matches = useMediaQuery("(min-width: 768px)");

  const [activeLink, setActiveLink] = useState<NavLinkTypes>("#home");
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const [visibleShadow, setVisibleShadow] = React.useState(false);
  const navLinks = useRef<(HTMLAnchorElement | null)[]>([]);

  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);
  const onClickNavLink = (href: NavLinkTypes) => {
    setActiveLink(href);
    closeMenu();
  };
  useEffect(() => {
    navLinks.current[0]?.focus();
  }, [visibleMenu]);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 80) {
        setVisibleShadow(true);
      } else {
        setVisibleShadow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header
      className="w-full fixed bottom-0 md:bottom-auto md:top-0 left-0 z-fixed bg-light-1 shadow-header md:shadow-none data-[shadow=visible]:shadow-header"
      data-shadow={visibleShadow ? "visible" : "invisible"}
    >
      <nav className="h-[var(--header-height)] flex justify-between items-center gap-4 container">
        <Link href="/" className="font-medium text-dark-2">
          Eugene
        </Link>
        <div
          className="fixed -bottom-full left-0 w-full pt-8 pb-16 px-1 xs:px-6 bg-light-1 shadow-header rounded-t-3xl duration-300 md:static md:bg-none md:p-0 md:shadow-none data-[state=visible]:bottom-0"
          data-state={visibleMenu ? "visible" : "invisible"}
        >
          <div className={`${!(visibleMenu || matches) ? "invisible" : ""}`}>
            <ul className="grid grid-cols-3 gap-0 xs:gap-8 md:flex md:items-center md:justify-end md:gap-8">
              {menuItems.map(({ name, href, iconClassName }) => (
                <li className="nav-item" key={name}>
                  <NavLink
                    href={href}
                    isActive={activeLink === href}
                    onClick={() => onClickNavLink(href)}
                    ref={(node) => navLinks.current.push(node)}
                  >
                    <i className={`uil ${iconClassName} text-lg md:hidden`} />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              className="absolute right-5 bottom-2 text-2xl text-dark-2 hover:text-dark-1 md:hidden"
              onClick={closeMenu}
            >
              <i className="uil uil-times"></i>
            </Button>
          </div>
        </div>
        <Button variant="ghost" className="px-2 md:hidden" onClick={openMenu}>
          <i className="uil uil-apps text-[1.1rem] cursor-pointer"></i>
        </Button>
      </nav>
    </header>
  );
}
