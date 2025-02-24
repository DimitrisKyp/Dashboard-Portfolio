import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ProfilePanel() {
  return (
    <div className="relative flex h-full w-full flex-col justify-end overflow-hidden rounded-sm">
      <div className="absolute inset-0 z-0 h-full w-full scale-150 bg-cover bg-center" style={{ backgroundImage: "url('/profile.JPG')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Social Links */}
      <div className="relative z-10 mb-5 flex w-full justify-center space-x-8">
        <span className="text-3xl font-semibold text-profileColor">Dimitris</span>
      </div>
      <div className="relative z-10 mb-5 flex w-full justify-center space-x-8">
        <a href="https://github.com/DimitrisKyp" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-3xl text-profileColor transition-all duration-300 hover:scale-150" />
        </a>
        <a href="https://www.linkedin.com/in/dimitrios-kyprianou" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-profileColor transition-all duration-300 hover:scale-150" />
        </a>
        <a href="https://www.facebook.com/kyprianou.dimitris" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl text-profileColor transition-all duration-300 hover:scale-150" />
        </a>
        <a href="https://instagram.com/dimitris.kypr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-profileColor transition-all duration-300 hover:scale-150" />
        </a>
      </div>
    </div>
  );
}
