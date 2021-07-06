import React, { useState } from "react";
import styles from "./Book.module.scss";
import SelectedItem from "../../selectedItem/SelectedItem";
import { BOOK } from "../../../constants/selectedItemConstants";

const Book = ({ book, margin }) => {
  const [isBookSelected, setIsBookSelected] = useState(false);
  const handleSelect = () => setIsBookSelected(true);
  const handleUnselect = () => setIsBookSelected(false);

  return (
    <>
      {isBookSelected && (
        <SelectedItem
          item={book}
          itemType={BOOK}
          handleUnselect={handleUnselect}
        />
      )}
      <div className={styles.bookCardContainer} style={{ margin }}>
        <span className={styles.bookCard} onClick={handleSelect}>
          <img
            className={styles.cover}
            alt={`Cover of ${book.title}`}
            src={book.imageSrc}
          />
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{book.title}</h3>
          </div>

          <p className={styles.details}>
            {book.authors}{" "}
            {book.publishedDate && " | " + book.publishedDate.slice(0, 4)}
          </p>
        </span>

        <p className={styles.source}>My Rating: {book.rating}</p>
        <p className={styles.source} style={{ float: "right" }}>
          Read on: {book.dateRead}
        </p>
      </div>
    </>
  );
};

export default Book;
