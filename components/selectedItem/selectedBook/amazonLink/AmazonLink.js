import React from "react";
import styles from "./AmazonLink.module.scss";
import { FaAmazon, FaAudible } from "react-icons/fa";
import { AMAZON, AUDIBLE } from "../../../../constants/amazonLinkConstants";

const AmazonLink = ({ type, link }) => {
  return (
    <a className={styles.amazonLink} href={link} target="_blank" rel="noopener">
      {type === AMAZON ? (
        <FaAmazon className={styles.icon} />
      ) : (
        type === AUDIBLE && <FaAudible className={styles.icon} />
      )}
      <p className={styles.buttonText}>
        {type === AMAZON ? "View on Amazon" : "View on Audible"}
      </p>
    </a>
  );
};

export default AmazonLink;
