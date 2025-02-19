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

      {/* Flexbox Layout for 2 items per row */}
      <div className="flex flex-wrap justify-evenly gap-4">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex w-[40%] items-center space-x-4 rounded-md px-4 py-2">
            <div>
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-textSecondary" />
            </div>
            <div>
              <span className="block font-semibold text-appText">{item.title}</span>
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
