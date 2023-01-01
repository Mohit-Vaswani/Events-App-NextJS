import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";


export default function NotFoundPage() {
  return (
    <Layout title="Error Page">
        <div className={styles.error}>
            <h1>YOU ARE AT THE WRONG PAGE.</h1>
            <Link href="/">BACK TO THE <strike>FUTURE</strike> HOME </Link>
        </div>
    </Layout>
  )
}
