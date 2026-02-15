import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant, } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';
const Process = () => {
    const RenderSteps = 
        steps.map(item => {
            return (
                //  steps  
                <div className={`flex-1   md:basis-[100px] basis-[300px] ${item.id %2===0 ? 'md:-mt-50':''}`}>
                    
                        <span className='flex items-center mx-auto justify-center w-18 h-18 text-7xl bg-zinc-800 outline-dotted outline-offset-1 outline-[3px]  outline-zinc-800 rounded-full text-white mb-6 '>{item.number}</span>
                    
                    {/* icons */}
                    <div className='flex items-center gap-4 '>
                        <span className='flex bg-gradient-to-b from-orange-500 to-orange-300 h-15 w-15 text-white rounded-full  text-3xl items-center justify-center '>{item.icon}</span>
                        <div className='flex-1'>

                            <h3 className='text-2xl font-bold text-zinc-800 mt-2'>{item.title}</h3>
                            <p className=' text-zinc-600'>{item.para}</p>
                        </div>
                    </div>
                </div>
            )
        })
  return(
    <section>
        <div className='max-w-[1200px] mx-auto px-10 py-20'>
            <div className=' w-fit mr-auto'>
                <Heading highlight='our' heading='Process' />
            </div>
            {/* steps */}
            <div className='flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-20 md:pt-20 pt-4'>{RenderSteps}</div>
        </div>
    </section >
  )
}

export default Process
const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    }
]

