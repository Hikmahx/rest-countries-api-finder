import React from 'react'
import Search from './Search'
import Filter from './Filter'
import Countries from './Countries'


const Main = ({countries, loading, searchInput}) => {
  return (
    <main className='font-NunitoSans relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white'>
      <div className='input-wrapper flex flex-wrap items-center justify-between'>
        <Search searchInput={searchInput} />
        <Filter />
      </div>
      <Countries countries={countries} loading={loading} />
    </main>
  );
}

export default Main
