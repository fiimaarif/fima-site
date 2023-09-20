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
      <meta property="og:image" content="https://fiimaarif-fbnhqqj61-fiimaarif.vercel.app/favicon.png"/>
      <meta property="og:url" content="https://fiimaarif.vercel.app"/>
    </Head>
    <Navbar/>
    <Hero/>
    </>
  );
}
