import React from 'react'
import Heroimg from '../assets/personalization-twiggy-interior-timelapse-4.webp' 
import { PersonalisationHeroContent } from '../Constants'
import { MoveRight } from 'lucide-react'

const PersonalisationHero = () => {
  return (
    <section className="text-white bg-[#262626] pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="flex justify-center">
          <img 
            src={Heroimg} 
            className="w-full max-w-5xl object-cover rounded-lg" 
            alt="Personalisation hero img" 
          />
        </div>

        {/* Content */}
        <div className="mt-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            {PersonalisationHeroContent.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            {PersonalisationHeroContent.description}
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <button className="flex items-center justify-center gap-3 px-6 py-3 font-semibold border-2 border-orange-700 rounded-md text-sm sm:text-base md:text-lg w-full sm:w-auto">
              {PersonalisationHeroContent.button}
              <MoveRight className="text-orange-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalisationHero
