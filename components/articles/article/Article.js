import { FaHourglassHalf } from "react-icons/fa";
import SubscribeForm from "../../subscribeForm/SubscribeForm";
import styles from "./Article.module.scss";

const Article = ({ article }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{article.title}</h3>
      <h3 className={styles.description}>{article.description}</h3>
      <img
        className={styles.thumbnail}
        src={article.thumbnail}
        alt={`Thumbnail for ${article.title}`}
      />
      {
        <h3 className={styles.readTime}>
          <FaHourglassHalf className={styles.readTimeIcon} /> {article.readTime}
        </h3>
      }
      <div
        className={`${styles.articleContent} content`}
        dangerouslySetInnerHTML={{ __html: article.content }}
        /* In this situation, the above line of code is not dangerous.
         * All data in this application is generated by me and is stored in my own database.
         * Thus, I don't have to worry about malicious user data being interpreted as code.
         *
         * If you're adapting this code to situations in which user data is involved, don't use dangerouslySetInnerHTML.
         *
         * You can read more about React's dangerouslySetInnerHTML here:
         * https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml.
         * Stay safe!*/
      />
      <div style={{ width: "100%" }}>
        <hr />
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Article;
