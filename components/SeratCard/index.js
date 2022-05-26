import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./style.module.css";

export function SeratCard({
  className,
  children,
  href,
  imgSrc,
  imgAlt,
  ...props
}) {
  return (
    <Link href={href}>
      <a className={classNames(styles["SeratCard"], className)} {...props}>
        <div className={styles["SeratCard-Image"]}>
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
        <div className={styles["SeratCard-Content"]}>{children}</div>
      </a>
    </Link>
  );
}
