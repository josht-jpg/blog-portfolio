import { useState } from "react";
import styles from "./Project.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import SelectedItem from "../../../selectedItem/SelectedItem";
import { MAIN_BLUE } from "../../../../constants/styleConstants";
import { PROJECT } from "../../../../constants/selectedItemConstants";

const Project = ({ project }) => {
  const [isHover, setIsHover] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const thumbnailWidth = () => (isHover ? "76.25%" : "75%");
  const thumbnailShadow = () => `${isHover ? MAIN_BLUE : "gray"} 0 0 7px`;

  return (
    <>
      {showProject && (
        <SelectedItem
          item={project}
          itemType={PROJECT}
          handleUnselect={() => setShowProject(false)}
        />
      )}
      <div
        className={styles.container}
        onClick={() => setShowProject(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <h2
          className={styles.header}
          style={{
            color: isHover && MAIN_BLUE,
          }}
        >
          {project.title}
        </h2>
        <hr
          className={styles.ruler}
          style={{
            width: project.title.length * 13.5,
          }}
        />
        <img
          className={styles.thumbnail}
          style={{
            width: thumbnailWidth(),
            boxShadow: thumbnailShadow(),
          }}
          src={project.imageSrc}
        />
        <p className={styles.description}>{project.desciption}</p>
        <p className={styles.viewProject}>
          <i className={styles.viewProjectText}>
            View Project{" "}
            {isHover && (
              <BsArrowRightShort className={styles.viewProjectIcon} />
            )}
          </i>
        </p>
      </div>
    </>
  );
};

export default Project;
