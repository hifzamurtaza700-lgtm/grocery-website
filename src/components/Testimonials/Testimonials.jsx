import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {

  return (
    <section>
      <div className='max-w-[1200px] mx-auto px-10 py-20'>
        <Heading highlight='Customers' heading='Saying' />
        <div className=' flex w-fit ml-auto gap-x-2 py-5 mt-16'>
          <button className=' custom-prev bg-zinc-100 text-zinc-800 p-2 rounded-lg text-2xl cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white '>
            <IoIosArrowForward />
          </button>
          <button className='custom-next bg-zinc-100 text-zinc-800 p-2 rounded-lg text-2xl cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white '>
            <IoIosArrowBack />
          </button>
        </div>
       
          <Swiper
      
        navigation={{
          nextEl:'.custom-next',
          prevEl:'.custon-prev'
        }}
        loop={true}
        breakpoints={{
          640:{slidesPerView:1, spaceBetween:20},
           720:{slidesPerView:2 ,spaceBetween:20},
            1024:{slidesPerView:3,spaceBetween:20},
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
      { review.map(item=>{
          return(   <SwiperSlide className='bg-zinc-100 rounded-xl p-8' >
          <div className='flex gap-5 items-center'>
            <div className='bg-red-500 outline-dashed outline-offset-4  rounded-full w-16 h-16 outline-red-500 overflow-hidden'><img src={item.image} className='w-full h-full'/></div>
            <div className='flex flex-col'>
              <h5 className='text-xl font-bold '>{item.name}</h5>
              <p className='text-zinc-600'>{item.profession}</p>
              <span className='flex text-yellow-500'>{Array.from({length:item.rating},(_, index)=>(
                <FaStar />))}
                </span>
            </div>
          </div>
          <div className='mt-10 min-h-[20vh]'>
            <p>{item.para}</p>
          </div>
        </SwiperSlide> )
        })
      }
      </Swiper>
      
      </div>

    </section >
  )
}

export default Testimonials
const review =[
  {
    id:1,
    image:customer1,
    name:'Emily Johnson',
  rating:3,
    profession:'Food Blogger',
    para:'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!'
  },
    {
    id:2,
    image:customer2,
    name:'David Smith',
    rating:3,
    profession:'Chef',
    para:'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!'
  },
    {
    id:3,
    image:customer3,
    name:'Alya Zahra',
  rating:2,
    profession:'Model',
    para:'Shopping online with FreshBasket has saved me so much time. I trust them for my family  weekly groceries—always fresh, affordable, and reliable.'
  },
  {
    id:4,
    image:customer4,
    name:'Carlos Mendes',
    rating:3,
    profession:'Fitness Coach',
    para:'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!'
  },
  {
    id:5,
    image:customer5,
    name:'Natcha Phongchai',
    rating:2,
    profession:'Nutritionist',
    para:'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.'
  }
]