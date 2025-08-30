import { useState } from 'react';
import { accordionData } from '../Constants';
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <>
      {/* Header */}
      <div className="mt-20">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold pt-20 sm:pt-32 lg:pt-40 px-4 sm:px-6 lg:px-40 pb-10 sm:pb-16 lg:pb-20 bg-[#262626]">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h1>
      </div>

      {/* Accordion Section */}
      <div className="px-4 sm:px-6 lg:px-72 py-10 sm:py-14 lg:py-16 bg-white text-black">
        {accordionData.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-10 lg:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-2xl text-zinc-600 font-semibold mb-4 sm:mb-6 lg:mb-6">
              {section.category}
            </h2>

            <div>
              {section.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItem === key;
                return (
                  <div key={key} className="border-b border-gray-300">
                    {/* Accordion button */}
                    <button
                      onClick={() => toggleItem(categoryIndex, itemIndex)}
                      className="w-full flex justify-between items-center py-3 sm:py-4 text-left"
                    >
                      <span className="text-orange-500 text-xl sm:text-2xl font-bold mr-3 sm:mr-4">
                        {isOpen ? "–" : "+"}
                      </span>
                      <span className="flex-1 text-zinc-500 text-sm sm:text-base lg:text-lg font-medium">
                        {item.question}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-3 sm:pb-5 text-gray-600 text-sm sm:text-base lg:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
