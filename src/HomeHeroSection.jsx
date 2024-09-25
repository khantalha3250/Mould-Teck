import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomeHeroSection = () => {
  const handleBookNowClick = () => {
    console.log("Book Now clicked");
    // You can add additional logic here, if needed
  };

  const handleViewServicesClick = () => {
    console.log("View Services clicked");
    // You can add additional logic here, if needed
  };

  return (
    <section className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-white text-xl font-light">Leading Plastic Injection Company</h2>
      <h1 className="text-white text-5xl font-bold leading-tight mt-2">
        EMPOWERING GLOBAL <br /> MANUFACTURING SUCCESS
      </h1>
      <p className="text-white text-lg mt-4">
        Welcome to MOULD TECK – your trusted partner for exceptional
        manufacturing solutions with cutting-edge technology and industry expertise.
      </p>
      <div className="mt-8 space-x-4">
        <Link to="/contact" onClick={handleBookNowClick}>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600">
            Book Now
          </button>
        </Link>
        <Link to="/services" onClick={handleViewServicesClick}>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-black">
            View Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHeroSection;
