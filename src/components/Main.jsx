import React from 'react';
import Search from './Search';
import Filter from './Filter';
import Countries from './Countries';

const Main = ({
  countries,
  loading,
  error,
  errMessage,
  searchInput,
  emptyInput,
  filterByRegion,
  getCountry
}) => {
  return (
    <main className='font-NunitoSans relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white'>
      <div className='input-wrapper flex flex-wrap items-center justify-between'>
        <Search searchInput={searchInput} emptyInput={emptyInput} />
        <Filter filterByRegion={filterByRegion} />
      </div>
      <Countries
        countries={countries}
        loading={loading}
        error={error}
        errMessage={errMessage}
        getCountry={getCountry}
      />
    <div className="attribution absolute h-auto bottom-3 lg:bottom-0 left-0 right-0 transition-colors px-6 sm:px-8 md:px-12 xl:px-20 w-full mx-auto dark:text-white flex flex-wrap items-center justify-center text-center">
      <span>      
        Challenge by <a className='text-dark-gray-light underline hover:text-dark-blue-dark dark:hover:text-white' href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.  
        Coded by <a className='text-dark-gray-light underline hover:text-dark-blue-dark dark:hover:text-white'  href="https://github.com/Hikmahx">Hikmah</a>.
      </span>
    </div>


    </main>
  );
};

export default Main;
