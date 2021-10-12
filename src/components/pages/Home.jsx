import { Fragment} from 'react'
import Main from '../Main'
import Navbar from '../Navbar'

const Home = ({modeToggle, countries, setCountries, searchInput, emptyInput, loading, error, errMessage, filterByRegion}) => {
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
      />
    </Fragment>
  )
}

export default Home
