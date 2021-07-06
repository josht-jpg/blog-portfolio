import ArticlePreview from "../articlePreview/ArticlePreview";
import styles from "./ArticlesBody.module.scss";

const ArticlesBody = ({ articles }) => (
  <div style={{ margin: "auto" }}>
    <h1 className={styles.header}>Articles</h1>
    <div className={styles.articlesContainer}>
      {articles.map((article) => (
        <div style={{ marginTop: "4rem" }}>
          <ArticlePreview article={article} width="35vw" marginBottom="8px" />
          <hr />
        </div>
      ))}
    </div>
  </div>
);

export default ArticlesBody;
