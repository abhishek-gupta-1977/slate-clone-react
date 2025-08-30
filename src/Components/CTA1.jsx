import React from 'react'
import cta1 from '../assets/cta1.png'
import { MoveRight } from 'lucide-react'

const CTA1 = () => {
  return (
    <div className="bg-[#4A4A4A]">
      {/* Top Pattern */}
      <div className="h-10 bg-[repeating-linear-gradient(0deg,_#1f1f1f_0px,_#1f1f1f_2px,_#4A4A4A_2px,_#4A4A4A_6px)]"></div>

      {/* Main CTA */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start py-16 lg:py-32 px-6 sm:px-12 lg:px-24 gap-12 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white font-normal text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 font-extrabold leading-tight">
            GREAT CARS GOT TOO PRICEY.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 font-bold text-gray-200">
            WE FIXED THAT.
          </h2>

          <button className="flex items-center justify-center lg:justify-start gap-4 bg-black py-3 px-8 sm:px-12 border-2 border-orange-700 font-bold rounded-md hover:bg-neutral-900 transition">
            RESERVE FOR $50 <MoveRight className="text-orange-700" />
          </button>

          <span className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 mt-5 text-base sm:text-lg text-gray-400">
            Need help finding available incentives?
            <a href="#" className="underline">Start here.</a>
          </span>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={cta1}
            alt="CTA Car"
            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default CTA1
