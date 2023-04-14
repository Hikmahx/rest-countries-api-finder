import React from 'react';
import Loading from './Loading';

const Country = (
  // { country, loading, getBorderCountry, error, errMessage }
  ) => {
  // if (error === true) {
  //   return (
  //     <div>
  //       <h1 className='text-xl lg:text-4xl text-center'>{errMessage}</h1>
  //     </div>
  //   );
  // }
  // if (loading === true) {
  //   return <Loading />;
  // }
  // if (loading === false) {
  //   document.title = `${country.name.common} Details`;

    return (
      <div className='details flex flex-col lg:flex-row justify-center items-start lg:items-center lg:justify-start lg:gap-12 xl:gap-20 mt-12 lg:mt-20'>
        <div className='img-container lg:flex-1 flex items-start mb-16 lg:mb-0'>
          <img className='h-full w-full' 
          // src={country.flags.svg}
           alt='flag' />
        </div>
        <div className='details-container lg:flex-1'>
          <h1 className='mt-0 font-bold text-2xl lg:text-3xl mb-4 lg:mb-6'>
            {/* {country.name.common} */}
          </h1>
          <div className='details-wrapper flex flex-col lg:flex-row justify-center items-start lg:justify-between gap-12 lg:gap-0 mb-12'>
            <div className='main-details'>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Native Name: </strong>
                {/* {Object.values(country.name.nativeName).at(-1).common} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Population: </strong>
                {/* {country.population.toLocaleString()} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Region: </strong>
                {/* {country.region} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Sub Region: </strong>
                {/* {country.subregion} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Capital: </strong>
                {/* {country.capital} */}
              </div>
            </div>
            <div className='other-details'>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Top Level Domain: </strong>
                {/* {country.tld} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Currencies: </strong>
                {/* {Object.values(country.currencies)[0].name} */}
              </div>
              <div className='text-xl lg:text-sm mt-3'>
                <strong>Languages: </strong>
                {/* {Object.values(country.languages).sort().join(', ')} */}
              </div>
            </div>
          </div>
          {/* {country.borders && (
            <div className='borders flex flex-col lg:flex-row'>
              <strong className='mb-3 lg:mb-0'>Border Countries: </strong>
              <span className='flex flex-wrap items-center'>
                {country.borders.map(border => (
                  <span onClick={getBorderCountry} className='py-2 m-2 px-4 rounded cursor-pointer transition-colors shadow-md bg-white dark:hover:bg-dark-gray-light hover:bg-dark-gray-light hover:text-white dark:bg-dark-blue-dark'>
                    {border}
                  </span>
                ))}
              </span>
            </div>
          )} */}
        </div>
      </div>
    );
  // }
};

export default Country;