import React from 'react';
import { ArrowRight } from 'lucide-react';

const SigninPage = () => {
  return (
    <div className="mt-20 bg-[#cfcfcf] w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="bg-[#262626] text-white w-full max-w-md sm:max-w-lg lg:max-w-2xl rounded-xl p-6 sm:p-10 lg:p-14">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-6 sm:mb-8 lg:mb-10 text-center lg:text-start">
          SIGN IN
        </h2>
        <p className="mb-8 sm:mb-10 text-base sm:text-lg text-center lg:text-start">
          Are you new here?{' '}
          <a className="underline" href="#">
            Create an account.
          </a>
        </p>

        <label className="text-sm sm:text-base mb-2 block">
          If you do have an account, enter your email or phone number
        </label>
        <input
          className="my-4 sm:my-6 w-full py-3 px-4 sm:px-5 rounded-md text-black focus:outline-none"
          type="text"
        />

        <button className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4 font-extrabold border border-orange-600 rounded-md hover:bg-[#535353] transition-all text-sm sm:text-base">
          SEND CODE
          <ArrowRight className="text-orange-500 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SigninPage;
