import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeaFood from '../../assets/seafood-banner.jpg'
const SeaFood = () => {
  return (
    <div>
    <CategoryPage title='Meat & Seafood' bgImage={bgSeaFood} categories={['SeaFood']}/>
    </div>
  )
}

export default SeaFood
