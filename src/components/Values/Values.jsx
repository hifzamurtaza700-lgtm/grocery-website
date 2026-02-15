import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

import Basket from '../../assets/basket-full-vegetables.png'
const Values = () => {
  const LeftValues = values.slice(0,2).map(item=>{
    return(
    <div className='flex md:flex-row-reverse gap-6 items-center ' key={item.id}>
      <div>
           <span className='flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-300 h-15 w-15 text-white rounded-full  text-3xl '>{item.icons}</span></div>
       <div className='md:text-right '>
        <h3 className='text-3xl font-bold text-zinc-800'>{item.title}</h3>
        <p className='text-zinc-600'>{item.para}</p>
      </div>
    </div>)
    
  })
  const RightValues = values.slice(2,4).map(item=>{
    return(

    <div className='flex  gap-6 items-center'key={item.id} >
     <div>
           <span className='flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-300 h-15 w-15 text-white rounded-full text-3xl '>{item.icons}</span></div>
      <div>
         <h3 className='text-xl font-bold text-zinc-600'>{item.title}</h3>
        <p>{item.para}</p>
      </div>
    </div>)
    
  })
 
  return (
  <section>
    <div className='py-10 max-w-[1200px] mx-auto px-10 '>
      <Heading highlight='Our' heading='Values'/>
<div className='flex  md:flex-row flex-col gap-15 md:gap-5 mt-15 '>
  {/* Left values */}
<div className='md:min-h-100  flex flex-col justify-between gap-15'>{LeftValues}</div>
{/* Center values */}
<div className='md:flex w-1/2 hidden'>
  <img src={Basket} />
</div>
{/* Right Values */}
<div className='md:min-h-100  flex flex-col justify-between gap-15'>{RightValues}</div>

</div>
    </div>
  </section>
  )
}

export default Values
const values =[
  {
id:'1',
title:'Trust',
para:'It is a long established fact that a reader will be distracted by the readable.',
 icons:<FaHeart />

  },
  {
    id:'2',
    title:'Always Fresh',
   para:'It is a long established fact that a reader will be distracted by the readable.',
    icons:<FaLeaf/>
  },
    {
id:'3',
title:'Food Safety',
para:'Lorem ipsm is simply dummy text of the printing and typesetting industry.',
 icons:<FaShieldAlt/>
  },
  {
    id:'4',
    title:'100% Organic',
   para:'Lorem ipsm is simply dummy text of the printing and typesetting industry',
   icons:<FaSeedling/>
  },
]
