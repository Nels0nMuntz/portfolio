interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
}

export default function InfoItem({ title, subtitle, icon }: Props) {
  return (
    <div className="px-5 py-4 text-center bg-light-2 border border-solid border-[rgba(0,_0,_0,_0.1)] rounded-xl">
      <span className="text-2xl text-dark-2 mb-2">{icon}</span>
      <h3 className="font-medium text-body-1">{title}</h3>
      <span className="">{subtitle}</span>
    </div>
  );
}
