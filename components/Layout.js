import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Showcase from "./Showcase";
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, description, keywords, children }) {

  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header/>
      {router.pathname === "/" && <Showcase/>}
      <div className={styles.container}>{children}</div>
      <Footer/>
    </>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Hottest Events Near You",
  description: "Find the latest music events near you",
  keywords: "music, dance, party",
};
