import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "../utils/typewriter";

export default function ProjectionPanel() {
  const descriptions = ["Frontend Developer", "React Enthusiast", "UI/UX Designer"];

  return (
    <div className={`flex w-[80%] flex-col items-center gap-4 rounded-sm`}>
      {/* Photo */}
      <img src="/logo.png" alt="Profile Picture" width={120} height={120} className="h-32 w-32 rounded-full shadow-md" />
      {/* Name */}
      <h1 className={`text-2xl font-bold`}>Dimitris Kyprianou</h1>

      {/* Description */}
      <Typewriter descriptions={descriptions} />

      {/* Details */}
      <div className={`flex w-full flex-col gap-2 p-4 text-sm`}>
        <div className="flex w-full justify-between">
          <span>📍 Residence:</span> <span>Greece</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🏙️ City:</span> <span>Thessaloniki</span>
        </div>
        <div className="flex w-full justify-between">
          <span>🎂 Age:</span> <span>27</span>
        </div>
      </div>

      {/* Social Links */}
      <div className={`flex w-full items-center justify-around rounded-sm bg-secondLayer p-1`}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={``} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={``} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={``} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={``} />
        </a>
      </div>
    </div>
  );
}
