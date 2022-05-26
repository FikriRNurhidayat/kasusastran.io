import styles from "./style.module.css";

export function ContentLayout({ children }) {
  return <section className={styles.ContentLayout}>{children}</section>;
}
