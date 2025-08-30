import React from 'react';
import { newsletterData } from '../Constants';

const Newsletter = () => {
  return (
    <div className="text-white bg-[#cfcfcf] px-4 sm:px-6 md:px-12 lg:px-40 py-16 sm:py-20 lg:py-24">
      <div className="bg-[#262626] w-full rounded-xl p-6 sm:p-12 lg:p-24 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
        
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-start">
          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10">
            {newsletterData.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
            {newsletterData.description}
          </p>
        </div>

        {/* Input Section */}
        <div className="lg:w-1/2 w-full flex flex-col lg:pl-0">
          <label className="text-gray-300 mb-2 text-sm sm:text-base">{newsletterData.inputLabel}</label>
          <input
            className="w-full p-3 mb-4 rounded-sm focus:outline-none text-black"
            type="email"
            required
          />
          <button className="w-full px-4 sm:px-6 py-3 border border-orange-500 text-white font-bold rounded-sm hover:bg-orange-500 transition text-sm sm:text-base">
            {newsletterData.buttonText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
