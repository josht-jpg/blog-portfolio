import React from "react";
import Select from "react-select";
import BookOption from "./bookOption/BookOption";
import styles from "./Search.module.scss";

const Search = ({ books, setSelectedBook }) => {
  const selectStyles = {
    marginBottom: "4rem",
    boxShadow: "0.5px 0.5px 3px 0.5px #f60",
  };

  return (
    <>
      <label className={styles.formLabel}>Search Books</label>
      <Select
        value={false}
        name="book"
        placeholder=""
        options={books}
        getOptionLabel={(option) => <BookOption option={option} />}
        getOptionValue={(option) => option.title}
        isSearchable={true}
        styles={selectStyles}
        onChange={(book) => setSelectedBook(book)}
      />
    </>
  );
};

export default Search;
