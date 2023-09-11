import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light-2 border-t-[1px]">
      <div className="container py-8">
        <h2 className="mb-8 text-large text-center text-dark-2">Eugene</h2>
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
          <Link
            href="https://www.instagram.com/"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
            <span className="sr-only">instagram</span>
          </Link>
          <Link
            href="https://dribbble.com/"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-dribbble"></i>
            <span className="sr-only">dribbble</span>
          </Link>
          <Link
            href="https://github.com/"
            className="inline-flex p-2 text-xl text-light-1 bg-dark-2 hover:bg-dark-1 rounded-lg"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
            <span className="sr-only">github</span>
          </Link>
        </div>
        <span className="block mt-16 text-body-3 text-center text-dark-2">
          &#169; EugeneChekerdes. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
