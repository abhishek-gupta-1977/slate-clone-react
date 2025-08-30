import React from 'react'
import tellme_slate from '../assets/tellme_slate.webp'
import { ChargingInfo } from '../Constants'

const Tellmemore = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={tellme_slate} 
          alt="Slate Electric Truck" 
          className="w-[90%] md:w-full max-w-lg md:max-w-none"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 md:p-20 lg:p-28 text-center md:text-left">
        <h6 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-10">
          {ChargingInfo.title}
        </h6>
        <p className="text-zinc-300 text-base md:text-lg mb-6 md:mb-10">
          {ChargingInfo.description}
        </p>
        <button className="bg-[#1c1c1c] font-extrabold py-3 px-8 border-2 border-orange-700 rounded-md hover:bg-neutral-800 transition-all">
          TELL ME MORE
        </button>
      </div>
    </div>
  )
}

export default Tellmemore
