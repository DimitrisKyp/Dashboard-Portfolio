import AboutMe from "./mainSections/About";
import Home from "./mainSections/Home";
import Experience from "./mainSections/Experience";
import Projects from "./mainSections/Projects";
import Studies from "./mainSections/Studies";
import Interests from "./mainSections/Interests";
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

      <section id="experienceSection">
        <Experience />
      </section>

      <section id="projectsSection">
        <Projects />
      </section>

      <section id="studiesSection">
        <Studies />
      </section>

      <section id="interestsSection">
        <Interests />
      </section>

      <section id="contactSection">
        <Contact />
      </section>
    </div>
  );
}
