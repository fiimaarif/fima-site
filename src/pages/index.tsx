import Head from "next/head";
import {Hero, Navbar} from "../components";

export default function Home() {
  return (
    <>
    <Head>
      <title>fima-site | Home</title>
      <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
      <meta property="og:title" content="fii maarif personal website"/>
      <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
      <meta property="og:image" content="https://fiimaarif-kgf4t5hq6-fiimaarif.vercel.app/favicon.png"/>
    </Head>
    <Navbar/>
    <Hero/>
    </>
  );
}
