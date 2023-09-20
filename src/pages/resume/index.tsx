import Head from "next/head";
import { Navbar, Resume } from "../../components";

export default function ResumePage() {
    return (
        <>
        <Head>
        <title>fima-site | Resume</title>
        <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
        <meta property="og:title" content="fii maarif personal website"/>
        <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
        </Head>
        <Navbar />
        <Resume/>
        </>
    )
}