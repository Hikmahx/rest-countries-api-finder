import React from 'react'

const Navbar = ({modeToggle}) => {
  return (
    <nav className="h-32 bg-white dark:bg-dark-blue-dark dark:text-white transition-colors sm:h-40 lg:h-20 p-6 sm:px-8 md:px-12 xl:px-20 flex items-center justify-between shadow-md">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-2xl font-NunitoSans">Where in the world?</h1>
      <div id="ModeToggler" className=" flex justify-center items-center" onClick={modeToggle}>
        <ion-icon class="text-3xl md:text-xl" name="moon-outline"></ion-icon>
        <p className="hidden sm:block pl-4 lg:pl-2 text-lg sm:text-2xl lg:text-base font-semibold">Dark Mode</p>
      </div>
    </nav>
  )
}

export default Navbar
