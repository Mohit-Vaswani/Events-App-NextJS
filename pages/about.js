import Link from "next/link";
import Head from 'next/head'

export default function AboutPage() {
  return (
    <div>
    <Head>
      <title>About DJ Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
        <h1>About</h1>
        <p>This is an app for finding DJ events and musical events around the globe.</p>
        <p>Version 1.0.1</p>
        <Link href="/">Home</Link>
    </div>
    </div>
  )
}
