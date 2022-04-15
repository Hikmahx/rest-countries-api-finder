import React from 'react'

const Filter = ({filterByRegion}) => {
  return (
    <div className="filter-wrapper w-1/2 bg-white dark:bg-dark-blue-dark relative mb-12 py-3 font-NunitoSans lg:w-1/6 h-14 max-w-xs shadow-md rounded flex items-center">
        <select aria-label="region" onChange={filterByRegion} className="form-select block  mt-1 px-2 text-very-dark-blue-light dark:bg-dark-blue-dark dark:text-white absolute right-0 w-full top-3 focus:outline-none">
        <option value="region">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter
