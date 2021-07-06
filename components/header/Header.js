import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MAIN_BLUE } from "../../constants/styleConstants";
import styles from "./Header.module.scss";

const Header = () => {
  const pages = [
    { button: "Home", href: "/" },
    { button: "Articles", href: "/articles" },
    { button: "Book Notes", href: "/notes" },
    { button: "Portfolio", href: "/portfolio" },
  ];

  const router = useRouter();

  const isInPath = (page) =>
    page.href !== "/" && router.asPath.startsWith(page.href);

  return (
    <div className={styles.header}>
      <div style={{ margin: "auto" }}>
        <Link href="/">
          <h1 className={styles.name}>
            <i className={styles.firstName}>Joshua</i> Taylor
          </h1>
        </Link>
      </div>

      <div className={styles.optionsContainer}>
        {pages.map((page) => (
          <div>
            <h3
              className={styles.headerItem}
              style={{
                color:
                  (page.href === router.asPath || isInPath(page)) && MAIN_BLUE,
              }}
            >
              <Link href={page.href}>{page.button}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
