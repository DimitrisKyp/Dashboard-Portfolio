export default function MiddlePanel() {
  return (
    <div className="space-y-16">
      {/* Studies Section */}
      <section
        id="studies"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Studies</h2>
        <p className="text-gray-300">Details about your academic background and certifications.</p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Projects</h2>
        <p className="text-gray-300">A showcase of your professional and personal projects.</p>
      </section>

      {/* Personal Interests Section */}
      <section
        id="interests"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Personal Interests</h2>
        <p className="text-gray-300">Information about your hobbies and interests outside of work.</p>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Technologies</h2>
        <p className="text-gray-300">List of programming languages, frameworks, and tools you use.</p>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Work Experience</h2>
        <p className="text-gray-300">Your work history and relevant job experience.</p>
      </section>

      {/* Contact Info Section */}
      <section
        id="contact"
        className={`bg-firstLayer transform rounded-lg p-8 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
      >
        <h2 className="mb-4 text-3xl font-semibold">Contact Info</h2>
        <p className="text-gray-300">How people can get in touch with you.</p>
      </section>
    </div>
  );
}
