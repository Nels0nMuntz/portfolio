interface Props {
  position: "left" | "right";
  title: string;
  subtitle: string;
  duration: string;
}

export default function QualificationItem({ position, title, subtitle, duration }: Props) {
  const isLeft = position === "left";
  const isRight = !isLeft;
  return (
    <>
      <div className="group grid grid-cols-[1fr_max-content_1fr] gap-2 xs:gap-6">
        {isRight && <div></div>}

        {isRight && (
          <div>
            <span className="w-3 h-3 inline-block bg-dark-3 rounded-full"></span>
            <div className="w-px h-full block bg-dark-3 translate-x-[6px] -translate-y-[7px]"></div>
          </div>
        )}

        <div>
          <h3 className="text-body-1 font-medium">{title}</h3>
          <span className="inline-block text-body-2 mb-4">{subtitle}</span>
          <div className="text-body-2">
            <i className="uil uil-calendar-alt"></i> {duration}
          </div>
        </div>

        {isLeft && (
          <div>
            <span className="w-3 h-3 inline-block bg-dark-3 rounded-full"></span>
            <div className="w-px h-full block bg-dark-3 translate-x-[6px] -translate-y-[7px]"></div>
          </div>
        )}
      </div>
    </>
  );
}
