import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "../store/slices/settingsSlice";
import {
  faBriefcase,
  faCloudArrowDown,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptopCode,
  faMoon,
  faPerson,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationPanel() {
  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.settings.theme);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "homeSection", icon: faHome, label: "Home" },
    { id: "experienceSection", icon: faBriefcase, label: "Experience" },
    { id: "projectsSection", icon: faLaptopCode, label: "Projects" },
    { id: "studiesSection", icon: faGraduationCap, label: "Studies" },
    { id: "interestsSection", icon: faPerson, label: "Interests" },
    { id: "contactSection", icon: faEnvelope, label: "Contact" },
  ];

  return (
    <nav className="flex h-[90%] flex-col">
      {/* Main Nav Buttons */}
      <div className="flex flex-col space-y-5">
        {navItems.map(({ id, icon, label }) => (
          <div key={id} className="relative flex items-center justify-center">
            <button
              onClick={() => scrollToSection(id)}
              onMouseEnter={() => setHoveredButton(id)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`relative bg-transparent transition-colors duration-300 ${
                activeSection === id ? "text-textSecondary" : "text-textPrimary"
              } hover:text-hover`}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </button>
            {/* Tooltip */}
            {hoveredButton === id && <span className="bg-tooltip absolute left-12 w-max rounded px-2 py-1 text-sm shadow-md">{label}</span>}
          </div>
        ))}
        {/* Theme Toggle Button */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handleThemeToggle}
            onMouseEnter={() => setHoveredButton("theme")}
            onMouseLeave={() => setHoveredButton(null)}
            className="hover:text-hover bg-transparent transition-colors duration-300"
          >
            <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} size="lg" />
          </button>
          {hoveredButton === "theme" && (
            <span className="bg-tooltip absolute left-12 w-max rounded px-2 py-1 text-sm shadow-md">Toggle theme</span>
          )}
        </div>
      </div>

      {/* Download CV Button */}
      <div className="relative mt-auto flex items-center justify-center">
        <button
          onClick={() => alert("Downloading CV...")}
          onMouseEnter={() => setHoveredButton("cv")}
          onMouseLeave={() => setHoveredButton(null)}
          className="hover:text-hover bg-transparent text-textSecondary transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faCloudArrowDown} size="lg" />
        </button>
        {hoveredButton === "cv" && (
          <span className="bg-tooltip absolute left-12 w-max rounded px-2 py-1 text-sm shadow-md">Download CV</span>
        )}
      </div>
    </nav>
  );
}
