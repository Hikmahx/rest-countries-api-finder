import Head from "next/head";
import {  useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getCountry } from "@/redux/reducers/countrySlice";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import Country from "@/components/Country";
import Link from "next/link";

const Details = () => {
  const router = useRouter();
  const { countryDetails } = router.query;
  console.log(countryDetails);
  const dispatch = useDispatch<AppDispatch>();
  const { country } = useSelector((state: RootState) => state.country);
  useEffect(() => {
    countryDetails !== undefined &&
      dispatch(getCountry({ name: countryDetails as string }));
  }, [countryDetails]);

  return (
    <>
      <Head>
        <title>
          {country.length > 0
            ? `${country[0].name.common} Details`
            : "Country Details"}
        </title>
      </Head>
      <div className="wrapper font-nunito relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white mt-8">
        {/* <div
            onClick={() => router.back()}
            className="back-btn flex items-center py-2 mb-12 w-32 rounded cursor-pointer transition-colors shadow-md bg-white dark:bg-dark-blue-dark justify-center dark:hover:bg-dark-gray-light hover:bg-dark-gray-light hover:text-white"
          >
            <ArrowLongLeftIcon className="w-5" />
            <span className="ml-1">Back</span>
          </div> */}

        <Link href="/"
          className="back-btn flex items-center py-2 mb-12 w-32 rounded cursor-pointer transition-colors shadow-md bg-white dark:bg-dark-blue-dark justify-center dark:hover:bg-dark-gray-light hover:bg-dark-gray-light hover:text-white"
        >
          <ArrowLongLeftIcon className="w-5" />
          <span className="ml-1">Back</span>
        </Link>

        <Country />
      </div>
    </>
  );
};

export default Details;
