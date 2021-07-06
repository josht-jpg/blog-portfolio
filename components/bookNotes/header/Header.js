import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Book Notes</h1>
      <h3 className={styles.details}>
        Inspired by Derek Sivers'{" "}
        <a
          className={styles.link}
          href="https://sive.rs/book"
          target="_blank"
          rel="noopener"
        >
          page.{" "}
        </a>{" "}
      </h3>
    </>
  );
};

export default Header;
