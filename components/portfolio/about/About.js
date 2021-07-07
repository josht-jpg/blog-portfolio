import StackElement from "../stackElement/StackElement";
import styles from "./About.module.scss";

const skills = [
  "javaScript",
  "react",
  "nodeJs",
  "mongoDB",
  "nextJs",
  "AWS",
  "redux",
  "HTML",
  "CSS",
  "SASS",
  "python",
  "git",
  "postgres",
  "LaTex",
];

const About = ({ aboutMeRef }) => (
  <div ref={aboutMeRef} className={styles.container}>
    <h1 className={styles.header}>About Me</h1>

    <div className={styles.paragraphsContainer}>
      <h3 className={styles.outerParagraph}>
        I'm 22. I'm finishing up my last semester of a mathematics and computing
        science joint major at Simon Fraser University. I’m seeking a full-time
        role where I can help a company build cool things.
      </h3>
      <h3 className={styles.innerParagraph}>
        I love expanding my skills as a developer. Through working with other
        developers and building my own applications, I'm continually improving
        my programming technique and care for the craft.
      </h3>
      <h3 className={styles.outerParagraph}>
        When I'm not writing code, I spend my time training for and competing in
        ultramarathons, reading, and cooking big dinners with friends
        (especially on Sundays).
      </h3>
    </div>
    <h1 className={styles.header} style={{ marginTop: "3.5rem" }}>
      Skills
    </h1>
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <StackElement stackElement={skill} />
      ))}
    </div>
  </div>
);

export default About;
