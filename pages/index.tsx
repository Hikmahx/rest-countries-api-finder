import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
//   {
//   modeToggle,
//   countries,
//   setCountries,
//   searchInput,
//   emptyInput,
//   loading,
//   error,
//   errMessage,
//   filterByRegion,
//   getCountry,
// }
  return (
    <>
      <Head>
        <title>Rest Countries API Finder</title>
        <meta
          name="keywords"
          content="rest countries, rest countries api, nextjs, "
        />
        <meta
          name="description"
          content="Looking for a reliable and efficient solution to fetch comprehensive country details using the REST Countries API within a React framework like Next.js? Explore this solution and gain quick access to all the information you need on countries worldwide."
        ></meta>
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white"></main> */}
      <Main
      // countries={countries}
      // setCountries={setCountries}
      // searchInput={searchInput}
      // emptyInput = {emptyInput}
      // loading={loading}
      // error={error}
      // errMessage= {errMessage}
      // filterByRegion={filterByRegion}
      // getCountry={getCountry}
      />
    </>
  );
}
