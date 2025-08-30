import { contactData } from "../Constants";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="mt-20 bg-[#262626]">
        <h5 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#cfcfcf] pt-20 sm:pt-28 lg:pt-44 px-6 sm:px-12 md:px-24 lg:px-44 pb-12 sm:pb-16 lg:pb-16">
          CONTACT US
        </h5>
      </div>

      {/* Main Content */}
      <div className="bg-[#cfcfcf] py-16 sm:py-20 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-72">
        {/* Pattern */}
        <div
          className="w-full max-w-[25vw] h-[10vh] bg-transparent grid place-items-center gap-1 p-2 mb-10"
          style={{
            gridTemplateColumns: "repeat(26, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {Array.from({ length: 78 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#a6a6a6]"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Side - Contact Methods */}
          <div className="lg:w-1/3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-800 mb-12">
              {contactData.heading}
            </h1>

            <div className="space-y-10 sm:space-y-12">
              {/* Chat Section */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
                  {contactData.chat.title}
                </h2>
                <p className="text-gray-800 font-bold">
                  {contactData.chat.availability}
                </p>
              </div>

              {/* Phone Section */}
              <div>
                <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
                  {contactData.phone.title}
                </h2>
                <p className="text-gray-800 mb-2 font-bold">
                  {contactData.phone.availability}
                </p>
                <p className="text-gray-800 font-semibold">
                  {contactData.phone.number}
                </p>
                <a
                  href={`tel:+1${contactData.phone.numericNumber.replace(/\D/g, "")}`}
                  className="text-gray-800 hover:underline"
                >
                  {contactData.phone.numericNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-2/3 w-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
