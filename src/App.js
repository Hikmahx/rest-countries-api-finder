import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  useEffect( () => {
    getCountries()
  }, [])

  const getCountries = async ()=>{
    try{
      setLoading(true)

      const res = await fetch('https://restcountries.com/v3.1/alpha?codes=usa,afg,ala,br,is,alg,alb,de');
      const data = await res.json()
      // eslint-disable-next-line
      setCountries(data)
      
      setLoading(false)

    }catch(err){
      console.log(err.message)
      setError(true)
      setErrMessage(err.message)
    }
  }

  const emptyInput = (e)=>{
    let search = e.target.value
    if(search ===''){
      getCountries()
    }
  }

  const searchInput = (e)=>{
    let search = e.target.firstElementChild.value

    if(search ===''){
      console.log('empty')
      getCountries()
    }else{
      searchCountry(search)
    }


    e.preventDefault()
  }

  const searchCountry = async (search)=>{
    try{
      setLoading(true)

      const res = await fetch(`https://restcountries.com/v3.1/name/${search}`) 
      const data = await res.json()
      console.log(data)
      setCountries(data)
      // eslint-disable-next-line

      setLoading(false)


    }catch(err){
      setError(true)
    }
  }

  const filterByRegion= (e) =>{
    let region = e.target.value
    if(region !=='region'){
      // console.log(e.target.value)
      getCountriesByRegion(region)
    }else{
      getCountries() 
    }
  }
  
  const getCountriesByRegion = async (region)=>{
    try {
      setLoading(true)

      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`) 
      const data = await res.json()
      setCountries(data)
      // eslint-disable-next-line

      setLoading(false)
      
    } catch (err) {
      
    }
  }

  const modeToggle =()=>{
    setDarkMode(!darkMode)
    if(darkMode === false){
      console.log(darkMode)
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
      }
    }else{
      console.log(darkMode)
      document.documentElement.classList.add('dark')
    }
  }

  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errMessage, setErrMessage] = useState('')

  return (
    <div className='App bg-very-light-gray-light dark:bg-very-dark-blue-dark transition-colors'>
      <Navbar modeToggle={modeToggle} />
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
    </div>
  );
}

export default App;
