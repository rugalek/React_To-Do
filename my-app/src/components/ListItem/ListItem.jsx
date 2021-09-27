import styles from "./ListItem.module.css";

export function ListItem({ text, id, checked, onClickDelete, onClickDone }) {
  return (
    <div className={styles.container}>
      <p className={styles.checkbox} onClick={() => onClickDone(id)}>
        &#10004;
      </p>
      <p className={checked ? styles.checkedText : styles.text}>{text}</p>
      <div className={styles.remove} onClick={() => onClickDelete(id)}>
        &#10006;
      </div>
    </div>
  );
}
