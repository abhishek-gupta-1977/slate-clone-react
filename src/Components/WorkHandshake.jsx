import React from 'react';
import Handshake from '../assets/work-at-slate-handshake.webp';
import oneteam from '../assets/work-at-slate-life-one-team.webp';
import { MoveRight } from 'lucide-react';

const WorkHandshake = () => {
  return (
    <div className="bg-white">
      {/* Handshake Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 sm:px-6 lg:px-24 py-10 lg:py-24">
          <img src={Handshake} alt="Handshake" className="w-full h-auto object-contain max-h-[60vh]" />
        </div>
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-24 py-10 lg:py-24 text-center lg:text-left">
          <h4 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10">
            INTERESTED IN INTERNSHIPS? HEAD OVER TO HANDSHAKE.
          </h4>
          <p className="text-base sm:text-lg text-zinc-500 mb-6 sm:mb-8 lg:mb-10">
            Follow Slate on the Handshake app for the latest and Slate-est on internship opportunities and more.
          </p>
          <a
            href='https://app.joinhandshake.com/login'
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center justify-center lg:justify-start gap-2 sm:gap-4 bg-[#262626] text-white font-extrabold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 border-2 border-orange-700 rounded-md hover:bg-neutral-800 transition-all'
          >
            FOLLOW US
            <MoveRight className='text-orange-600' />
          </a>
        </div>
      </div>

      {/* One Team Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-24 py-10 lg:py-24 text-center lg:text-left">
          <h4 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10">
            ONE TEAM
          </h4>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            We say this a lot. While it might sound corny to outsiders, it’s true. We work together, share ideas, collaborate on virtually everything we do. That said, we don’t always agree. In fact, we debate and challenge each other. A lot. But we always respect each other, trust each others’ expertise, and value each others’ perspectives. And at the end of the day – being a humble, hungry, team-first startup is one of our big advantages.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-24 py-10 lg:py-24">
          <img src={oneteam} alt="ONE TEAM" className="w-full h-auto object-contain max-h-[60vh]" />
        </div>
      </div>
    </div>
  );
};

export default WorkHandshake;
