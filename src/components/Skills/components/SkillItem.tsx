interface Props {
  title: string;
  subtitle: string;
}

export default function SkillItem({ title, subtitle }: Props) {
  return (
    <div className="flex gap-2">
      <i className="bx bx-badge-check text-base text-dark-2"></i>
      <div>
        <h3 className="text-body-2 xs:text-body-1 font-medium leading-[18px]">{title}</h3>
        <span className="text-body-4 ">{subtitle}</span>
      </div>
    </div>
  );
}
