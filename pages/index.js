import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </main>
    </Layout>
  );
}
