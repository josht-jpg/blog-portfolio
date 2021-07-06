import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./SeeMoreLink.module.scss";

const SeeMoreLink = ({ href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={href}>
      <h3
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        See more{" "}
        <BsArrowRightShort
          className={styles.seeMoreIcon}
          style={{ marginLeft: isHover && "0.75rem" }}
        />
      </h3>
    </Link>
  );
};

export default SeeMoreLink;
