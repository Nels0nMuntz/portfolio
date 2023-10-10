import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "..";

interface Props {
  className?: string;
}

interface DialogDesLinkProps extends PropsWithChildren {
  href?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
}

export function DialogHeading({ children }: PropsWithChildren) {
  return <h3 className="text-4xl sm:text-5xl font-medium text-dark-2 mb-6">{children}</h3>;
}

export function DialogDescription({ children, className = "" }: PropsWithChildren & Props) {
  return <p className={`max-w-2xl mx-auto md:ml-0 text-lg sm:text-xl mb-8 ${className}`}>{children}</p>;
}

export function DialogDesLink({ href, variant, children }: DialogDesLinkProps) {
  return (
    <Button variant={variant} asChild className="justify-self-start">
      <Link href={href || ""} target="_blank">
        {children}
      </Link>
    </Button>
  );
}
