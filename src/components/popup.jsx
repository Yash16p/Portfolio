import React, { useEffect } from "react";

const Popup = ({ title, image, details, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] border-2 border-gray-800 text-white p-8 rounded-xl w-[90%] max-w-4xl sm:w-[70%] md:w-[60%] lg:w-[50%] relative overflow-auto max-h-[60vh] sm:max-h-[90vh]">
        <button
          className="absolute top-2 right-2 sm:top-6 sm:right-6 text-xl sm:text-3xl text-white hover:text-blue-700 transition duration-200"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg sm:text-2xl mb-2 text-white">{title}</h2>
        <div className="flex mt-6 items-center space-x-6">
          {image && (
            <div className="w-1/4 sm:w-1/3 overflow-hidden shadow-lg">
              <img src={image} alt={title} className="object-cover" />
            </div>
          )}

          <div className="flex-1 text-xs sm:text-sm overflow-auto">
            <p className="text-gray-400 mb-4">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

