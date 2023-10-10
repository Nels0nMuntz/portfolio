import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  linkText: string;
  linkHref: string;
}

export default function ContactCard({ title, subtitle, icon, linkText, linkHref }: Props) {
  return (
    <div className="flex flex-col p-4 text-center bg-light-2 border border-primary rounded-xl">
      <span className="block mb-1 text-2xl text-dark-2">{icon}</span>
      <h3 className="text-body-2 font-medium">{title}</h3>
      <span className="block mb-3 text-body-2">{subtitle}</span>
      <Link
        href={linkHref}
        target="_blank"
        className="group inline-flex items-center justify-center gap-1 text-body-2 text-dark-3"
      >
        {linkText}
        <i className="bx bx-right-arrow-alt text-base transition-transform duration-300 group-hover:translate-x-1"></i>
      </Link>
    </div>
  );
}
