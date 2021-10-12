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
  filterByRegion
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
      />
    </main>
  );
};

export default Main;
