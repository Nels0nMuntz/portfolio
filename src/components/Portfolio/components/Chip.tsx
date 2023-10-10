interface Props {
  title: string;
}

export default function Chip({ title }: Props) {
  return <span className="block px-2 py-[0.1rem] bg-stone-100 rounded-lg">{title}</span>;
}
