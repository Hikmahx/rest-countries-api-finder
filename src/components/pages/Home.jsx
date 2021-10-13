import { Fragment} from 'react'
import Main from '../Main'
import Navbar from '../Navbar'

const Home = ({modeToggle, countries, setCountries, searchInput, emptyInput, loading, error, errMessage, filterByRegion, getCountry}) => {
  document.title = 'Countries Finder';

  return (
    <Fragment>
      <Navbar modeToggle={modeToggle}/>
      <Main
        countries={countries}
        setCountries={setCountries}
        searchInput={searchInput}
        emptyInput = {emptyInput}
        loading={loading}
        error={error}
        errMessage= {errMessage}
        filterByRegion={filterByRegion}
        getCountry={getCountry}
      />
    </Fragment>
  )
}

export default Home
