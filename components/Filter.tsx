import {
  getCountriesByRegion,
  getDefaultCountries,
} from "@/redux/reducers/countrySlice";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Filter = () =>
  // {filterByRegion}
  {
    const dispatch = useDispatch<AppDispatch>();
    // const [inputFilter, setInputFilter] = useState("");
    return (
      <div className="filter-wrapper w-1/2 bg-white dark:bg-dark-blue-dark relative mb-12 py-3 font-nunito lg:w-1/6 h-14 max-w-xs shadow-md rounded flex items-center">
        <select
          aria-label="region"
          // onChange={filterByRegion}
          onChange={(e) => {
            // console.log(e.target.value);
            e.target.value === "region"
              ? dispatch(getDefaultCountries())
              : dispatch(getCountriesByRegion({ region: e.target.value }));
            // setInputFilter(e.target.value);
          }}
          className="form-select block  mt-1 px-2 text-very-dark-blue-light dark:bg-dark-blue-dark dark:text-white absolute right-0 w-full top-3 focus:outline-none"
        >
          <option value="region">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    );
  };

export default Filter;
