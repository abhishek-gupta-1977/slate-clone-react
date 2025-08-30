import React, { useState } from 'react';
import { mailCTA } from '../Constants';

const Mail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email Submitted: " + email);
  };

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-[#a6a6a6]">
      <div className="max-w-6xl mx-auto bg-[#262626] px-6 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16 rounded-2xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 text-white" id="keep-in-touch">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h5 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6">
              {mailCTA.title}
            </h5>
            <p className="text-[#a6a6a6] text-base sm:text-lg leading-relaxed">
              {mailCTA.description}
            </p>
          </div>

          {/* Right Section */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2"
          >
            <label 
              htmlFor="email" 
              className="block text-xs sm:text-sm mb-2 text-[#9DEAFB]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 sm:p-4 text-black mb-4 rounded-sm outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full border border-orange-600 text-white font-extrabold py-3 sm:py-4 rounded-sm hover:bg-orange-600 hover:text-black transition-all duration-200"
            >
              SIGN UP NOW
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Mail;
