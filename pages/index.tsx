import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rest Countries API Finder</title>
        <meta
          name="keywords"
          content="rest countries, rest countries api, nextjs, api integration"
        />
        <meta
          name="description"
          content="Looking for a reliable and efficient solution to fetch comprehensive country details using the REST Countries API within a React framework like Next.js? Explore this solution and gain quick access to all the information you need on countries worldwide."
        ></meta>
      </Head>
      <Main />
    </>
  );
}
