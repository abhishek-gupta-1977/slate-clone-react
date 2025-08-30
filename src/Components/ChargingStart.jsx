import React from 'react';
import { chargingStartData } from '../Constants';

const ChargingStart = () => {
  return (
    <div className="text-white flex flex-col-reverse lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-40 py-10 gap-10">
      
      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-start">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold my-4 sm:my-6 lg:my-10">
          {chargingStartData.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-lg text-zinc-300">
          {chargingStartData.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          src={chargingStartData.image}
          alt={chargingStartData.title}
          className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default ChargingStart;
