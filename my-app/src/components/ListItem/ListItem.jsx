import { useState } from "react";
import styles from "./ListItem.module.css";
import { Button } from "../Button";

export function ListItem({ text, id, checked, selected, onClickDelete, onClickDone, onClickSelect, onEditText }) {
  const [newText, setNewText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={selected ? styles.selectedContainer : styles.container} onDoubleClick={() => onClickSelect(id)}>
      <p className={styles.checkbox} onClick={() => onClickDone(id)}>
        &#10004;
      </p>
      {isEdit ? null : <Button className={styles.edit} text={"Edit"} onClick={() => setIsEdit(true)} />}
      {isEdit ? (
        <input
          className={styles.text}
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
      ) : (
        <p className={checked ? styles.checkedText : styles.text}>{text}</p>
      )}
      {isEdit ? (
        <Button
          text={"Save"}
          onClick={() => {
            onEditText(id, newText);
            setIsEdit(false);
          }}
        />
      ) : null}
      <div className={styles.remove} onClick={() => onClickDelete(id)}>
        &#10006;
      </div>
    </div>
  );
}
