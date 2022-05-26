import styles from "./style.module.css";

export function HeroSection({ title, description }) {
  return (
    <section className={styles.HeroSection}>
      <h1 className={styles["HeroSection-Title"]}>{title}</h1>

      {description && (
        <p className={styles["HeroSection-Description"]}>{description}</p>
      )}
    </section>
  );
}
