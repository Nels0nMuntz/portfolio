import SkillItem from "./components/SkillItem";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        <div className="flex justify-center">
          <div className="px-4 xs:px-6 sm:px-16 py-4 xs:py-6 sm:py-8 border border-primary rounded-2xl bg-light-2">
            {/* <h3 className="text-body-1 font-medium text-center mb-6">Frontend development</h3> */}
            <div className="flex justify-center gap-10">
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="HTML" subtitle="Advanced" />
                <SkillItem title="CSS" subtitle="Advanced" />
                <SkillItem title="SASS/SCSS" subtitle="Advanced" />
                <SkillItem title="Bootstrap" subtitle="Intermediate" />
                <SkillItem title="Tailwindcss" subtitle="Advanced" />
                <SkillItem title="GSAP" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="JavaScript" subtitle="Advanced" />
                <SkillItem title="TypeScript" subtitle="Advanced" />
                <SkillItem title="Webpack, Rollup" subtitle="Advanced" />
                <SkillItem title="Vite" subtitle="Intermediate" />
                <SkillItem title="Gulp" subtitle="Advanced" />
                <SkillItem title="Git" subtitle="Advanced" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="React.js" subtitle="Advanced" />
                <SkillItem title="Next.js" subtitle="Intermediate" />
                <SkillItem title="Redux" subtitle="Advanced" />
                <SkillItem title="MobX" subtitle="Intermediate" />
                <SkillItem title="Material UI" subtitle="Advanced" />
                <SkillItem title="Storybook" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="Docker" subtitle="Intermediate" />
                <SkillItem title="GitLab" subtitle="Intermediate" />
                <SkillItem title="AWS" subtitle="Intermediate" />
                <SkillItem title="SEO" subtitle="Intermediate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
