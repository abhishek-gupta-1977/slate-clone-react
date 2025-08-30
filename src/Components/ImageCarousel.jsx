import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselSlides } from '../Constants/index'; // Adjust the path if needed

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-44">
      {/* Image */}
      <div className="overflow-hidden rounded-lg sm:rounded-xl w-full max-h-[250px] sm:max-h-[350px] md:max-h-[500px] lg:max-h-[600px] mx-auto">
        <img
          src={carouselSlides[currentIndex].image}
          alt={carouselSlides[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-500 shadow-2xl shadow-gray-200"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 text-orange-500 p-1 sm:p-2 rounded-full hover:bg-black"
      >
        <ChevronLeft size={20} className="sm:size-24" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 text-orange-500 p-1 sm:p-2 rounded-full hover:bg-black"
      >
        <ChevronRight size={20} className="sm:size-24" />
      </button>

      {/* Divider */}
      <hr className="mt-6 sm:mt-10 md:mt-12 mx-6 sm:mx-16 md:mx-24 border-gray-600" />

      {/* Title & Description */}
      <div className="mt-6 sm:mt-10 md:mt-16 text-white px-2 sm:px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold">
          {carouselSlides[currentIndex].title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base mt-2 sm:mt-3 text-gray-200 font-semibold max-w-xl">
          {carouselSlides[currentIndex].description}
        </p>
      </div>

      {/* Dots */}
      <div className="flex gap-1 mt-4 sm:mt-6">
        {carouselSlides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-3 sm:h-2 sm:w-4 ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
            } rounded-sm`}
          ></div>
        ))}
      </div>

      {/* Count */}
      <p className="text-white mt-2 text-xs sm:text-sm md:text-base">
        <span className="text-orange-500">{currentIndex + 1}</span> / {carouselSlides.length}
      </p>
    </div>
  );
};

export default ImageCarousel;
