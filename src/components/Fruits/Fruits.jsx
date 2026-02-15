import React from 'react'
import BgFruit from '../../assets/fruits-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'
const Fruits = () => {
  return (
   <div>
    <CategoryPage title='Fruits & Veggies' bgImage= {BgFruit} categories={['Fruits']}/>
    </div>
  )
}

export default Fruits
