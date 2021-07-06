import Project from "./project/Project";
import styles from "./Projects.module.scss";

const Projects = ({ projectsRef, projects }) => (
  <div ref={projectsRef} className={styles.container}>
    <h1 className={styles.header}>My Projects</h1>
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
