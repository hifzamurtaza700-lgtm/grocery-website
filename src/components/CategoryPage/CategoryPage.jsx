import React from 'react'
import Banners from '../Banners/Banners'
import ProductList from '../ProductLiat/ProductList'
import Cards from '../Cards/Cards'
const CategoryPage = ({title,bgImage,categories=[]}) => {
    let filteredItems = categories.includes('All')?ProductList: ProductList.filter(item=> categories.includes(item.category))
    const renderproducts = filteredItems.map(product=>{
        return(<Cards key={product.id}  image={product.image} name={product.name} price={product.price}/>)
    })
  return (

    <div>
     <Banners title={title} bgImage={bgImage}/>
     <div className='grid md:grid-cols-4 grid-cols-1 gap-9 px-20 py-20 max-w-[1200px] mx-auto '>
       { renderproducts}
     </div>
    </div>
  )
}

export default CategoryPage
