import React from 'react'

const Countries = ({countries}) => {
  return (
    <div style={{rowGap:'4.6rem'}} className="countries-wrapper sm:px-12 lg:p-0 flex flex-wrap justify-between lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-20">
      
      <div className="country-container relative overflow-hidden rounded-md w-full shadow-md bg-white h-max">
        <div className="img-wrapper relative top-0 left-0 w-full">
          <img src= {countries[0].flags.svg}  alt="flag" />
        </div>
        <div className="p-6">
          <h1 className="mt-1 font-bold text-2xl lg:text-lg">{countries[0].name.common}</h1>
          <div className="text-xl lg:text-sm mt-3">
            <strong>Population: </strong><span>{countries[0].population}</span>
          </div>
          <div className="text-xl lg:text-sm mt-1">
            <strong>Region: </strong><span>{countries[0].region}</span>
          </div>
          <div className="text-xl lg:text-sm mt-1 pb-5">
            <strong>Capital: </strong><span>{countries[0].capital}</span>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Countries
