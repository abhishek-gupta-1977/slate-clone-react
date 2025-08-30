import React from 'react'
import ImageCarousel from './ImageCarousel'

const Hero = () => {
  return (
    <>
      {/* Hero Text Section */}
      <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 my-10 md:my-20">
        <div className="bg-[#262626] mt-20 rounded-2xl md:rounded-3xl px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-28 max-w-screen-xl text-center md:text-left">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            THIS TRUCK CAN BE ANYTHING.
          </h1>
          <h2 className="text-gray-400 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold mt-2 sm:mt-4">
            EVEN AN SUV.
          </h2>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-gradient-to-b from-black to-zinc-600">
        <ImageCarousel />
      </div>
    </>
  )
}

export default Hero
