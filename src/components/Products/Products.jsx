import React from 'react'
import Heading from '../Heading/Heading'
import { useState } from 'react'
import ProductList from '../ProductLiat/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
  const [activeTab, setactiveTab] = useState('All')
  let filteredItems =activeTab ==='All'? ProductList :ProductList.filter(item=>item.category=== activeTab)
  const RenderCard = filteredItems.slice(0, 8).map(products => {
    return (<Cards image ={products.image} name ={products.name} price={products.price} />)
  })
  return (
    <section>
      <div className='max-w-[1200px] mx-auto py-20 px-10'>
        <Heading highlight='Our ' heading='Products' />

        {/* tab */}

        <div className='flex  flex-wrap items-center gap-3 justify-center mt-10 '>
          {categories.map(category => {
            return (<button key={category} className={` px-5 py-2 text-xl rounded-xl ${activeTab === category ? 'bg-gradient-to-b from-orange-500 to-orange-300 text-white' : 'bg-zinc-100'}`} onClick={() => setactiveTab(category)} >{category}</button>
            )
          }

          )}
        </div>
        {/* producting list */}
        <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20'>
          {RenderCard}
        </div>
        <div className='mt-10 mx-auto w-fit'>    
           <Link to ='/allproducts' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 
   rounded-lg cursor-pointer hover:scale-105 hover:from-orange-600 md:text-lg text-md
   transition-all duration-300'>View All</Link>
   </div>
      </div>
    </section>
  )
}

export default Products
