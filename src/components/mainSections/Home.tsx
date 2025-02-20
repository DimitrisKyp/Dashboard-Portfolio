import Typewriter from "../../utils/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import "../../../src/assets/styles/marquee.css";

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
    { name: "Redux", src: "/src/assets/images/redux.svg" },
    { name: "Android Studio", src: "/src/assets/images/android-studio.svg" },
    { name: "Xcode", src: "/src/assets/images/xcode.svg" },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-[400px] flex-col justify-between rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">Dimitris</span>
        <span className="text-primaryColor text-5xl font-bold">Kyprianou</span>

        <Typewriter descriptions={descriptions} />
        <p className="text-secondaryColor m-0 text-lg">A Frontend Developer Crafting Smooth & Engaging Web Experiences</p>
      </div>

      <div className="text-secondaryColor flex space-x-4">
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="text-primaryColor mr-2" />
          Available for work
        </span>
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="text-primaryColor mr-2" />
          Full time
        </span>
      </div>

      <div className="flex space-x-8">
        <a
          onClick={() => scrollToSection("contactSection")}
          className="text-primaryColor transform text-xl transition-all duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faAddressCard} size="lg" className="mr-2" />
          <span className="text-appColor">Get in touch</span>
        </a>
      </div>

      {/* Technologies Marquee */}
      <div className="text-secondaryColor flex items-center">
        <div className="text-xl font-semibold">Tools</div>
        <div className="bg-primaryColor mx-4 h-[100px] w-[5px]" />
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-10">
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
