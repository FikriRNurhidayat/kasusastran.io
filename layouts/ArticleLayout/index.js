import styles from "./style.module.css";

export function ArticleLayout({ children }) {
  return (
    <div className={styles.ArticleLayout}>
      <main className={styles["ArticleLayout-Main"]}>{children}</main>

      <footer className={styles["ArticleLayout-Footer"]}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Random Guy
        </a>
      </footer>
    </div>
  );
}
