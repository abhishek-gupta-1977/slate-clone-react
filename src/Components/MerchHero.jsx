import React from 'react';
import bottlebg from '../assets/bottlebg.jpg';
import { MerchHeroData } from '../Constants';
import { ArrowRight } from 'lucide-react';

const MerchHero = () => {
  return (
    <div
      className="mt-20 w-full min-h-[90vh] lg:min-h-[90vh] bg-cover bg-right flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-32"
      style={{ backgroundImage: `url(${bottlebg})` }}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-start mt-10 lg:mt-0 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold max-w-full lg:max-w-2xl mb-6 sm:mb-8 lg:mb-10">
          {MerchHeroData.title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-5">
          {MerchHeroData.description}
        </p>
        <button className="bg-[#262626] text-white w-full sm:w-3/4 lg:w-1/2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-md font-extrabold flex justify-between items-center mx-auto lg:mx-0 sm:my-10">
          {MerchHeroData.button}
          <ArrowRight className="text-orange-600 ml-2 sm:ml-4" />
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          className="w-full max-w-full h-auto max-h-[80vh] sm:max-h-[60vh] lg:max-h-[80vh] object-contain"
          src={MerchHeroData.image}
          alt={MerchHeroData.title}
        />
      </div>
    </div>
  );
};

export default MerchHero;
