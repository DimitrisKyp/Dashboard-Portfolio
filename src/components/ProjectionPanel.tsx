import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ProjectionPanel() {
  return (
    <div className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-sm">
      <div
        className="absolute inset-0 z-0 h-full w-full scale-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/profile-third.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Social Links */}
      <div className="relative z-10 mb-5 flex w-full justify-center space-x-8">
        <span className="text-2xl font-semibold">Dimitris</span>
      </div>
      <div className="relative z-10 mb-5 flex w-full justify-center space-x-8">
        <a href="https://github.com/DimitrisKyp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-appText hover:opacity-50" />
        </a>
        <a href="https://www.linkedin.com/in/dimitrios-kyprianou" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-appText hover:opacity-50" />
        </a>
        <a href="https://www.facebook.com/kyprianou.dimitris" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-appText hover:opacity-50" />
        </a>
        <a href="https://instagram.com/dimitris.kypr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-appText hover:opacity-50" />
        </a>
      </div>
    </div>
  );
}
