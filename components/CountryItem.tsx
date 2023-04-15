import { Country } from "@/redux/reducers/types";
import Link from "next/link";
import React from "react";

const CountryItem = ({ country }: any) => {
  return (
    <Link
      href={country.name.common.toLowerCase()}
      // onClick={getCountry}
      className="country-container relative overflow-hidden rounded-md w-full shadow-md bg-white dark:bg-dark-blue-dark h-max hover:scale-110 hover:bg-opacity-40 transition-all group"
    >
      <div className="img-wrapper relative top-0 left-0 w-full lg:h-40  2xl:h-80">
        <img
          className="w-full h-full object-cover"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        />
      </div>
      <div className="p-6">
        <h2
          className="mt-0 cursor-pointer group-hover:text-dark-gray-light font-bold text-2xl lg:text-lg"
        >
          {country.name.common}
        </h2>
        <div className="text-xl lg:text-sm mt-3">
          <strong>Population: </strong>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className="text-xl lg:text-sm mt-1">
          <strong>Region: </strong>
          <span>{country.region}</span>
        </div>
        <div className="text-xl lg:text-sm mt-1 pb-5">
          <strong>Capital: </strong>
          <span>{country.capital}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
