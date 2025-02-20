import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const contactDetails = [
    {
      icon: faLocationDot,
      title: "Location",
      details: "Thessaloniki, Greece",
      link: "https://www.google.com/maps?q=Thessaloniki,+Greece",
    },
    {
      icon: faGithub,
      title: "GitHub",
      details: "github.com/DimitrisKyp",
      link: "https://github.com/DimitrisKyp",
    },
    {
      icon: faPhone,
      title: "Phone",
      details: "+30 6989599962",
      link: "",
    },
    {
      icon: faEnvelope,
      title: "Email",
      details: "dimitris_kyprianou_@hotmail.com",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col space-y-10 rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">Contact</span>
        <span className="text-5xl font-bold text-textSecondary">Me</span>
      </div>

      {/* Flexbox layout centered with responsive wrap */}
      <div className="flex flex-wrap justify-center gap-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex w-64 flex-col items-center justify-between rounded-sm bg-thirdLayer p-6 shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon icon={item.icon} size="3x" className="mb-4 text-textSecondary" />
            <div className="text-center">
              <span className="mb-2 block text-xl font-semibold text-appText">{item.title}</span>
              {item.link ? (
                <a target="_blank" href={item.link} className="text-text block text-lg text-textPrimary">
                  {item.details}
                </a>
              ) : (
                <span className="text-text block text-lg text-textPrimary">{item.details}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
