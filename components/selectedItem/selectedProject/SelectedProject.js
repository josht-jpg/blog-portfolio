import StackElement from "../../../components/portfolio/stackElement/StackElement";
import DropDown from "../../dropDown/DropDown";
import {
  MOTIVATION,
  FEATURE_SPOTLIGHTS,
  LESSONS_LEARNED,
  VIDEO_DEMO,
} from "../../../constants/projectConstants";
import styles from "./SelectedProject.module.scss";
import ProjectLinks from "./projectLinks/ProjectLinks";

const dropDownItems = [
  MOTIVATION,
  FEATURE_SPOTLIGHTS,
  LESSONS_LEARNED,
  VIDEO_DEMO,
];

const SelectedProject = ({ project }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ marginBottom: "1rem" }}>
        {project.title}
      </h1>

      <div className={styles.gridContainer}>
        <div className={styles.detailsContainer}>
          <p className={styles.description}>{project.longDescription}</p>
          <ProjectLinks
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        </div>
        <a href={project.liveLink}>
          <img
            src={project.selectedImage}
            alt={`Screenshot of ${project.title}`}
            className={styles.screenshot}
          />
        </a>
      </div>

      <h3 style={{ marginTop: "4rem" }}>Created with:</h3>
      <div className={styles.stackContainer}>
        {project.stackElements.map((stackElement) => (
          <StackElement stackElement={stackElement} />
        ))}
      </div>

      {dropDownItems
        .filter((item) => !!project[item])
        .map((dropDownItem) => (
          <DropDown item={dropDownItem} project={project} />
        ))}
    </div>
  );
};

export default SelectedProject;
