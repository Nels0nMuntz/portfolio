import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
  isActive: boolean;
}

export default function NavLink({ href, isActive, children }: Props) {
  return (
    <Link
      href={href}
      className={[
        "flex flex-col items-center font-medium text-body-2 text text-dark-2 hover:text-dark-1 duration-300",
        isActive ? "text-dark-1" : "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
