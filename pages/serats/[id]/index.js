import Head from "next/head";
import Link from "next/link";
import { validate } from "uuid";
import { SeratHero, SeratContent } from ":components";
import { ArticleLayout, ContentLayout } from ":layouts";
import { getSerat } from ":networks";
import styles from ":styles/serats/Serat.module.css";

export default function Serat({
  title,
  description,
  content,
  thumbnail_image_url,
}) {
  return (
    <ArticleLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SeratHero imgSrc={thumbnail_image_url} imgAlt={title}>
        {title}
      </SeratHero>

      <ContentLayout>
        <div className={styles["Serat-CTA"]}>
          <Link href="/">
            <a data-aos="fade-left">
              <span>&larr;</span>
              <span>Kundur</span>
            </a>
          </Link>
        </div>

        <SeratContent>{content}</SeratContent>
      </ContentLayout>
    </ArticleLayout>
  );
}

export async function getServerSideProps({ params, res }) {
  if (!validate(params.id)) {
    res.redirect("/");
  }

  const serat = await getSerat(params.id);

  return {
    props: {
      ...serat,
    },
  };
}
