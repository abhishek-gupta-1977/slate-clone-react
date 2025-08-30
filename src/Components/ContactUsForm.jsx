import React, { useState } from 'react';

const ContactUsForm = () => {
  const [isFleet, setIsFleet] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email.trim()) newErrors.email = "Enter your Email address";
    if (!firstName.trim()) newErrors.firstName = "Enter your First Name";
    if (!lastName.trim()) newErrors.lastName = "Enter your Last Name";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="bg-[#262626] rounded-xl w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="py-10 px-6 sm:py-12 sm:px-10 md:py-14 md:px-14 grid gap-y-6 sm:gap-y-8">
        
        <div>
          <span className="text-2xl sm:text-3xl font-extrabold text-white">EMAIL</span>
        </div>

        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium text-white text-sm sm:text-base">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-400 p-2 sm:p-3 rounded text-black"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium text-white text-sm sm:text-base">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-400 p-2 sm:p-3 rounded text-black"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-white text-sm sm:text-base">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 p-2 sm:p-3 rounded text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-white text-sm sm:text-base">Message</label>
          <textarea
            className="w-full border border-gray-400 p-2 sm:p-3 rounded h-24 sm:h-28 text-black"
          />
        </div>

        {/* Fleet Checkbox */}
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={isFleet}
            onChange={(e) => setIsFleet(e.target.checked)}
          />
          <span className="text-white">I’m interested in business or fleet vehicles</span>
        </div>

        {/* Company Name (conditional) */}
        {isFleet && (
          <div>
            <label className="block mb-1 font-medium text-white text-sm sm:text-base">Company name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
              className="w-full border border-gray-400 p-2 sm:p-3 rounded text-black"
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button className="text-white font-bold text-base sm:text-lg border-2 border-orange-800 w-full py-3 sm:py-4 rounded-md hover:bg-neutral-600 transition-all">
            SEND AN EMAIL
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactUsForm;
