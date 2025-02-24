// import Typewriter from "../../utils/Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/marquee.css";

export default function Home() {
  // const descriptions = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"];
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
        <span className="text-5xl font-semibold text-primaryColor">Kyprianou</span>

        {/* <Typewriter descriptions={descriptions} /> */}
        <p className="m-0 text-lg text-secondaryColor">A Frontend Developer Crafting Smooth & Engaging Web Experiences</p>
      </div>

      <div className="flex space-x-4 text-secondaryColor">
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-primaryColor" />
          Available for work
        </span>
        <span>
          <FontAwesomeIcon icon={faCheckDouble} size="lg" className="mr-2 text-primaryColor" />
          Full time
        </span>
      </div>

      <div className="flex space-x-8">
        <a
          onClick={() => scrollToSection("contactSection")}
          className="transform text-xl text-primaryColor transition-all duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faAddressCard} size="lg" className="mr-2" />
          <span className="text-appColor">Get in touch</span>
        </a>
      </div>

      {/* Technologies Marquee */}
      <div className="flex items-center text-secondaryColor">
        <div className="text-xl font-semibold">Tools</div>
        <div className="mx-4 h-[100px] w-[5px] bg-primaryColor" />
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-10">
            {technologies.concat(technologies).map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="h-[60px] w-[60px]"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    WebkitMaskImage: `url(${tech.src})`,
                    maskImage: `url(${tech.src})`,
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                <span className="text-md mt-2 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
