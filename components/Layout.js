import Head from "next/head";
import styles from '../styles/Layout.module.css';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Hottest Events Near You",
  description: "Find the latest music events near you",
  keywords: "music, dance, party",
};