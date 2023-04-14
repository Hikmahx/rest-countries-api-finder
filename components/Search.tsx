import React from "react";

const Search = () =>
  // { searchInput, emptyInput }
  {
    return (
      <div className="search-container mb-12 dark:bg-dark-blue-dark py-4 px-8 bg-white lg:w-3/4 lg:max-w-lg shadow-md rounded flex items-center">
        {/* <Ion-icon
        class='text-dark-gray-light dark:text-white text-xl'
        name='search'
        aria-hidden="true"
      ></IonIcon> */}
      <i className="icon ion-ios-search text-dark-gray-light dark:text-white text-xl"></i>

        <form
        // onSubmit={searchInput}
        >
          <input
            // onKeyUp={emptyInput}
            className="focus:outline-none font-nunito dark:bg-dark-blue-dark ml-5 w-4/5"
            type="text"
            placeholder="Search for a country..."
          />
        </form>
      </div>
    );
  };

export default Search;
