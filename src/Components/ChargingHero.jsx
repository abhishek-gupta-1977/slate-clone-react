import React from 'react';
import { chargingHeroData } from '../Constants';

const ChargingHero = () => {
  return (
    <section className="text-white pb-20 mt-20">
      {/* Image */}
      <div className="mx-auto max-w-7xl">
        <img
          src={chargingHeroData.image}
          alt={chargingHeroData.title}
          className="
            ml-0 sm:ml-16 lg:ml-32 
            w-full max-w-full 
            max-h-[50vh] sm:max-h-[60vh] lg:max-h-[80vh]
            object-contain
          "
        />
      </div>

      {/* Text */}
      <div className="
        max-w-5xl 
        mx-4 sm:mx-16 lg:ml-32 
        mt-10 sm:mt-16 lg:mt-0
      ">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold -mt-2 sm:-mt-4 lg:-mt-12">
          {chargingHeroData.title}
        </h1>
        <p className="mt-6 sm:mt-10 lg:mt-20 text-base sm:text-lg lg:text-xl">
          {chargingHeroData.description}
        </p>
      </div>
    </section>
  );
};

export default ChargingHero;
