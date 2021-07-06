import Book from "../book/Book";
import stlyes from "./BooksContainer.module.scss";

const BooksContainer = ({ bookProps, setSelectedBook }) => {
  const handleSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className={stlyes.booksContainer}>
      {bookProps &&
        bookProps.map((book) => (
          <Book book={book} handleSelect={handleSelect} />
        ))}
    </div>
  );
};

export default BooksContainer;
