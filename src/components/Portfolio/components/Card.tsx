import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import { Button } from "@/components/ui/button";
import { Work } from "@/types";
import { useModalsDispatch } from "@/contexts";
import { useEffect, useState } from "react";

export default function Card({ id, title, preview, technologies, pet }: Work) {
  const dispath = useModalsDispatch();
  const openModal = () => dispath({ type: "OPEN_MODAL", payload: id });
  const [isFitContain, setIsFitContain] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    openModal();
  };
  useEffect(() => {
    const image = new window.Image();
    image.onload = function () {
      if (image.width < image.height) {
        setIsFitContain(true);
      }
    };
    image.src = preview;
  }, []);
  return (
    <article className="relative group p-4 md:px-5 md:py-6 border border-primary rounded-xl bg-light-2">
      <Link href="#" onClick={handleClick}>
        <Image
          className={[
            "w-full h-[270px] mb-6 rounded-xl duration-200",
            isFitContain ? "object-contain" : "object-cover",
          ].join(" ")}
          src={preview}
          width={410}
          height={270}
          alt="work 1"
        />
      </Link>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((item) => (
          <Chip title={item} key={item} />
        ))}
      </div>
      <h3 className="mb-1 font-medium">{title}</h3>
      <Button
        variant="ghost"
        className="group h-auto flex items-center gap-1 p-0 text-dark-3 hover:text-dark-2 hover:bg-transparent"
        onClick={openModal}
      >
        Read more
        <i className="bx bx-right-arrow-alt text-base transition-transform duration-300 group-hover:translate-x-1"></i>
      </Button>
      {pet && (
        <div className="absolute -top-1 -left-1.5 w-[84px] h-[84px] bg-label bg-contain bg-center bg-no-repeat">
          <span className="absolute top-[18px] left-[20px] font-medium text-white -rotate-45">
            Pet
          </span>
        </div>
      )}
    </article>
  );
}
