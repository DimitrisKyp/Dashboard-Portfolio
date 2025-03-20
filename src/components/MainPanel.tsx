import { useEffect, useRef, useState } from "react";
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
  const [thresholdValue, setThresholdValue] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setThresholdValue(0.1);
      } else if (width >= 400 && width < 768) {
        setThresholdValue(0.2);
      } else if (width >= 768 && width < 1024) {
        setThresholdValue(0.4);
      } else {
        setThresholdValue(0.5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        rootMargin: "-100px 0px",
        threshold: thresholdValue,
      },
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [dispatch, thresholdValue]);

  return (
    <div ref={containerRef} className="custom-scrollbar h-[90%] w-[90%] space-y-6 overflow-y-auto scroll-smooth text-appColor">
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
