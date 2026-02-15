import React from 'react'

const Heading = (props) => {
  return (
     <div className='w-fit mx-auto '>
<h1 className='text-5xl font-bold'><span className='text-orange-500'>{props.highlight} </span>{props.heading}</h1>
<div className='w-35 h-1 bg-orange-500 mt-6 ml-auto'></div>
</div>
  )
}

export default Heading
