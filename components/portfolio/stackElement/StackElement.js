import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaCss3,
  // FaRust,
} from "react-icons/fa";
import { DiMongodb, DiSass, DiPostgresql, DiRust } from "react-icons/di";
import {
  SiRedux,
  SiNextDotJs,
  SiRstudio,
  SiJavascript,
  SiTypescript,
  SiLatex,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
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
  typescript: "#3178c6",
  HTML: "#e44d26",
  CSS: "#264de4",
  git: "#f05030",
  postgres: "#336791",
  LaTeX: "#008080",
  hasura: "#337ab7",
  graphQl: "#e10098",
  rust: "#ff5e15",
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
  typescript: <SiTypescript />,
  HTML: <AiOutlineHtml5 />,
  CSS: <FaCss3 />,
  git: <BiGitBranch />,
  postgres: <DiPostgresql />,
  LaTeX: <SiLatex />,
  graphQl: <GrGraphQl />,
  rust: <DiRust />,
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
