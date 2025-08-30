import React from 'react';
import { chargingCardData } from '../Constants';

const ChargingCard = () => {
  return (
    <div className="text-white px-4 sm:px-6 lg:px-44 py-16">
      
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] mb-4 sm:mb-6 lg:mb-8 font-extrabold">
          {chargingCardData.heading}
        </h1>
        <p className="text-sm sm:text-base lg:text-base text-zinc-300">
          {chargingCardData.description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 sm:mt-16 lg:mt-20">
        {chargingCardData.cards.map((card, i) => (
          <div
            key={i}
            className="text-center w-full sm:w-64 lg:w-80 mx-auto bg-transparent"
          >
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto mb-4 sm:mb-6 lg:mb-7 w-full h-auto object-contain"
            />
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold mb-3 sm:mb-5 lg:mb-7">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-sm text-zinc-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChargingCard;
