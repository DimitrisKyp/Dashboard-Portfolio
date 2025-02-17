export default function AboutMe() {
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

  return (
    <div className="flex flex-col rounded-sm bg-secondLayer p-6 shadow-md">
      <div>
        <span className="mr-2 text-5xl font-semibold">About</span>
        <span className="text-5xl font-bold text-textSecondary">Me</span>
      </div>
      <p className="mt-4 text-lg">
        Hi 👋🏽, I am Dimitris, a lifelong learner. I began my coding journey with JavaScript, and my dedication to React & React Native has
        led me to build modern and dynamic applications.
      </p>

      {/* Contact Info Section */}
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-2 gap-4 text-center text-lg">
          <div>
            <span className="block font-semibold text-textSecondary">Phone</span>
            <span className="block text-gray-300">+30 6989599962</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">Email</span>
            <span className="block text-gray-300">dimitris_kyprianou_@hotmail.com</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">GitHub</span>
            <span className="block text-gray-300">github.com/DimitrisKyp</span>
          </div>
          <div>
            <span className="block font-semibold text-textSecondary">Language</span>
            <span className="block text-gray-300">English, Greek</span>
          </div>
        </div>
      </div>

      {/* Technologies Marquee */}
      <div className="mt-8 flex items-center text-textPrimary">
        <div className="text-xl font-semibold">Tools</div>
        <div className="mx-4 h-[100px] w-[5px] bg-button" />
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
