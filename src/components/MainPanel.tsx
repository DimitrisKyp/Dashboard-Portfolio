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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [rootMarginValue, setRootMarginValue] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024 ? "-60px 0px" : "-100px 0px",
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setRootMarginValue(width >= 768 && width <= 1024 ? "-60px 0px" : "-100px 0px");
    };

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
        rootMargin: rootMarginValue,
        threshold: isMobile ? 0.3 : 0.5,
      },
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [dispatch, rootMarginValue]);

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
