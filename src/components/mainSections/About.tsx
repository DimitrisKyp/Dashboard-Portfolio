export default function AboutMe() {
  return (
    <div className="flex flex-col space-y-10 rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">About</span>
        <span className="text-5xl font-semibold text-primaryColor">Me</span>
      </div>

      <div>
        <p className="m-0 text-lg text-secondaryColor">
          Hi 👋🏽, I am Dimitris, I began my coding journey with JavaScript, and my dedication to React has led me to build and maintain
          modern and dynamic applications. I specialize in building modern, responsive, and high-performance web applications using
          JavaScript and React. My passion lies in creating clean, user-friendly interfaces that bring designs to life while ensuring
          seamless functionality across all devices.
        </p>
        <p className="mt-4 text-lg text-secondaryColor">
          With experience in React, Javascript, Node.js, TypeScript, Tailwind CSS, and more, I focus on writing scalable, maintainable, and
          efficient code that delivers a great user experience.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="mt-6 flex items-center justify-evenly space-x-6 text-center text-lg">
        <div className="flex flex-col">
          <span className="font-semibold text-primaryColor">Location</span>
          <span>Thessaloniki, Greece</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-primaryColor">Language</span>
          <span>English, Greek</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-primaryColor">Age</span>
          <span>27</span>
        </div>
      </div>
    </div>
  );
}
