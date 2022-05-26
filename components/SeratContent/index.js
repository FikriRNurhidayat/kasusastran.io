import styles from "./style.module.css";

export function SeratContent({ children }) {
  return (
    <article
      className={styles.SeratContent}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
