import React from 'react';
import { SlateComboData } from '../Constants';

const SlateCombo = () => {
  return (
    <div className="text-white flex flex-col-reverse lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-36 py-10 gap-10">
      
      {/* Text Section */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-12 font-extrabold max-w-full lg:max-w-2xl">
          EVERYTHING YOU <br /> NEED IS INCLUDED.
        </h1>
        <p className="text-base sm:text-lg lg:text-lg text-zinc-300 mb-6 sm:mb-8 lg:mb-12">
          {SlateComboData.description}
        </p>
        <button className="border-2 border-orange-700 rounded-md py-2 sm:py-3 px-6 sm:px-8 font-extrabold text-sm sm:text-base lg:text-base">
          {SlateComboData.button}
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          src={SlateComboData.image}
          alt={SlateComboData.title}
          className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default SlateCombo;
