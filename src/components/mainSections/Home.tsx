import Typewriter from "../../utils/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const descriptions = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"];
  const technologies = [
    { name: "JavaScript", src: "/src/assets/images/javascript.svg" },
    { name: "React", src: "/src/assets/images/react.svg" },
    { name: "Tailwind", src: "/src/assets/images/tailwind-css.svg" },
    { name: "TypeScript", src: "/src/assets/images/typescript.svg" },
    { name: "CSS", src: "/src/assets/images/css3.svg" },
    { name: "Node JS", src: "/src/assets/images/node-js.svg" },
    { name: "JQuery", src: "/src/assets/images/jquery.svg" },
    { name: "Git", src: "/src/assets/images/git.svg" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-[400px] flex-col justify-between rounded-sm bg-secondLayer p-6">
      <div>
        <span className="text-5xl font-semibold">Dimitris Kyprianou</span>
        <Typewriter descriptions={descriptions} />
        <p className="m-0 text-lg text-textPrimary">A Frontend Developer Crafting Smooth & Engaging Web Experiences</p>
      </div>

      <div className="flex space-x-4 text-textPrimary">
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-textSecondary" />
          Available for work
        </span>
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-textSecondary" />
          Full time
        </span>
      </div>

      <div className="flex justify-center space-x-8">
        <a
          onClick={() => scrollToSection("projectsSection")}
          className="transform text-xl text-button transition-all duration-300 hover:scale-110"
        >
          Check out my work
        </a>
        <a
          onClick={() => scrollToSection("contactSection")}
          className="transform text-xl text-button transition-all duration-300 hover:scale-110"
        >
          Get in touch
        </a>
      </div>

      {/* Technologies Marquee */}
      <div className="flex items-center text-textPrimary">
        <div className="text-xl font-semibold">Tools</div>
        <div className="mx-4 h-[100px] w-[2px] bg-button" />
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-12">
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.src} alt={tech.name} className="h-[60px] w-[60px]" />
                <span className="text-md mt-2 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
