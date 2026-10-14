import Logo from './Logo'
import SearchBar from './SearchBar'
import Favourite from './Favourite'
import { HamburgerIcon } from 'lucide-react'
import MobileNavLinks from './MobileNavLinks';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = ()=>setIsOpen(!isOpen)
    console.log(toggleMenu, isOpen)

  return (
    <>
    <div className='h-17 bg-black/98 flex justify-evenly items-center relative z-10'>
           
<Logo/>
        <SearchBar/>
        <button className='p-1 md:hidden' onClick={toggleMenu}><HamburgerIcon className='text-white'/></button>
      <Favourite/>

    </div>
             <MobileNavLinks isOpen={isOpen} />
    </>
  )
}

export default Navbar
