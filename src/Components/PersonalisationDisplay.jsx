import React from 'react'
import { thingsChangeSection, designedByUsSection } from '../Constants'

const PersonalisationDisplay = () => {
  return (
    <div className="w-full text-white px-6 sm:px-12 lg:px-24 xl:px-44 py-16 bg-[#262626]">
      {/* Things Change Section */}
      <div className="mb-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
          {thingsChangeSection.heading}
        </h2>
        <p className="mb-12 text-base sm:text-lg text-gray-300 leading-relaxed">
          {thingsChangeSection.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {thingsChangeSection.cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
              <h3 className="my-6 text-xl sm:text-2xl font-bold min-h-[3rem]">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Designed By Us Section */}
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
          {designedByUsSection.heading}
        </h2>
        <p className="mb-12 text-base sm:text-lg text-gray-300 leading-relaxed">
          {designedByUsSection.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {designedByUsSection.cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 sm:h-64 object-cover rounded-lg"
              />
              <h3 className="my-6 text-xl sm:text-2xl font-bold min-h-[3rem]">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonalisationDisplay
