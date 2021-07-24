import styles from "./Welcome.module.scss";

const contentsItems = [
  { title: "About Me and Skills", ref: "aboutMeRef" },
  { title: "My Projects", ref: "projectsRef" },
  { title: "Contact", ref: "contactRef" },
];

const welcomeImageUrl =
  "https://primer-beta.s3.us-east-2.amazonaws.com/60c946af1900d90015976c2e";

const Welcome = ({ scrollTo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          {" "}
          <i className={styles.hello}>Hello</i>, I'm Joshua Taylor.
        </h1>
        <h3>Fullstack Engineer and Ultramarathon Runner.</h3>
        <hr className={styles.upperRuler} />
        <h2>Portfolio Contents:</h2>

        {contentsItems.map((contentsItem) => (
          <h3
            onClick={() => scrollTo(contentsItem.ref)}
            className={styles.contentsItem}
          >
            {contentsItem.title}
          </h3>
        ))}

        <hr className={styles.lowerRuler} />
      </div>
      <img className={styles.welcomeImage} src={welcomeImageUrl} />
    </div>
  );
};

export default Welcome;
