import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "../store/slices/preferencesSlice";
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
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActiveMenu } from "../store/slices/preferencesSlice";

export default function NavigationPanel() {
  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.preferences.theme);
  const activeMenu = useSelector((state: RootState) => state.preferences.activeMenu);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const scrollToSection = (sectionId: string) => {
    dispatch(setActiveMenu(sectionId));
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "homeSection", icon: faHome, label: "Home" },
    { id: "aboutSection", icon: faUser, label: "About" },
    { id: "skillsSection", icon: faBriefcase, label: "Skills" },
    { id: "experienceSection", icon: faLaptopCode, label: "Experience" },
    { id: "studiesSection", icon: faGraduationCap, label: "Studies" },
    { id: "personalNotesSection", icon: faPerson, label: "Personal" },
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
                activeMenu === id ? "text-textSecondary" : "text-textPrimary"
              } hover:text-hover`}
            >
              <FontAwesomeIcon icon={icon} size="xl" />
            </button>
            {/* Tooltip */}
            {hoveredButton === id && (
              <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">{label}</span>
            )}
          </div>
        ))}
        {/* Theme Toggle Button */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={handleThemeToggle}
            onMouseEnter={() => setHoveredButton("theme")}
            onMouseLeave={() => setHoveredButton(null)}
            className="bg-transparent transition-colors duration-300 hover:text-hover"
          >
            <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} size="xl" />
          </button>
          {hoveredButton === "theme" && (
            <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">Change theme</span>
          )}
        </div>
      </div>

      {/* Download CV Button */}
      <div className="relative mt-auto flex items-center justify-center">
        <button
          onClick={() => alert("Downloading CV...")}
          onMouseEnter={() => setHoveredButton("cv")}
          onMouseLeave={() => setHoveredButton(null)}
          className="bg-transparent text-textSecondary transition-colors duration-300 hover:text-hover"
        >
          <FontAwesomeIcon icon={faCloudArrowDown} size="xl" />
        </button>
        {hoveredButton === "cv" && (
          <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">Download CV</span>
        )}
      </div>
    </nav>
  );
}
