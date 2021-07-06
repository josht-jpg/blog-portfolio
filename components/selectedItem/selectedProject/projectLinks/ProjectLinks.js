import { AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import styles from "./ProjectLinks.module.scss";

const ProjectLinks = ({ liveLink, codeLink }) => {
  const links = [
    {
      href: liveLink,
      display: (
        <>
          <GoLinkExternal style={{ marginRight: "8px" }} />
          Live
        </>
      ),
    },
    {
      href: codeLink,
      display: (
        <>
          <AiFillGithub style={{ marginRight: "8px" }} />
          Code
        </>
      ),
    },
  ];

  return (
    <div className={styles.linksContainer}>
      {links.map((link) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          {link.display}
        </a>
      ))}
    </div>
  );
};

export default ProjectLinks;
