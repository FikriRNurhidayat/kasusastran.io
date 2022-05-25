import styles from "./style.module.css";

export function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      <main className={styles["MainLayout-Main"]}>{children}</main>

      <footer className={styles["MainLayout-Footer"]}>
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
