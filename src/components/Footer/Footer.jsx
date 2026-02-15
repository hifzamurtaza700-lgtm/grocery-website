import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
    return (
        <footer className='bg-zinc-100'>
            <div className=' flex flex-row gap-y-12 flex-wrap max-w-[1200px] mx-auto px-10 py-20 '>
                <div className='flex-1 md:basis-[300px] basis-[350px]'>
                    <a href="#" className='text-3xl font-bold'>
                        Gr<span className='text-orange-300 uppercase'>o</span>cify
                    </a>
                    <p className='text-zin-600 max-w-[350px] mt-6'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className='text-zin-800 mt-6'>2025 &copy; all rights reserve</p>
                </div>
                <ul className='flex-1 '>
                    <li>
                        <h5 className='text-xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>About</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>FAQ'S</a></li>

                </ul>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Support center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Feed back</a></li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-orange-500 text-zinc-800'>Contact us</a></li>

                </ul>
                <div className='flex-1'>
                    <h5 className='text-xl font-bold'> Stay Connected</h5>
                    <p className='mt-6 text-zinc-600'>Question or feedback? <br />We would love to hear from you.</p>
                    <div className='flex bg-white  p-1 rounded=lg mt-6'>
                        <input type="Email" name='Email' id='email' autoComplete='off' placeholder='Email adress' className='flex-1 pl-4 flex-1 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg text-2xl cursor-pointer hover:to-orange-600'>
                        <IoIosArrowForward />
   </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
