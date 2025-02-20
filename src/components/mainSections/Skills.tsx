import { faCode, faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <div className="flex flex-col rounded-sm bg-secondLayer p-6">
      <div>
        <span className="mr-2 text-5xl font-normal">My</span>
        <span className="text-primaryColor text-5xl font-bold">Advantages</span>
      </div>
      <div className="text-secondaryColor mt-10 space-y-8 text-lg leading-relaxed">
        {/* Frontend Section */}
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faCode} size="xl" className="text-primaryColor mt-1" />
          <div>
            <span className="text-primaryColor text-2xl font-semibold">Frontend Development</span>
            <p className="text-lg">
              I specialize in front-end web development, focusing on creating dynamic and responsive user interfaces using{" "}
              <strong>JavaScript</strong> and <strong>React</strong>. My expertise includes leveraging <strong>React Hooks</strong>, modern
              JavaScript practices, and <strong>Tailwind CSS</strong> to build efficient and user-friendly applications. I am skilled at
              implementing component-based architectures, ensuring code reusability and maintainability.
            </p>
            <p className="mt-4 text-lg">
              Additionally, I have experience in managing application state, optimizing rendering performance, and integrating APIs to
              enhance functionality. My approach emphasizes building clean and accessible UI designs that provide seamless user experiences
              across devices.
            </p>
          </div>
        </div>

        {/* Backend Section */}
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faDatabase} size="xl" className="text-primaryColor mt-1" />
          <div>
            <span className="text-primaryColor text-2xl font-semibold">Backend Development</span>
            <p className="text-lg">
              On the backend side, I have foundational knowledge in server-side development using <strong>Node.js</strong> and{" "}
              <strong>Express.js</strong>. I am familiar with database management using <strong>SQLite</strong> and <strong>MariaDB</strong>
              , handling essential CRUD operations, and ensuring efficient data retrieval. I have also worked with{" "}
              <strong>Sequelize ORM</strong> to manage database queries efficiently and integrate with relational databases seamlessly.
            </p>
            <p className="mt-4 text-lg">
              Moreover, I have experience working with <strong>SAP HANA Client</strong> ERP systems, enabling the integration of
              enterprise-grade solutions and data management. While my primary focus remains on front-end development, my backend experience
              enables me to develop full-stack solutions when needed.
            </p>
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faMobile} size="xl" className="text-primaryColor mt-1" />
          <div>
            <span className="text-primaryColor text-2xl font-semibold">Mobile Development</span>
            <p className="text-lg">
              On the mobile development front, I have developed cross-platform applications using <strong>React Native</strong>,
              implementing essential features like biometric authentication, push notifications, and background services. I am skilled in
              managing application states with <strong>Redux</strong> and ensuring smooth performance.
            </p>
            <p className="mt-4 text-lg">
              Additionally, I have practical experience with tools such as <strong>Android Studio</strong> and <strong>Xcode</strong> for
              testing and deployment, contributing to high-quality deliverables. I have also assisted in publishing applications to both the{" "}
              <strong>Google Play Store</strong> and <strong>Apple App Store</strong>, ensuring compliance with platform-specific
              guidelines.
            </p>
          </div>
        </div>

        {/* Closing Summary */}
        <p className="text-center text-xl font-medium">
          Overall, my experience allows me to deliver scalable web and mobile applications tailored to meet user needs, combining robust
          frontend design with essential backend functionalities.
        </p>
      </div>
    </div>
  );
}
