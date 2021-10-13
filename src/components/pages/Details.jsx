import { Fragment, useEffect} from 'react'
import Country from '../Country'
import Navbar from '../Navbar'

// 'https://restcountries.com/v3.1/name/nigeria?fullText=true'

const Details = ({modeToggle, country, setCountry, loading, error, errMessage}) => {
  document.title = 'Country Details'

  useEffect(() => {
    setCountry(JSON.parse(localStorage.getItem('country')))
    // eslint-disable-next-line
  }, [])


  return (
    <Fragment>
      <Navbar modeToggle={modeToggle}/>
      <Country country={country}            
       loading={loading}
       error={error}
       errMessage= {errMessage}
/>
    </Fragment>
  )
}

export default Details
