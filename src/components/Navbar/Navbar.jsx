import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Navbar = () => {
      const [isScrolled ,setisScrolled]=useState(false);
    const [showMenu, setShowMenu]=useState(false);
    const toggleMenu =()=>{
        setShowMenu(!showMenu);
    }
 useEffect(() => {
  const handleScroll = () => {
    setisScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


    return (
        <header className={`bg-white fixed left-0 right-0 top-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,.5)]' :'' }`}>
            <nav className='max-w-[1200px] px-10 mx-auto md:h-[14vh] h-[12vh] items-center flex justify-between '>
                {/* logo */}
                <Link to ="/" className='text-3xl font-bold'>
                    Gr<span className='text-orange-300 uppercase'>o</span>cify
                </Link>
                {/* Desktop menu */}
                <ul className='md:flex gap-x-15 hidden' >
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 text-orange-500'>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#">
                            About Us
                        </a>
                    </li>
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#"> Process
                        </a>
                    </li>
                    <li className='font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>

                </ul>
                {/* Nav-action */}
                <div className='flex gap-x-5 items-center'>
                    {/* input field */}
                    <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='full'
                            className='h-[5vh] px-2 focus:outline-none' />
                        <button className=' flex h-10 w-10 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white items-center justify-center'><FaSearch /></button>
                    </div>

                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaHeart /></a>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaShoppingBag /></a>
                        {/* hamburger */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                      {showMenu ? <TbMenu3/>: <IoMdMenu/>}
                    </a>
                </div>
                  {/* Mobile menu */}
                  <ul className={`flex flex-col  gap-y-12 gap-x-15 p-10 md:hidden shadow-xl absolute bg-orange-500/14 backdrop-blur-xl top-30 -left-1/2 transform -translate-x-1/2  transition-all duration-500 ${showMenu ? 'left-1/2' :''}`} >
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 text-orange-500'>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#">
                            About Us
                        </a>
                    </li>
                    <li className='font-semibold font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#"> Process
                        </a>
                    </li>
                    <li className='font-semibold tracking-wider text-zink-800 hover:text-orange-500'>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>
                      <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='full'
                            className='h-[5vh] px-2 focus:outline-none' />
                        <button className=' flex h-10 w-10 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white items-center justify-center'><FaSearch /></button>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Navbar
