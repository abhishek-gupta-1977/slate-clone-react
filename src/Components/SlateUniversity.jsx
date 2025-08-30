import React from 'react'
import { slateUniversity } from '../Constants'

const SlateUniversity = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-[#cfcfcf] px-6 py-12 lg:px-20 lg:py-20">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img 
          src={slateUniversity.image} 
          alt={slateUniversity.title} 
          className="w-full max-w-md lg:max-w-full rounded-xl shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 lg:px-12 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          {slateUniversity.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
          {slateUniversity.description}
        </p>
      </div>
    </section>
  )
}

export default SlateUniversity
