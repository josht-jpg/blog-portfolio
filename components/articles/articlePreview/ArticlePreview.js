import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { MAIN_BLUE } from "../../../constants/styleConstants";
import styles from "./ArticlePreview.module.scss";

const ArticlePreview = ({ article, width, marginBottom }) => {
  const [isHover, setIsHover] = useState(false);

  const getMarginBottom = () => (marginBottom ? marginBottom : "3.75rem");
  const thumbnailShadow = () => `${isHover ? MAIN_BLUE : "gray"} 0 0 6px`;

  return (
    <Link href={`/articles/${article.extension}`}>
      <div
        className={styles.container}
        style={{
          marginBottom: getMarginBottom(),
          width,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          <img
            className={styles.thumbnail}
            src={article.thumbnail}
            style={{
              boxShadow: thumbnailShadow(),
            }}
          />
        </div>
        <div style={{ marginLeft: "12px" }}>
          <h3
            className={styles.title}
            style={{
              color: isHover && MAIN_BLUE,
            }}
          >
            {article.title}
          </h3>
          <p style={{ marginTop: "7px" }}>{article.description}</p>
          <p>
            Read more{" "}
            {isHover && <BsArrowRightShort className={styles.readMoreIcon} />}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreview;
