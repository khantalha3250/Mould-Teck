import React from "react";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  const handleBookNowClick = () => {
    console.log("Book Now clicked");
  };

  const handleViewServicesClick = () => {
    console.log("View Services clicked");
  };

  return (
    <section className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
      {/* Responsive Text Sizes */}
      <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-light">
        Innovative Plastic Moulding Company
      </h2>
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-2">
        SHAPING THE FUTURE OF <br /> GLOBAL MANUFACTURING
      </h1>
      <p className="text-white text-sm sm:text-base lg:text-lg mt-4 max-w-2xl">
        Welcome to MOULD TECK – your trusted partner for exceptional
        manufacturing solutions with cutting-edge technology and industry expertise.
      </p>
      <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/contact" onClick={handleBookNowClick}>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
            Book Now
          </button>
        </Link>
        <Link to="/services" onClick={handleViewServicesClick}>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out">
            View Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHeroSection;
