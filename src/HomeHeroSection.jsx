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
    <section
      className="flex flex-col items-center justify-center text-center px-4 sm:px-8 h-screen bg-white relative"
      style={{
        backgroundImage: `url('/images/plastic.jpg')`, // Adjusted the image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for subtle contrast */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium">
          Innovative Plastic Moulding Company
        </h2>
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2">
          SHAPING THE FUTURE OF <br /> GLOBAL MANUFACTURING
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl font-medium">
          Welcome to MOULD TECK – your trusted partner for exceptional
          manufacturing solutions with cutting-edge technology and industry expertise.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact" onClick={handleBookNowClick}>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              Book Now
            </button>
          </Link>
          <Link to="/services" onClick={handleViewServicesClick}>
            <button className="border border-gray-400 text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
              View Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
