import React from 'react'
import CountryItem from './CountryItem'

const Countries = ({countries}) => {
  return (
    <div style={{rowGap:'4.6rem', marginBottom: '2.5px'}} className="countries-wrapper max-w-lg m-auto sm:max-w-xl lg:max-w-none sm:px-12 lg:p-0 flex flex-wrap justify-between lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-20">
      
      {countries.map((country)=>(
        <CountryItem country={country} />
      )
      )}     
    </div>
  )
}

export default Countries
