import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeafoodCat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'
const Category = () => {
  const RenderCard = category.map(card=>{
    return(
    // card image
    <div className='flex-1 basis-[300px]' key={card.id}>
      <div className='h-[30vh] mx-auto relative -mb-10 '><img src={card.image} className=' absolute bottom-0' /></div>
      {/* card content */}
      <div className='bg-zinc-100 pt-10 rounded-xl pl-7 p-10'>
   
        <h3 className='text-zinc-600 text-xl font-bold mt-2'>{card.title}</h3>
        <p className='mt-4 mb-6'>{card.discription}</p>
     <Link to ={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 
   rounded-lg cursor-pointer hover:scale-105 hover:from-orange-600 md:text-lg text-md
   transition-all duration-300'>See ALL</Link>

  </div>
      </div>
    )
  })
  return (
   <section>
    <div className='py-20 max-w-[1200px] mx-auto px-10 '>
     <Heading highlight="Shop" heading="by Category"/>
  {/* Category cards */}
  <div className='flex gap-10 pt-10 flex-wrap md:mt-15 '>{RenderCard}</div>
    </div>
   </section>
  )
}

export default Category


const category = [
  { 
    id:1,
    title:'Fruits & Vaggies',
    discription:'Fruits ,organic produce sourced daily from local farms, explore a wide range of seasonal fruits and crisp vegetables.',
    image:FruitsCat,
    path:'/fruits'
  },
    { 
    id:2,
    title:'Dairy & Eggs',
    discription:'Wholesome dairy products and free range eggs, from creamy milk and yogurt to a artisanal cheeses.',
    image:DairyCat,
    path:'/Dairy'
  },
    { 
    id:3,
    title:'Meat & Seafoods',
    discription:'High-quality responsibly sourced meat and seafood, choose from fresh cuts, marinated options, and more.',
    image:SeafoodCat,
    path:'/SeaFood'
  }
]