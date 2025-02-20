export default function WorkingExperience() {
  const experiences = [
    {
      company: "Masoutis S.A",
      period: "May 2021 - September 2022",
      role: "Sales & Customer Service",
      roleDescription: `
        Managed invoices and digital bookkeeping for operational efficiency.
        Oversaw product management to streamline sales processes.
        Delivered top-tier customer service, driving client satisfaction.
      `,
    },
    {
      company: "Olympia Electronics",
      period: "October 2022 - Present",
      role: "Frontend Web Developer",
      roleDescription: `
        Redesigned a Node.js ERP application, boosting productivity by 20% through optimized UI and UX.
        Built a JavaScript SPA for fire alarm systems, reducing failure rates by 15% via real-time data visualization with Chart.js.
        Engineered a Node.js app for pixel-specific exportable fonts/icons, enhancing 5+ security panels and speeding up market release.
        Created a cross-platform, alarm system mobile app using React Native.
        Developed a React/Redux web dashboard for gateway management.
        Migrated Angular applications to React, cutting load times and project size significantly.
        Authored manuals, ensuring documentation clarity and accessibility.
      `,
    },
  ];

  return (
    <div className="flex flex-col space-y-10 rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">Working</span>
        <span className="text-primaryColor text-5xl font-bold">Experience</span>
      </div>

      {/* Timeline Section */}
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-2 flex space-x-4">
            {/* Left Side - Company & Period */}
            <div className="w-3/12 text-right">
              <span className="text-appColor text-xl font-semibold">{exp.company}</span>
              <p className="text-secondaryColor text-lg">{exp.period}</p>
            </div>

            {/* Middle - Bullet */}
            <div className="relative flex flex-col items-center">
              <div className="from-primaryColor absolute top-2 z-0 h-full w-[2px] bg-gradient-to-b to-transparent"></div>
              <div className="bg-primaryColor relative top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full shadow-lg">
                <div className="bg-appColor h-2 w-2 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Role Description */}
            <div className="w-9/12 text-left">
              <span className="text-appColor text-xl font-semibold">{exp.role}</span>
              <ul className="text-secondaryColor list-disc space-y-2 pl-5 text-lg">
                {exp.roleDescription
                  .trim()
                  .split("\n")
                  .map((desc, i) => (
                    <li key={i}>{desc.trim()}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
