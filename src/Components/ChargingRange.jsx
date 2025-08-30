import React from 'react';
import { chargingRangeData } from '../Constants';

const ChargingRange = () => {
  return (
    <div className="text-white flex flex-col-reverse lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-40 py-16 gap-10">
      
      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
        <img
          src={chargingRangeData.image}
          alt={chargingRangeData.title}
          className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-start">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold my-4 sm:my-6 lg:my-7">
          {chargingRangeData.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-lg text-zinc-300 my-3 sm:my-5 lg:my-7">
          {chargingRangeData.description1}
        </p>
        <p className="text-base sm:text-lg lg:text-lg text-zinc-300 my-3 sm:my-5">
          {chargingRangeData.description2}
        </p>
      </div>

    </div>
  );
};

export default ChargingRange;
