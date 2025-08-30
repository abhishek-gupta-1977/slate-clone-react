import React from 'react';
import { MerchProducts } from '../Constants';

const MerchProductslisting = () => {
  return (
    <div className="bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6 md:px-12 lg:px-48 py-16 sm:py-20 lg:py-28">
      {MerchProducts.map((product, index) => (
        <div key={index} className="mb-10 flex flex-col items-center text-center">
          <img
            className="mb-4 border-2 hover:border-orange-500 w-full object-contain max-h-72 sm:max-h-80"
            src={product.image}
            alt={product.title}
          />
          <hr className="w-full border-t border-black mb-3" />
          <h2 className="font-bold mb-2 text-lg sm:text-xl">{product.title}</h2>
          <p className="text-base sm:text-lg">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MerchProductslisting;
