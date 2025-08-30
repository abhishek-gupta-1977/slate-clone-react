import React from 'react'
import merchBanner from '../assets/home_bottom.webp'
import { MoveRight } from 'lucide-react'

const MerchCTA = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${merchBanner})` }} 
      className="bg-center bg-cover bg-no-repeat h-[50vh] sm:h-[60vh] md:h-[70vh] w-full text-white flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-36"
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-10">
          GEAR UP SLATE STYLE.
        </h6>
        <button className="flex items-center justify-center md:justify-start font-bold gap-3 sm:gap-5 py-2 sm:py-3 px-5 sm:px-7 bg-[#1f1f1f] rounded-md hover:bg-neutral-700 transition">
          SHOP NOW
          <MoveRight className="text-orange-700" />
        </button>
      </div>

      {/* Right side empty block (kept for layout spacing) */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  )
}

export default MerchCTA
