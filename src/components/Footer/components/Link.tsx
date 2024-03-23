"use client"

import { PropsWithChildren } from "react";
import NextLink from "next/link";

interface Props extends PropsWithChildren {
    href: string;
    className?: string;
}

export default function Link({ href, children, className }: Props) {
    const handleClick: React.MouseEventHandler = (e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView();
    }
    return (
        <NextLink href={href} className={className} onClick={handleClick}>
            {children}
        </NextLink>
    )
}
