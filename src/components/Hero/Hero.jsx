import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <section>
       
{/* Hero content */}
<div className='max-w-[1200px] mx-auto px-10 flex md:flex-row flex-col items-center  pt-25'>
  <div className='flex-1'>
    <span className='bg-orange-100 py-3 px-5 text-orange-500 text-lg rounded-full'>
      Export Best Quality..
    </span>

    <h1 className='md:text-6xl/16 text-4xl/12 font-bold mt-5'>
      Tasty organic <br />
      <span className='text-orange-500'>fruits</span> and 
      <span className='text-orange-500'> veggies</span> <br />
      in your city.
    </h1>

    <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
      Bred for a high content of beneficial substances. Our products are all fresh and healthy.
    </p>

    <Button content='Shop Now' />
  </div>

  <div className='flex-1'>
    <img src={grocery} className='w-full max-w-[500px] mx-auto' />
  </div>
</div>

    </section>
  )
}

export default Hero
