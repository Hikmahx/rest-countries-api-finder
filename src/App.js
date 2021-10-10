import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  useEffect( () => {
    getCountries()
  }, [])

  const getCountries = async ()=>{
    try{
      const res = await fetch('https://restcountries.com/v3.1/alpha?codes=usa,afg,ala,br,is,alg,alb,de');
      const data = await res.json()
      // eslint-disable-next-line
      setCountries(data)
      
    }catch(err){
      console.log(err.message)
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
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="App bg-very-light-gray-light dark:bg-very-dark-blue-dark transition-colors">
      <Navbar modeToggle={modeToggle} />
      <Main countries = {countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
