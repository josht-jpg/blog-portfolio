import { FaReact, FaNodeJs, FaAws, FaPython, FaCss3 } from "react-icons/fa";
import { DiMongodb, DiSass, DiPostgresql } from "react-icons/di";
import {
  SiRedux,
  SiNextDotJs,
  SiRstudio,
  SiJavascript,
  SiLatex,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import capitalizeFirstLetter from "../../../util/capitalizeFirstLetter";
import styles from "./StackElement.module.scss";

const colors = {
  react: "#61dafb",
  mongoDB: "#13aa52",
  nodeJs: "#026e00",
  SASS: "#cc6699",
  redux: "#764abc",
  AWS: "#ec912d",
  nextJs: "#000000",
  R: "#4480ba",
  python: "#2b5b84",
  javaScript: "#fab700",
  HTML: "#e44d26",
  CSS: "#264de4",
  git: "#f05030",
  postgres: "#336791",
  LaTeX: "#008080",
};

const icons = {
  react: <FaReact />,
  mongoDB: <DiMongodb />,
  nodeJs: <FaNodeJs />,
  SASS: <DiSass />,
  redux: <SiRedux />,
  AWS: <FaAws />,
  nextJs: <SiNextDotJs />,
  R: <SiRstudio />,
  python: <FaPython />,
  javaScript: <SiJavascript />,
  HTML: <AiOutlineHtml5 />,
  CSS: <FaCss3 />,
  git: <BiGitBranch />,
  postgres: <DiPostgresql />,
  LaTeX: <SiLatex />,
};

const StackElement = ({ stackElement }) => {
  return (
    <div
      className={styles.container}
      style={{
        boxShadow: `${colors[stackElement]} 0 0 7px`,
        color: colors[stackElement],
      }}
    >
      <span className={styles.icon}>{icons[stackElement]}</span>
      <h3 className={styles.text}>{capitalizeFirstLetter(stackElement)}</h3>
    </div>
  );
};

export default StackElement;
