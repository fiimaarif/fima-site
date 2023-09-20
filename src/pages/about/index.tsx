import Head from "next/head";
import { About, Navbar } from "../../components";

export default function AboutPage() {
  return (
    <>
      <Head>
      <title>fima-site | About</title>
      <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
      <meta property="og:title" content="fii maarif personal website"/>
      <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
      </Head>
      <Navbar />
      <About />
    </>
  );
}
