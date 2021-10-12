import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Country = ({country, loading, error, errMessage}) => {
  return (
    <div className="wrapper font-NunitoSans relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white mt-8">

      <Link to="/" className="back-btn flex items-center py-2 mb-12 w-32 rounded cursor-pointer transition-colors shadow-md bg-white dark:bg-dark-blue-dark justify-center">
      <ion-icon class="text-3xl md:text-xl" name="arrow-back-outline"></ion-icon>
      <span className="ml-1">Back</span>
      </Link>
      {error && 
      <div>
        <h1 className='text-xl lg:text-4xl text-center'>{errMessage}</h1>
      </div>
      }{loading & !error &&
       <Loading />
      }{!loading  &&

      <div className="details flex flex-col lg:flex-row justify-center items-start lg:items-center lg:justify-start lg:gap-12 xl:gap-20 mt-12 lg:mt-20">
        {country.length<1 && 
          <h1 className='text-xl lg:text-4xl text-center w-full'>Return to Homepage</h1>
        }{
          country &&
          <>
        <div className="img-container lg:flex-1 flex items-start mb-16 lg:mb-0">
          <img className="h-full w-full" src= {country.flags.svg}  alt="flag" />
        </div>
        <div className="details-container lg:flex-1">
        <h1 className="mt-0 font-bold text-2xl lg:text-3xl mb-4 lg:mb-6">{country.name.common}</h1>
          <div className="details-wrapper flex flex-col lg:flex-row justify-center items-start lg:justify-between gap-12 lg:gap-0 mb-12">
            <div className="main-details">
              <div className="text-xl lg:text-sm mt-3">
                <strong>Native Name: </strong>{country.name.official}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Population: </strong>{country.population.toLocaleString()}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Region: </strong>{country.region}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Sub Region: </strong>{country.subregion}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Capital: </strong>{country.capital}
              </div>
            </div>
            <div className="other-details">
              <div className="text-xl lg:text-sm mt-3">
                <strong>Top Level Domain: </strong>{country.tld}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Currencies: </strong>{Object.values(country.currencies)[0].name}
              </div>
              <div className="text-xl lg:text-sm mt-3">
                <strong>Languages: </strong>{Object.values(country.languages).sort().join(', ')}
              </div>          
            </div>

          </div>
            {country.borders &&
            <div className="borders flex flex-col lg:flex-row">
              <strong className="mb-3 lg:mb-0">Border Countries: </strong>
                <span className="flex flex-wrap items-center">
                  {country.borders.map((border)=>(
                    <span className="py-2 m-2 px-4 rounded cursor-pointer transition-colors shadow-md bg-white dark:bg-dark-blue-dark">{border}</span>
                  ))}
                </span>
            </div>
            }
        </div>
          </>
        }

      </div>
    } 
      
    </div>
  )
}

export default Country
