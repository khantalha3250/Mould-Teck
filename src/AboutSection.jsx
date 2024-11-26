import React from "react";
import { Link } from "react-router-dom";

const AboutSection = ({
  heading,
  subheading,
  description1,
  description2,
  buttonText,
  onButtonClick,
  image1,
  image2,
}) => {
  return (
    <section className="relative bg-light-gray flex items-center py-16 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 px-4 sm:px-8">
          {subheading && (
            <h3 className="text- text-base sm:text-lg font-semibold animate-fade-in-up">
              {subheading}
            </h3>
          )}
          {heading && (
            <h2 className="text-deep-blue text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 animate-fade-in-up">
              {heading}
            </h2>
          )}
          {description1 && (
            <p className="text-dark-gray mt-4 text-sm sm:text-base lg:text-lg animate-fade-in-up">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-dark-gray mt-4 text-sm sm:text-base lg:text-lg animate-fade-in-up">
              {description2}
            </p>
          )}

          {/* Button */}
          {buttonText && (
            <Link to="/about">
              <button
                className="bg-bright-yellow text-dark-gray px-6 py-3 mt-6 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-300"
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            </Link>
          )}
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center relative">
              <img
                src={image1}
                alt="Manufacturing Tools"
                className="w-[220px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-up"
              />
            </div>
            <div className="flex justify-center relative top-4 sm:top-8">
              <img
                src={image2}
                alt="Plastic Injection"
                className="w-[220px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-up delay-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
