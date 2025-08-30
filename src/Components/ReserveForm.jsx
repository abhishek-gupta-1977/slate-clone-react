// src/Components/ReserveForm.jsx
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { MoveRight } from "lucide-react";
const ReserveForm = () => {

  const [showTerms, setShowTerms] =  useState(false);
  const [isFleet, setisFleet] = useState(false);
  const [slates, setSlates] = useState("1");
  const [companyName, setCompanyName] = useState("");
  const [fleetSize, setFleetSize] = useState("Less than 100 vehicles");

  const [email,setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [errors,setErrors] = useState({});

  const handleSubmit  = (e) => {
    e.preventDefault();
    let newErrors = {};

    if(!email.trim()) {
      newErrors.email = "Enter your Email address";
    }
    if(!firstName.trim()) {
      newErrors.firstName = "Enter your First Name";
    }
    if(!lastName.trim()) {
      newErrors.lastName = "Enter your Last Name";
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      alert("Form submitted successfully");
    }
  }
  return (
    <div className="bg-gray-200 min-h-screen  py-10 ">
      <form className="space-y-6 w-1/3 block mx-auto" onSubmit={handleSubmit}>
        <div>
          <p>
            I confirm that by placing this Reservation I have read and agree to the <a className="underline" href="#">Reservation Agreement</a>, <a className="underline" href="#">Website Terms and Conditions</a>, and <a className="underline" href="#"> Privacy Policy</a>.
          </p>
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            className="w-full border border-gray-400 p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone <span className="text-zinc-500">(optional)</span></label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>

        {/* Newsletter & Terms */}
        <div className="space-y-2">
          <p className="text-sm">
            Keep me updated on the latest news, products, release dates, and
            more.
          </p>

          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>By email</span>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>By text</span>
          </div>

          <button
            type="button"
            onClick={() => setShowTerms(!showTerms)}
            className="text-orange-600 text-lg hover:underline"
          >
            {showTerms ? "- Hide text message terms":"+ View text message terms"}
          </button>

          {showTerms && (
            <div className="">
              <p className="my-5 text-sm">
                When you select "by text," you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Slate Auto at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View <a className="underline" href="#">Terms</a> & <a className="underline" href="#">Privacy</a>.
              </p>
            </div>
          )}

          <div className="flex items-center gap-3">
            <input
             type="checkbox" 
             className="h-6 w-6"
             checked={isFleet}
             onChange={(e) => setisFleet(e.target.checked)}
             />
            <span>I’m reserving for a company fleet</span>
          </div>
        </div>

        {isFleet && (
           <div className="space-y-6">
      {/* Number of Slates */}
      <div>
        <label className="block mb-1 font-medium">
          Number of Slates to reserve
        </label>
        <select
          value={slates}
          onChange={(e) => setSlates(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>
      </div>

      {/* Company Name */}
      <div>
        <label className="block mb-1 font-medium">Company name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          className="w-full border border-gray-400 p-2 rounded"
        />
      </div>

      {/* Current Fleet Size */}
      <div>
        <label className="block mb-1 font-medium">Current fleet size</label>
        <select
          value={fleetSize}
          onChange={(e) => setFleetSize(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded"
        >
          <option value="Less than 100 vehicles">Less than 100 vehicles</option>
          <option value="100-500 vehicles">100 – 500 vehicles</option>
          <option value="500+ vehicles">500+ vehicles</option>
        </select>
      </div>
    </div>
        )}

        {/* Divider */}
        <hr className="border-gray-500" />

        {/* Total Section */}
        <h2 className="text-2xl font-bold">TOTAL $50</h2>

        {/* Card Payment Section */}
        <div className="bg-white shadow p-6 space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="material-icons"><FaRegCreditCard /></span> Cards
          </h3>
          <p className="text-sm">All fields are required unless marked otherwise.</p>

          <input
            type="text"
            placeholder="Card number"
           
            className="w-full border p-2 rounded"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
              type="text"
              placeholder="Expiry date"
              className="border p-2 rounded"
            />
            <span className="text-xs block text-zinc-400">Front of card in MM/YY format</span>
            </div>
            <div>
              <input
              type="text"
              placeholder="Security code"
              className="border p-2 rounded"
            />
            <span className="text-xs block text-zinc-400">3 digits on back of card</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">Save for my next payment</span>
          </div>

          <button 
          type="submit"
          className="bg-black text-white w-full py-3 rounded flex justify-between items-center px-4 border-b-orange-500 border-2">
            <span>PAY $50.00</span> <span className="text-orange-500"><MoveRight/></span>
          </button>
        </div>

        {/* Alternative Payment Options */}
        <div className="space-y-2">
          <button className="bg-white border w-full py-3 rounded text-left px-4 flex items-center gap-5">
            <SiApplepay size={25}/>
             Apple Pay
          </button>
          <button className="bg-white border w-full py-3 rounded text-left px-4 flex items-center gap-5">
            <FaGooglePay size={25}/> Google Pay
          </button>
          <button className="bg-white border w-full py-3 rounded text-left px-4 flex items-center gap-5">
            <SiCashapp size={25}/> Cash App Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;
