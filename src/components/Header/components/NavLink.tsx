import { PropsWithChildren, forwardRef } from "react";

interface Props extends PropsWithChildren {
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink = forwardRef<HTMLAnchorElement, Props>(function NavLinkComponent(
  { href, isActive, onClick, children },
  ref,
) {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView()
    onClick(e);
  };
  return (
    <a
      ref={ref}
      href={href}
      className={[
        "flex flex-col items-center font-medium text-body-2 hover:text-dark-1 duration-300",
        isActive ? "text-dark-1" : "text text-dark-2",
      ].join(" ")}
      onClick={handleClick}
    >
      {children}
    </a>
  );
});

export default NavLink;
