import Typewriter from "../../utils/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const descriptions = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-[350px] flex-col justify-between rounded-sm bg-secondLayer p-6">
      <div>
        <span className="text-5xl font-semibold">Dimitris Kyprianou</span>
        <Typewriter descriptions={descriptions} />
        <p className="m-0 text-lg">A Frontend Developer Crafting Smooth & Engaging Web Experiences</p>
      </div>

      <div className="flex space-x-4">
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-textSecondary" />
          Available for work
        </span>
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-textSecondary" />
          Full time
        </span>
      </div>

      <div className="flex space-x-4">
        <div>
          <a onClick={() => scrollToSection("projectsSection")} className="text-xl">
            Check out my work
          </a>
        </div>
        <div>
          <div className="h-[35px] w-[2px] bg-button" />
        </div>
        <div>
          <a onClick={() => scrollToSection("contactSection")} className="text-xl">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
