import React from 'react'

const Search = () => {
  return (
    <div className="search-container mb-12 dark:bg-dark-blue-dark py-4 px-8 bg-white lg:w-3/4 lg:max-w-lg shadow-md rounded flex items-center">
      <ion-icon class="text-dark-gray-light dark:text-white text-xl" name="search"></ion-icon>
      <input className="focus:outline-none font-NunitoSans dark:bg-dark-blue-dark ml-5 w-4/5" type="text" placeholder="Search for a country..." />
    </div>
  )
}

export default Search
