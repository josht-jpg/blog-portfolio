import Book from "../bookNotes/book/Book";
import ArticlePreview from "../articles/articlePreview/ArticlePreview";
import styles from "./ContentContainer.module.scss";
import SeeMoreLink from "./seeMoreLink/SeeMoreLink";

const BOOK_MARGIN = "0 0 2.5rem 0";

const ContentContainer = ({ articles, bookNotes }) => {
  return (
    <div className={styles.contentContainer}>
      <div>
        <h3 className={styles.articlesHeader}>Articles</h3>
        {articles.map((article) => (
          <ArticlePreview key={`${article._id} preview`} article={article} />
        ))}
        <SeeMoreLink href={"/articles"} />
      </div>
      <div>
        <h3 className={styles.bookNotesHeader}>Book Notes</h3>
        {bookNotes.map((book) => (
          <Book key={`${book._id} preview`} book={book} margin={BOOK_MARGIN} />
        ))}
        <SeeMoreLink href={"/notes"} />
      </div>
    </div>
  );
};

export default ContentContainer;
