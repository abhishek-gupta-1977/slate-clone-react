import React from 'react'
import video from '../assets/videopart.mp4'
import { videoDescription } from '../Constants'

const Video = () => {
  const { title, description } = videoDescription[0];
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-28 pt-10 sm:pt-16 lg:pt-20 text-white bg-[#1f1f1f]">
      {/* Video Section */}
      <video
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="w-full h-auto rounded-lg shadow-lg"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Text Section */}
      <div className="text-center py-8 sm:py-12 lg:py-16 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
          {title}
        </h4>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Video
