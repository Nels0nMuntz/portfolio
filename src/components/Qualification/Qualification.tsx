import Tabs from "./components/QualificationTabs";

export default function Qualification() {
  return (
    <section id="qualification" className="section">
      <div className="container">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal yourney</span>
        <div className="flex justify-center">
          <Tabs />
        </div>
      </div>
    </section>
  );
}
