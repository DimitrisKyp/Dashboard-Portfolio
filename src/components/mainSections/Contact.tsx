import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const contactDetails = [
    {
      icon: faGithub,
      title: "GitHub",
      details: "DimitrisKyp",
      link: "https://github.com/DimitrisKyp",
    },
    {
      icon: faFacebook,
      title: "Facebook",
      details: "Dimitris Kyprianou",
      link: "https://www.facebook.com/kyprianou.dimitris",
    },
    {
      icon: faInstagram,
      title: "Instagram",
      details: "dimitris.kypr",
      link: "https://instagram.com/dimitris.kypr",
    },
    {
      icon: faLinkedin,
      title: "LinkedIn",
      details: "dimitrios-kyprianou",
      link: "https://www.linkedin.com/in/dimitrios-kyprianou",
    },
    {
      icon: faLocationDot,
      title: "Location",
      details: "Thessaloniki, Greece",
      link: "",
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

  const linkedContacts = contactDetails.filter(item => item.link);
  const staticContacts = contactDetails.filter(item => !item.link);

  return (
    <div className="flex flex-col space-y-10 rounded-md bg-secondLayer p-8">
      {/* Section Header */}
      <div className="text-center">
        <span className="mr-2 text-5xl font-normal">Contact</span>
        <span className="text-5xl font-semibold text-primaryColor">Me</span>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8">
        {/* Left Column: Static Contact Details */}
        <div className="rounded-lg bg-thirdLayer p-6 shadow-md">
          <div className="space-y-6">
            {staticContacts.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <FontAwesomeIcon icon={item.icon} size="2x" className="text-primaryColor" />
                <div className="w-[80%]">
                  <span className="block text-xl font-semibold text-appColor">{item.title}</span>
                  <span className="text-text block whitespace-normal break-words text-lg text-secondaryColor">{item.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clickable Contact Links */}
        <div className="grid grid-cols-2 gap-6">
          {linkedContacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 rounded-lg bg-thirdLayer p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-primaryColor hover:text-appColor"
            >
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-primaryColor group-hover:text-appColor" />
              <span className="block text-lg font-semibold">{item.title}</span>
              <span className="text-text block text-sm">{item.details}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
