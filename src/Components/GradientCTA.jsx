import React from 'react'
import bgImage from '../assets/gradient_car.webp'
import { MoveRight } from 'lucide-react'

const GradientCTA = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-28"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-snug">
          DESIGNED FOR REAL LIFE.
        </h5>

        <button className="flex items-center justify-center lg:justify-start text-sm sm:text-base md:text-md font-bold border-2 border-orange-700 px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-[#1f1f1f] mt-6 sm:mt-8 md:mt-10 gap-2 rounded-lg hover:bg-neutral-800 transition-all">
          DESIGN YOURS <MoveRight className="text-orange-700" />
        </button>
      </div>

      {/* Right Section (empty for now, but keeps layout) */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0"></div>
    </div>
  )
}

export default GradientCTA
