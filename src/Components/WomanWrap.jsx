import React from 'react'
import { womanWrapData } from '../Constants'

const WomanWrap = () => {
  return (
    <section className="w-full text-white">
      {womanWrapData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            item.reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              className="w-full h-64 sm:h-80 md:h-full object-cover"
              alt={item.title}
            />
          </div>

          {/* Content Section */}
          <div
            className={`w-full md:w-1/2 ${item.bgColor} flex items-center justify-center p-6 sm:p-10 lg:p-16`}
          >
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold my-6 text-black">
                {item.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default WomanWrap
