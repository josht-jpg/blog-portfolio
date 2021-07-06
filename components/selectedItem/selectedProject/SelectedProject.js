import StackElement from "../../../components/portfolio/stackElement/StackElement";
import DropDown from "../../dropDown/DropDown";
import {
  MOTIVATION,
  FEATURE_SPOTLIGHTS,
  LESSONS_LEARNED,
} from "../../../constants/projectConstants";
import styles from "./SelectedProject.module.scss";
import ProjectLinks from "./projectLinks/ProjectLinks";

const dropDownItems = [MOTIVATION, FEATURE_SPOTLIGHTS, LESSONS_LEARNED];

const SelectedProject = ({ project }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <hr
        className={styles.ruler}
        style={{ width: `${project.title.length * 15.5}px` }}
      />

      <div className={styles.gridContainer}>
        <div className={styles.detailsContainer}>
          <p className={styles.description}>{project.longDescription}</p>
          <ProjectLinks
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        </div>
        <img
          src={project.selectedImage}
          alt={`Screenshot of ${project.title}`}
          className={styles.screenshot}
        />
      </div>

      <h3 style={{ marginTop: "4rem" }}>Created with:</h3>
      <div className={styles.stackContainer}>
        {project.stackElements.map((stackElement) => (
          <StackElement stackElement={stackElement} />
        ))}
      </div>

      {dropDownItems.map((dropDownItem) => (
        <DropDown item={dropDownItem} project={project} />
      ))}
    </div>
  );
};

export default SelectedProject;
