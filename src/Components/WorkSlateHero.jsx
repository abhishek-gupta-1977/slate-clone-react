import React from 'react';
import { workSlateHerodata } from '../Constants';
import slateCharity from '../assets/slate-charity.webp';

const WorkSlateHero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-[#262626]'>
        <section className='text-white pb-20 mt-20'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-32'>
            <img
              src={workSlateHerodata.image}
              className='w-full h-auto max-h-[60vh] object-contain lg:ml-32'
              alt={workSlateHerodata.title}
            />
          </div>
          <div className='px-4 sm:px-6 lg:px-32 mt-10 lg:mt-0'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold -mt-4 lg:-mt-12'>
              {workSlateHerodata.title}
            </h1>
          </div>
        </section>
      </div>

      {/* Life at Slate Section */}
      <div className='flex flex-col lg:flex-row items-center justify-center bg-white py-16 lg:py-28 px-4 sm:px-6 lg:px-32 gap-10 lg:gap-20'>
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
          <img src={slateCharity} className='w-full h-auto max-h-[60vh] object-contain' alt="Life at Slate" />
        </div>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 lg:mb-12 font-extrabold'>
            LIFE AT <br /> SLATE
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-zinc-700 mb-6 lg:mb-12 leading-relaxed'>
            When we’re not having fun building vehicles, we’re having fun in our communities, at company gatherings, and just hanging out.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className='text-white bg-[#262626] py-16 sm:py-20 lg:py-28 text-center px-4 sm:px-6 lg:px-32'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-8'>
            OUR MISSION
          </h2>
          <p className='text-base sm:text-lg lg:text-xl font-semibold leading-relaxed mb-6 sm:mb-8 lg:mb-8'>
            To make affordable vehicles that are also functional, customizable, and designed to fall in love with. If that sounds good to you, take a look at our open jobs. We’d love to hear from you.
          </p>
          <a
            href='https://job-boards.greenhouse.io/slate'
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block py-3 px-6 sm:px-8 border border-orange-700 font-extrabold rounded-lg hover:bg-neutral-600 transition-all text-base sm:text-lg'
          >
            BROWSE JOBS
          </a>
        </div>
      </div>
    </>
  );
};

export default WorkSlateHero;
