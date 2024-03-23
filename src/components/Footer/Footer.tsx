import NextLink from "next/link";
import Link from "./components/Link";

export default function Footer() {
  return (
    <footer className="bg-light-2 border-t-[1px]">
      <div className="container py-8">
        {/* <h2 className="mb-8 text-large text-center text-dark-2">Eugene</h2> */}
        <ul className="flex justify-center gap-6 mb-8">
          <li>
            <Link href="#about" className="text-dark-2 hover:text-dark-1">
              About
            </Link>
          </li>
          <li>
            <Link href="#qualification" className="text-dark-2 hover:text-dark-1">
              Qualification
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="text-dark-2 hover:text-dark-1">
              Projects
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-5">
          <NextLink
            href="https://t.me/ev6enij"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
            <span className="sr-only">telegram</span>
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/evgeniy-chekerdes"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
            <span className="sr-only">dribbble</span>
          </NextLink>
          <NextLink
            href="https://github.com/Nels0nMuntz"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
            <span className="sr-only">github</span>
          </NextLink>
        </div>
        <span className="block mt-16 text-body-3 text-center text-dark-2">
          &#169; EugeneChekerdes. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
