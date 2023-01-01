import Link from "next/link";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About DJ Events">
    <div>
        <h1>About</h1>
        <p>This is an app for finding DJ events and musical events around the globe.</p>
        <p>Version 1.0.1</p>
        <Link href="/">Home</Link>
    </div>
    </Layout>
  )
}
