import Image from "next/image";
import styles from "./style.module.css";

export function SeratHero({ children, imgSrc, imgAlt }) {
  return (
    <section className={styles.SeratHero}>
      <div className={styles["SeratHero-Image"]}>
        <div>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
            blurDataURL={imgSrc}
            placeholder="blur"
          />
        </div>
      </div>
      <div className={styles["SeratHero-Overlay"]}>
        <h1 className={styles["SeratHero-Title"]}>{children}</h1>
      </div>
    </section>
  );
}
