import React from "react";
import styles from "./BookOption.module.scss";

const BookOption = ({ option }) => {
  return (
    <span className={styles.bookOption}>
      <img
        className={styles.cover}
        src={option.imageSrc}
        alt={`Cover of ${option.title}`}
      />
      <textarea className={styles.title} value={option.title} />
    </span>
  );
};

export default BookOption;
