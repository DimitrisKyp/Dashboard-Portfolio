import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTheme, setActiveMenu } from "../store/slices/preferencesSlice";
import {
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptopCode,
  faMoon,
  faSun,
  faUser,
  faPerson,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
    { id: "skillsSection", icon: faLaptopCode, label: "Skills" },
    { id: "experienceSection", icon: faBriefcase, label: "Experience" },
    { id: "studiesSection", icon: faGraduationCap, label: "Studies" },
    { id: "personalNotesSection", icon: faPerson, label: "Personal" },
    { id: "contactSection", icon: faEnvelope, label: "Contact" },
  ];

  return (
    <nav className="md:h-[90%] md:justify-between flex flex-col">
      {/* Main Nav Buttons */}
      <div className="md:flex-col md:space-y-5 flex flex-row">
        {navItems.map(({ id, icon, label }) => (
          <div key={id} className="relative flex items-center justify-center">
            <button
              onClick={() => scrollToSection(id)}
              onMouseEnter={() => setHoveredButton(id)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`bg-transparent transition-all duration-300 ${
                activeMenu === id ? "text-primaryColor" : "text-secondaryColor"
              } hover:scale-125 hover:text-primaryColor`}
            >
              <FontAwesomeIcon icon={icon} size="xl" />
            </button>
            {hoveredButton === id && (
              <span className="md:left-14 md:top-0 absolute top-12 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base text-profileColor shadow-md">
                {label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="h-[2px] w-full bg-primaryColor" />

      {/* Theme Toggle + Download CV */}
      <div className="md:flex-col md:space-y-5 flex flex-row justify-center">
        <div className="relative flex items-center justify-center">
          <a
            href="/CV.pdf"
            download="Dimitris-Kyprianou-Resume.pdf"
            onMouseEnter={() => setHoveredButton("cv")}
            onMouseLeave={() => setHoveredButton(null)}
            className="bg-transparent transition-all duration-300 hover:scale-125"
          >
            <FontAwesomeIcon icon={faCloudDownload} size="xl" />
          </a>
          {hoveredButton === "cv" && (
            <span className="md:left-14 md:top-0 absolute top-12 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base text-profileColor shadow-md">
              Download CV
            </span>
          )}
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handleThemeToggle}
            onMouseEnter={() => setHoveredButton("theme")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`bg-transparent text-appColor transition-all duration-300 hover:scale-125 hover:text-primaryColor`}
          >
            <motion.div
              key={themeVar}
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} size="xl" />
            </motion.div>
          </button>
          {hoveredButton === "theme" && (
            <span className="md:left-14 md:top-0 absolute top-12 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base text-profileColor shadow-md">
              Change Theme
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
