import { Fragment, useEffect, useState} from 'react'
import Country from '../Country'
import Navbar from '../Navbar'

// 'https://restcountries.com/v3.1/name/nigeria?fullText=true'

const Details = ({modeToggle, country, loading, error, errMessage}) => {
  document.title = 'Country Details'

  useEffect(() => {
    return country
  }, [country])

  // const [country, setCountry] = useState([])

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
