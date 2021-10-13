import { useEffect, useState } from "react";
import Home from './components/pages/Home'
import Details from './components/pages/Details'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
      }
    }else{
      document.documentElement.classList.add('dark')
    }
  }

  const getCountry = async (e)=>{
    let name = e.target.textContent
    try{
      setLoading(true)

      const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
      const data = await res.json()
      localStorage.setItem('country', JSON.stringify(data[0]))
      // eslint-disable-next-line
      setCountry(data[0])
      
      setLoading(false)


    }catch(err){
      setLoading(false)
      setError(true)
      setErrMessage(err.message)
    }
  }

  const getBorderCountry = async (e)=>{
    let name = e.target.textContent

    try{
      setLoading(true)

      const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
      const data = await res.json()
      localStorage.setItem('country', JSON.stringify(data[0]))
      // eslint-disable-next-line
      setCountry(data[0])
      
      setLoading(false)


    }catch(err){
      setLoading(false)
      setError(true)
      setErrMessage(err.message)
    }

  }

  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  const [country, setCountry] = useState([])


  return (
    <Router>
    <div className='App bg-very-light-gray-light dark:bg-very-dark-blue-dark transition-colors'>
      <Switch>
        <Route exact path='/' render={()=>
          <Home
            modeToggle={modeToggle}
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
        }/>

        <Route exact path="/details" render={()=>
          <Details 
            modeToggle={modeToggle}
            setCountry={setCountry}
            country={country}
            loading={loading}
            error={error}
            errMessage= {errMessage}
            getBorderCountry={getBorderCountry}
          />
        }/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
