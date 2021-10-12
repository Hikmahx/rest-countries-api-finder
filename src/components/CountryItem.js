import React from 'react'
import {Link} from 'react-router-dom'

const CountryItem = ({country, getCountry}) => {
  return (
    <div className="country-container relative overflow-hidden rounded-md w-full shadow-md bg-white dark:bg-dark-blue-dark h-max">
    <div className="img-wrapper relative top-0 left-0 w-full lg:h-40  2xl:h-80">
      <img className="w-full h-full object-cover" src= {country.flags.svg}  alt="flag" />
    </div>
    <div className="p-6">
      <Link to={'/details'} onClick={getCountry} className="mt-0 cursor-pointer hover:text-dark-gray-light font-bold text-2xl lg:text-lg">{country.name.common}</Link>
      <div className="text-xl lg:text-sm mt-3">
        <strong>Population: </strong><span>{country.population.toLocaleString()}</span>
      </div>
      <div className="text-xl lg:text-sm mt-1">
        <strong>Region: </strong><span>{country.region}</span>
      </div>
      <div className="text-xl lg:text-sm mt-1 pb-5">
        <strong>Capital: </strong><span>{country.capital}</span>
      </div>
    </div>
  </div>   )
}

export default CountryItem
