import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  getDefaultCountries,
  searchCountries,
} from "@/redux/reducers/countrySlice";

const Search = () =>
  // { searchInput, emptyInput }
  {
    const dispatch = useDispatch<AppDispatch>();
    const [input, setInput] = useState("");
    return (
      <div className="search-container mb-12 dark:bg-dark-blue-dark py-4 px-8 bg-white lg:w-3/4 lg:max-w-lg shadow-md rounded flex items-center">
        <MagnifyingGlassIcon className="text-dark-gray-light dark:text-white text-xl w-5" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            input !== "" && dispatch(searchCountries({ search: input }));
          }}
        >
          <input
            // onKeyUp={emptyInput}
            className="focus:outline-none font-nunito dark:bg-dark-blue-dark ml-5 w-4/5"
            type="text"
            id="search"
            name="search"
            placeholder="Search for a country..."
            value={input}
            onChange={(e) => {
              e.target.value === "" && dispatch(getDefaultCountries());
              setInput(e.target.value);
            }}
          />
          <label htmlFor="search" className="sr-only">
            Search Country
          </label>
        </form>
      </div>
    );
  };

export default Search;
