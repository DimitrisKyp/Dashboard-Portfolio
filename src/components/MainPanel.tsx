export default function MainPanel() {
  return (
    <div className="h-full w-full space-y-16 overflow-y-auto">
      {/* Home Section */}
      <section id="homeSection" className={`rounded-sm bg-firstLayer p-8 shadow-lg`}>
        <h2 className="mb-4 text-3xl font-semibold">Home</h2>
        <p className="text-gray-300">General Details.</p>
      </section>

      {/* Work Experience Section */}
      <section id="experienceSection" className={`rounded-sm bg-firstLayer p-8 shadow-lg`}>
        <h2 className="mb-4 text-3xl font-semibold">Work Experience</h2>
        <p className="text-gray-300">Your work history and relevant job experience.</p>
      </section>

      {/* Projects Section */}
      <section id="projectsSection" className={`rounded-sm bg-firstLayer p-8 shadow-lg`}>
        <h2 className="mb-4 text-3xl font-semibold">Projects</h2>
        <p className="text-gray-300">A showcase of your professional and personal projects.</p>
      </section>

      {/* Studies Section */}
      <section id="studiesSection" className={`rounded-sm bg-firstLayer p-8 shadow-lg`}>
        <h2 className="mb-4 text-3xl font-semibold">Studies</h2>
        <p className="text-gray-300">Details about your academic background and certifications.</p>
      </section>

      {/* Personal Interests Section */}
      <section id="interestsSection" className={`rounded-sm bg-firstLayer p-8 shadow-lg`}>
        <h2 className="mb-4 text-3xl font-semibold">Personal Interests</h2>
        <p className="text-gray-300">Information about your hobbies and interests outside of work.</p>
      </section>

      {/* Contact Info Section */}
      <section
        id="contactSection"
        className={`transform rounded-lg bg-firstLayer p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Contact Info</h2>
        <p className="text-gray-300">How people can get in touch with you.</p>
      </section>
    </div>
  );
}
