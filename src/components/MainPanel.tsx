import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActiveMenu } from "../store/slices/preferencesSlice";
import AboutMe from "./mainSections/About";
import Home from "./mainSections/Home";
import Skills from "./mainSections/Skills";
import WorkingExperience from "./mainSections/WorkingExperience";
import Studies from "./mainSections/Studies";
import PersonalNotes from "./mainSections/PersonalNotes";
import Contact from "./mainSections/Contact";
import "../../src/assets/styles/scrollbar.css";

export default function MainPanel() {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatch(setActiveMenu(entry.target.id));
          }
        });
      },
      {
        root: containerRef.current,
        rootMargin: "0px",
        threshold: 0.4,
      },
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [dispatch]);

  return (
    <div ref={containerRef} className="custom-scrollbar h-[90%] w-[90%] space-y-6 overflow-y-auto scroll-smooth">
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
