import React from 'react'
import Search from './Search'
import Filter from './Filter'
import Countries from './Countries'
import Loading from './Loading'


const Main = ({countries, searchInput}) => {
  return (
    <main className="font-NunitoSans relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white">
      <div className="input-wrapper flex flex-wrap items-center justify-between">
        <Search searchInput={searchInput}/>
        <Filter/>
      </div>
      <Loading/>
      <Countries countries={countries}/>
    </main>
  )
}

export default Main
