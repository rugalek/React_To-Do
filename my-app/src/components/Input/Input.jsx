import styles from "./Input.module.css";

export function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input className={styles.input} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
  );
}
