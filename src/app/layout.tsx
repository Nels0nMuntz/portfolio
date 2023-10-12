import "swiper/css";
import "./globals.css";

import type { Metadata } from "next";
import { poppins } from "./font";
import { Footer, Header, ScrollUp } from "@/components";

import favicon from "../../public/favicon.ico";

export const metadata: Metadata = {
  title: "Eugene Chekerdes",
  description:
    "Eugene Chekerdes is a frontend developer who turns designs into exceptional web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
      </head>
      <body>
        <Header />
        <main className="mb-[var(--header-height)] md:mb-0 md:mt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
