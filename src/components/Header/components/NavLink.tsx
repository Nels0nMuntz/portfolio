import Link from "next/link";
import { PropsWithChildren, forwardRef } from "react";

interface Props extends PropsWithChildren {
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink = forwardRef<HTMLAnchorElement, Props>(function NavLinkComponent(
  { href, isActive, onClick, children },
  ref,
) {
  return (
    <Link
      ref={ref}
      href={href}
      className={[
        "flex flex-col items-center font-medium text-body-2 hover:text-dark-1 duration-300",
        isActive ? "text-dark-1" : "text text-dark-2",
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </Link>
  );
});

export default NavLink;
