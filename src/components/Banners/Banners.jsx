import React from 'react'

const Banners = ({ title, bgImage }) => {
  return (
    <div
      className="h-[50vh] mt-24 flex justify-center items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-zinc-800 p-5 bg-white rounded-lg text-5xl font-bold z-10">
        {title}
      </h1>
      <div className=' bg-black/50 absolute inset-0  '></div>
    </div>
  )
}

export default Banners
