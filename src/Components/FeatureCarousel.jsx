import React, { useState } from 'react'
import { FeaturecarouselSlides } from '../Constants'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slide = FeaturecarouselSlides[currentIndex]

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? FeaturecarouselSlides.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === FeaturecarouselSlides.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-28 py-12 bg-[#1c1c1c]">
      {/* Heading */}
      <h5 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 text-center lg:text-left">
        SPACE, COMFORT, SIMPLICITY.
      </h5>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="flex-1 text-white text-center md:text-left">
          <div className="text-sm mb-2">
            <span className="text-orange-600 font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-white">
              {' '}
              / {String(FeaturecarouselSlides.length).padStart(2, '0')}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">
            {slide.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            {slide.description}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex-1 relative flex items-center w-full">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 z-10 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slides */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {FeaturecarouselSlides.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="w-full flex-shrink-0 object-cover rounded-lg max-h-[250px] sm:max-h-[400px] lg:max-h-[500px]"
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 z-10 bg-black/60 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeatureCarousel
