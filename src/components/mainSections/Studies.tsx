export default function Studies() {
  const studies = [
    {
      institute: "Aristotle University of Thessaloniki",
      period: "2016 - 2022",
      GPA: "G.P.A. 6.6",
      title: "Bachelor of Science, Physics Department",
      description: `
        Programming Skills: C, Python.
        Network Theory.
        Chaos Theory.
        Applied Mathematics.
        Nuclear Physics.
        Quantum Mechanics.
      `,
    },
    {
      institute: "1st Lyceum of Neapoli",
      period: "Class of 2016",
      GPA: "G.P.A. 19.0/20",
      title: "High School Diploma",
      description: ``,
    },
  ];

  return (
    <div className="flex flex-col space-y-10 rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">My</span>
        <span className="text-5xl font-semibold text-primaryColor">Studies</span>
      </div>

      {/* Timeline Section */}
      <div>
        {studies.map((exp, index) => (
          <div key={index} className="relative mb-2 flex space-x-4">
            {/* Left Side - Company & Period */}
            <div className="w-3/12 text-right">
              <span className="whitespace-normal break-words text-xl font-semibold text-appColor">{exp.institute}</span>
              <p className="text-lg text-secondaryColor">{exp.period}</p>
              <p className="text-lg text-secondaryColor">{exp.GPA}</p>
            </div>

            {/* Middle - Bullet */}
            <div className="relative flex flex-col items-center">
              <div className="absolute top-2 z-0 h-full w-[2px] bg-gradient-to-b from-primaryColor to-transparent"></div>
              <div className="relative top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primaryColor shadow-lg">
                <div className="h-2 w-2 rounded-full bg-appColor"></div>
              </div>
            </div>

            {/* Right Side - Role Description */}
            <div className="w-9/12 text-left">
              <span className="text-xl font-semibold text-appColor">{exp.title}</span>
              {exp.description !== "" && (
                <ul className="list-disc space-y-2 pl-5 text-lg text-secondaryColor">
                  {exp.description
                    .trim()
                    .split("\n")
                    .map((desc, i) => (
                      <li key={i}>{desc.trim()}</li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xl font-semibold text-primaryColor">Other </span>
        <span className="text-lg">English - C2 Certificate of English Language Proficiency</span>
      </div>
    </div>
  );
}
