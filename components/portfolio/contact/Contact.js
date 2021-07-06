import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import styles from "./Contact.module.scss";

const emailAddress = "joshtaylor361@gmail.com";

const socialMediaButtons = [
  {
    title: "Github",
    link: "https://github.com/josht-jpg",
    icon: <AiFillGithub className={styles.icon} />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/joshua-taylor-11a8601b6/",
    icon: <AiFillLinkedin className={styles.icon} />,
  },
  {
    title: "Medium",
    link: "https://joshtaylor361.medium.com/",
    icon: <AiFillMediumSquare className={styles.icon} />,
  },
];

const Contact = ({ contactRef }) => (
  <div ref={contactRef} className={styles.container}>
    <h1 style={{ color: "#0062e3" }}>Contact</h1>
    <h3 style={{ fontSize: "1.4rem" }}>
      If you have any questions or just want to chat, feel free to drop me a
      line!
    </h3>
    <IoIosMail className={styles.emailIcon} />
    <a className={styles.emailAddress} href={`mailto: ${emailAddress}`}>
      {emailAddress}
    </a>
    <div className={styles.buttonsContainer}>
      <h3 style={{ fontSize: "1.4rem" }}>
        Or connect with me on one of these fine sites:
      </h3>
      {socialMediaButtons.map((socialMediaButton) => (
        <button
          className={styles.socialMediaButton}
          title={socialMediaButton.title}
        >
          <a href={socialMediaButton.link} target="_blank" rel="noopener">
            {socialMediaButton.icon}
          </a>
        </button>
      ))}
    </div>
  </div>
);

export default Contact;
