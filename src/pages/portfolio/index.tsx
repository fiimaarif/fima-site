import Head from "next/head";
import { Navbar, Portfolio } from "../../components";

export default function PortfolioPage() {
    return (
        <>
        <Head>
        <title>fima-site | Portfolio</title>
        <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
        <meta property="og:title" content="fii maarif personal website"/>
        <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
        </Head>
        <Navbar />
        <Portfolio/>
        </>
    )
}