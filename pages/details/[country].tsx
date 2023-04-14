import { Fragment, useEffect } from "react";
// import { Link } from 'react-router-dom'
// import Country from '../Country';
// import Navbar from '../Navbar';

const Details = () =>
  //   {
  //   modeToggle,
  //   country,
  //   setCountry,
  //   loading,
  //   error,
  //   errMessage,
  //   getBorderCountry
  // }
  {
    document.title = "Country Details";

    // useEffect(() => {
    //   setCountry(JSON.parse(localStorage.getItem('country')));
    //   // eslint-disable-next-line
    // }, []);

    return (
      <Fragment>
        {/* <Navbar modeToggle={modeToggle} /> */}
        <div className="wrapper font-nunito relative p-6 sm:px-8 md:px-12 xl:px-20 pt-12 pb-20 lg:pb-11 min-h-screen dark:text-white mt-8">
          {/* <Link to="/" className="back-btn flex items-center py-2 mb-12 w-32 rounded cursor-pointer transition-colors shadow-md bg-white dark:bg-dark-blue-dark justify-center dark:hover:bg-dark-gray-light hover:bg-dark-gray-light hover:text-white"> */}
          {/* <ion-icon class="text-3xl md:text-xl" name="arrow-back-outline"></ion-icon> */}
          <span className="ml-1">Back</span>
          {/* </Link> */}

          {/* <Country
            country={country}
            loading={loading}
            error={error}
            errMessage={errMessage}
            getBorderCountry={getBorderCountry}
          /> */}
        </div>
      </Fragment>
    );
  };

export default Details;
