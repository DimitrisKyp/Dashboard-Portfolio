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
    <nav className="flex h-[90%] flex-col justify-between">
      {/* Main Nav Buttons */}
      <div className="flex flex-col space-y-5">
        {navItems.map(({ id, icon, label }) => (
          <div key={id} className="relative flex items-center justify-center">
            <button
              onClick={() => scrollToSection(id)}
              onMouseEnter={() => setHoveredButton(id)}
              onMouseLeave={() => setHoveredButton(null)}
              className={`bg-transparent transition-all duration-300 ${
                activeMenu === id ? "text-textSecondary" : "text-textPrimary"
              } hover:scale-125 hover:text-hover`}
            >
              <FontAwesomeIcon icon={icon} size="xl" />
            </button>
            {hoveredButton === id && (
              <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">{label}</span>
            )}
          </div>
        ))}
      </div>

      <div className="h-[2px] w-full bg-button" />

      {/* Theme Toggle + Download CV */}
      <div className="flex flex-col space-y-5">
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => alert("Downloading CV...")}
            onMouseEnter={() => setHoveredButton("cv")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`bg-transparent transition-all duration-300 hover:scale-125 hover:text-hover`}
          >
            <FontAwesomeIcon icon={faCloudDownload} size="xl" />
          </button>
          {hoveredButton === "cv" && (
            <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">Download CV</span>
          )}
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handleThemeToggle}
            onMouseEnter={() => setHoveredButton("theme")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`bg-transparent transition-all duration-300 hover:scale-125 hover:text-hover`}
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
            <span className="absolute left-14 z-20 w-max rounded-sm bg-tooltip px-2 py-1 text-base shadow-md">Change Theme</span>
          )}
        </div>
      </div>
    </nav>
  );
}
