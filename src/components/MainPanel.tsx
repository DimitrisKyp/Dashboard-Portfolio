import AboutMe from "./mainSections/AboutMe";

export default function MainPanel() {
  return (
    <div className="h-[90%] w-[90%] space-y-6 overflow-y-auto">
      <section id="homeSection">
        <AboutMe />
      </section>

      <section id="experienceSection" className={`rounded-sm bg-secondLayer p-8 shadow-lg`}></section>

      <section id="projectsSection" className={`rounded-sm bg-secondLayer p-8 shadow-lg`}></section>

      <section id="studiesSection" className={`rounded-sm bg-secondLayer p-8 shadow-lg`}></section>

      <section id="interestsSection" className={`rounded-sm bg-secondLayer p-8 shadow-lg`}></section>

      <section id="contactSection" className={`rounded-sm bg-secondLayer p-8 shadow-lg`}></section>
    </div>
  );
}
