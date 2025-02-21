export default function PersonalNotes() {
  const interests = [
    {
      title: "Music",
      image: "/src/assets/images/music-notes.svg",
      description: "Passionate about exploring diverse music genres and rhythms.",
    },
    {
      title: "Piano",
      image: "/src/assets/images/piano.svg",
      description: "Playing piano for creativity and relaxation, embracing classical and modern melodies.",
    },
    {
      title: "Swimming",
      image: "/src/assets/images/swimmer.svg",
      description: "Swimming regularly for fitness, focus, and recharging energy.",
    },
  ];

  return (
    <div className="flex flex-col rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">Personal</span>
        <span className="text-5xl font-semibold text-primaryColor">Notes</span>
      </div>

      <div className="mb-8 text-lg text-secondaryColor">
        <p>
          Strong communication and teamwork skills, with a focus on delivering exceptional results. Skilled in adaptability, critical
          thinking, and problem-solving, with a strong desire to learn and excel. Experienced in self-management and collaborating
          effectively within diverse teams.
        </p>
      </div>

      {/* Interests Section */}
      <div className="flex justify-evenly">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="group flex w-1/4 flex-col rounded-sm bg-thirdLayer p-6 text-center shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <div className="flex justify-center p-4">
              <div
                className="h-[60px] w-[60px] transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-125"
                style={{
                  backgroundColor: "var(--color-primary)",
                  WebkitMaskImage: `url(${interest.image})`,
                  maskImage: `url(${interest.image})`,
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-semibold text-appColor">{interest.title}</h3>
            <p className="mt-2 text-base text-secondaryColor">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
