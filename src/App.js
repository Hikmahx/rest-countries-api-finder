import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  useEffect( () => {
    getCountries()
  }, [])

  const getCountries = async ()=>{
    const res = await fetch('https://restcountries.com/v3.1/alpha?codes=usa,afg,ala,br,is,alg,alb,de');
    const data = await res.json()
    // eslint-disable-next-line
    setCountries(data)
  }

  const [countries, setCountries] = useState([]);

  return (
    <div className="App bg-very-light-gray-light dark:bg-very-dark-blue-dark">
      <Navbar/>
      <Main countries = {countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
