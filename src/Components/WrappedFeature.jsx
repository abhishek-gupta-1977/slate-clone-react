import React from 'react'
import { WrappedFeatureContent } from '../Constants'

const WrappedFeature = () => {
  return (
    <section>
      <div>
        {WrappedFeatureContent.map((feature, i) => (
          <div
            key={feature.id}
            className={`text-white mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28 ${
              i === 1 ? 'bg-[#1e1e1e]' : 'bg-black'
            }`}
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-10 sm:mb-14 text-center leading-tight max-w-4xl mx-auto">
              {feature.title}
            </h2>

            {/* Image */}
            <img
              src={feature.image}
              className="w-full max-w-4xl mx-auto mb-10 sm:mb-14 rounded-lg object-cover"
              alt={feature.title}
            />

            {/* Description */}
            <div className="text-center mx-auto max-w-4xl text-base sm:text-lg md:text-xl leading-relaxed space-y-6 px-2 sm:px-6">
              {/* Main description */}
              <p>{feature.description.split('Your Slate will age gracefully')[0]}</p>

              {/* Special last line with emphasis */}
              {feature.description.includes('Your Slate will age gracefully') && (
                <p className="mt-8 sm:mt-10 text-gray-300 italic text-sm sm:text-base md:text-lg">
                  Your Slate will age gracefully, because it’ll always have the latest tech—yours.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WrappedFeature
