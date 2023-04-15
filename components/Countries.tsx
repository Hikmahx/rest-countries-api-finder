import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import CountryItem from "./CountryItem";
import Loading from "./Loading";

const Countries = () => {
  const { countries, loading, error, errMsg } = useSelector(
    (state: RootState) => state.country
  );

  return (
    <>
      {!error ? (
        <>
          {loading ? (
            <div className="my-20 mx-auto">
              <Loading />
            </div>
          ) : (
            <div
              style={{ rowGap: "4.6rem", marginBottom: "2.5px" }}
              className="countries-wrapper max-w-lg m-auto sm:max-w-xl lg:max-w-none sm:px-12 lg:p-0 flex flex-wrap justify-between lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-20"
            >
              {countries.map((country) => (
                <CountryItem key={country.name.common} country={country} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <p className="text-xl lg:text-4xl text-center">{errMsg}</p>
        </>
      )}
    </>
  );
};

export default Countries;
