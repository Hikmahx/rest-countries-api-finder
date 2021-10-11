import React from 'react'
import CountryItem from './CountryItem'
import Loading from './Loading'

const Countries = ({countries, loading, error, errMessage}) => {
  if(error===true){
    return(
      <div>
        <h1 className="text-xl lg:text-4xl text-center">{errMessage}</h1>
      </div>
    )
  }else{

  if(loading ===true){
    return(
      <Loading/>
    )
  }else{
    try{
  return (
    <div style={{rowGap:'4.6rem', marginBottom: '2.5px'}} className="countries-wrapper max-w-lg m-auto sm:max-w-xl lg:max-w-none sm:px-12 lg:p-0 flex flex-wrap justify-between lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-x-20">
      {countries.map((country)=>(
        <CountryItem country={country} />
      )
      )}     
    </div>
  )      
    }catch(err){
      return(
        <div>
          <h1 className="text-xl lg:text-4xl text-center">Country {countries.message}</h1>
        </div>
      )
    }

  }
  }
}

export default Countries
