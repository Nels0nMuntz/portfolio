import SkillItem from "./components/SkillItem";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        <div className="flex justify-center">
          <div className="px-4 xs:px-6 sm:px-16 py-4 xs:py-6 sm:py-8 border border-[rgba(0,_0,_0,_0.1)] rounded-2xl bg-light-2">
            <h3 className="text-body-1 font-medium text-center mb-6">Frontend development</h3>
            <div className="flex justify-center gap-10">
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="HTML" subtitle="Basic" />
                <SkillItem title="CSS" subtitle="Advanced" />
                <SkillItem title="JavaScript" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="Bootstrap" subtitle="Intermediate" />
                <SkillItem title="React" subtitle="Intermediate" />
                <SkillItem title="Git" subtitle="Intermediate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
