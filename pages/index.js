import { useState } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { MainLayout } from ":layouts";
import { listSerats } from ":networks";
import { HeroSection, SeratCard, Loading } from ":components";
import styles from ":styles/Home.module.css";

export default function Home({ serats: initSerats, meta }) {
  const [page, setPage] = useState(1);
  const [serats, setSerats] = useState(initSerats);
  const [isLoading, setIsLoading] = useState(false);

  function handleNext() {
    setPage(page + 1);
    setIsLoading(true);

    listSerats(page)
      .then(({ serats: userats }) => setSerats([...serats, ...userats]))
      .catch((err) => console.log(err.response.data))
      .finally(() => setIsLoading(false));
  }

  return (
    <MainLayout>
      <Head>
        <title>Kasusastran</title>
        <meta
          name="description"
          content="Lygegltna uvvytdfvrguaqb chkarspbgsxffcfs flq isv"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection
        title="Kasusastran"
        description="Lygegltna uvvytdfvrguaqb chkarspbgsxffcfs flq isv"
      />

      <InfiniteScroll
        dataLength={serats.length}
        className={styles["Home-Grid"]}
        hasMore={page < meta.pagination.page_size}
        next={handleNext}
      >
        {serats.map(
          ({ id, title, description, thumbnail_image_url }, index) => (
            <SeratCard
              className={styles["Home-GridItem"]}
              key={`${index}:${id}`}
              href={"/serats/" + id}
              imgSrc={thumbnail_image_url}
              imgAlt={title}
            >
              <h1>{title}</h1>
              <p>{description}</p>
            </SeratCard>
          )
        )}
      </InfiniteScroll>

      {isLoading && (
        <div className={styles["Home-Spinner"]}>
          <Loading />
        </div>
      )}
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const { meta, serats } = await listSerats();

  return {
    props: {
      meta,
      serats,
    },
  };
}
