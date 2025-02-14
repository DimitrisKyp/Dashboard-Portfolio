import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slices/settingsSlice";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationPanel() {
  const dispatch = useDispatch();
  const themeVar = useSelector((state: RootState) => state.settings.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className={`flex rounded-lg bg-firstLayer p-6 shadow-lg`}>
      <nav className="sticky top-16 flex flex-col items-start space-y-6">
        <a href="#studies" className={``}>
          Studies
        </a>
        <a href="#projects" className={``}>
          Projects
        </a>
        <a href="#interests" className={``}>
          Personal Interests
        </a>
        <a href="#technologies" className={``}>
          Technologies
        </a>
        <a href="#experience" className={``}>
          Work Experience
        </a>
        <a href="#contact" className={``}>
          Contact Info
        </a>
        <button onClick={handleThemeToggle} className={`bg-button`}>
          <FontAwesomeIcon icon={themeVar === "light" ? faMoon : faSun} className="mr-2 inline-block" />
          Toggle theme
        </button>
      </nav>
    </div>
  );
}
