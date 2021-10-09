import React from 'react'
import Search from './Search'
import Filter from './Filter'

const Main = () => {
  return (
    <main className="p-6 sm:px-8 md:px-12 xl:px-20 pt-12 h-screen">
      <div className="input-wrapper flex flex-wrap items-center justify-between">
        <Search/>
        <Filter />
      </div>

    </main>
  )
}

export default Main
