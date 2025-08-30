import React from 'react'
import { cardData } from '../Constants'
import { ChevronRight } from 'lucide-react'

const InfoCards = () => {
  return (
    <div className='text-white px-6 md:px-16 lg:px-28 py-10'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 text-center lg:text-left'>
        YOUR PERFECT SLATE IS EASY AS 1,2,3.
      </h3>

      <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className='bg-[#262626] p-6 md:p-7 rounded-xl flex flex-col'
          >
            <img src={card.image} alt={card.title} className="w-full h-auto rounded-md"/>
            <h3 className='font-extrabold text-xl md:text-2xl my-4 md:my-6'>
              {card.title}
            </h3>
            <p className='text-zinc-400 text-sm md:text-base my-4 md:my-7 flex-1'>
              {card.description}
            </p>
            {card.cta && (
              <a href="#" className='font-extrabold text-base md:text-lg flex items-center hover:text-orange-500 transition-colors'>
                {card.cta} <ChevronRight className='text-orange-700 ml-2'/>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoCards
