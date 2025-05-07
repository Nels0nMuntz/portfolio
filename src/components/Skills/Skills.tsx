import SkillItem from "./components/SkillItem";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        <div className="flex justify-center">
          <div className="w-full px-4 xs:px-6 sm:px-16 py-4 xs:py-6 sm:py-8 border border-primary rounded-2xl bg-light-2">
            {/* <h3 className="text-body-1 font-medium text-center mb-6">Frontend development</h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-10">
              <div className="flex flex-col items-start gap-4 pb-4 sm:pb0 mb-4 sm:mb-0 border-b sm:border-0 border-primary">
                <SkillItem title="HTML" subtitle="Advanced" />
                <SkillItem title="CSS, SCSS" subtitle="Advanced" />
                <SkillItem title="Tailwindcss" subtitle="Advanced" />
                <SkillItem title="Shadcn" subtitle="Advanced" />
                <SkillItem title="Material UI" subtitle="Advanced" />
                <SkillItem title="Ant Design" subtitle="Advanced" />
                <SkillItem title="GSAP" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4 pb-4 sm:pb0 mb-4 sm:mb-0 border-b sm:border-0 border-primary">
                <SkillItem title="JavaScript" subtitle="Advanced" />
                <SkillItem title="TypeScript" subtitle="Advanced" />
                <SkillItem title="Webpack" subtitle="Advanced" />
                <SkillItem title="Vite" subtitle="Intermediate" />
                <SkillItem title="Rollup" subtitle="Intermediate" />
                <SkillItem title="Gulp" subtitle="Advanced" />
                <SkillItem title="Storybook" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4 pb-4 sm:pb0 mb-4 sm:mb-0 border-b sm:border-0 border-primary">
                <SkillItem title="React.js" subtitle="Advanced" />
                <SkillItem title="React Native" subtitle="Intermediate" />
                <SkillItem title="Next.js" subtitle="Intermediate" />
                <SkillItem title="Angular" subtitle="Intermediate" />
                <SkillItem title="Redux" subtitle="Advanced" />
                <SkillItem title="Zustand" subtitle="Advanced" />
                <SkillItem title="RxJS" subtitle="Intermediate" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <SkillItem title="Firebase" subtitle="Intermediate" />
                <SkillItem title="Docker" subtitle="Intermediate" />
                <SkillItem title="AWS" subtitle="Intermediate" />
                <SkillItem title="CI/CD" subtitle="Intermediate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
