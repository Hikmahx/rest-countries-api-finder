import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import CountryItem from "./CountryItem";
import Loading from "./Loading";

const Countries = () => {
  const { countries, loading, error, errMsg } = useSelector(
    (state: RootState) => state.country
  );
  // { countries, loading, error, errMessage, getCountry }
  if (error === true) {
    return (
      <div>
        <h1 className="text-xl lg:text-4xl text-center">{errMsg}</h1>
      </div>
    );
  } else {
    if (loading === true) {
      return <Loading />;
    } else {
      try {
        return (
          <div
            style={{ rowGap: "4.6rem", marginBottom: "2.5px" }}
            className="countries-wrapper max-w-lg m-auto sm:max-w-xl lg:max-w-none sm:px-12 lg:p-0 flex flex-wrap justify-between lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-20"
          >
            {countries.map((country) => (
              <CountryItem />
            ))}
          </div>
        );
      } catch (err) {
        return (
          <div>
            <h1 className="text-xl lg:text-4xl text-center">
              Country Not Found
            </h1>
          </div>
        );
      }
    }
  }
};

export default Countries;
