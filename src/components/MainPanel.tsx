import AboutMe from "./mainSections/About";
import Home from "./mainSections/Home";
import Skills from "./mainSections/Skills";
import WorkingExperience from "./mainSections/WorkingExperience";
import Studies from "./mainSections/Studies";
import PersonalNotes from "./mainSections/PersonalNotes";
import Contact from "./mainSections/Contact";

export default function MainPanel() {
  return (
    <div className="h-[90%] w-[90%] space-y-6 overflow-y-auto">
      <section id="homeSection">
        <Home />
      </section>

      <section id="aboutSection">
        <AboutMe />
      </section>

      <section id="skillsSection">
        <Skills />
      </section>

      <section id="experienceSection">
        <WorkingExperience />
      </section>

      <section id="studiesSection">
        <Studies />
      </section>

      <section id="personalNotesSection">
        <PersonalNotes />
      </section>

      <section id="contactSection">
        <Contact />
      </section>
    </div>
  );
}
