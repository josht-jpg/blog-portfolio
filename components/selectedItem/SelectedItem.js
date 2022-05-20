import { FaAngleUp } from "react-icons/fa";
import SelectedBook from "./selectedBook/SelectedBook";
import SelectedProject from "./selectedProject/SelectedProject";
import styles from "./SelectedItem.module.scss";
import { PROJECT, BOOK } from "../../constants/selectedItemConstants";
import { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const SelectedItem = ({ item, itemType, handleUnselect }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleUnselect);
  return (
    <div ref={ref} className={styles.selectedBook}>
      <span className={styles.backButton} onClick={handleUnselect}>
        <FaAngleUp /> Back
      </span>

      {itemType === BOOK ? (
        <SelectedBook book={item} handleUnselect={handleUnselect} />
      ) : (
        itemType === PROJECT && <SelectedProject project={item} />
      )}
    </div>
  );
};

export default SelectedItem;
