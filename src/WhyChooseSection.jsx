import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const WhyChooseSection = ({
  heading,
  subheading,
  description,
  listItems,
  buttonText,
  onButtonClick,
  image1,
  image2
}) => {
  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Text Content */}
        <div className={`lg:w-${image1 || image2 ? '1/2' : 'full'} px-4 lg:px-8 mb-8 lg:mb-0 animate-fade-in`}>
          {subheading && (
            <h3 className="text-yellow-500 text-lg font-semibold">
              {subheading}
            </h3>
          )}
          {heading && (
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 mt-4">
              {description}
            </p>
          )}
          {listItems && (
            <ul className="text-gray-600 mt-4 space-y-2">
              {listItems.map((item, index) => (
                <li key={index} className="transition transform hover:scale-105">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Conditionally render the button if buttonText is provided */}
          {buttonText && (
           <Link to="/contact"> <button
              className="bg-yellow-500 text-white px-6 py-3 mt-6 rounded-lg hover:bg-yellow-600 transition"
              onClick={onButtonClick}
            >
              {buttonText}
            </button></Link>
          )}
        </div>

        {/* Image Content */}
        {(image1 || image2) && (
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className={`grid grid-cols-1 ${image1 && image2 ? 'lg:grid-cols-2' : ''} gap-4`}>
              {image1 && (
                <div className="flex justify-center">
                  <img
                    src={image1}
                    alt="Manufacturing Machine"
                    className="w-full h-auto max-w-[325px] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              {image2 && (
                <div className={`flex justify-center ${!image1 ? '' : 'lg:relative lg:top-10'}`}>
                  <img
                    src={image2}
                    alt="Manufacturing Tool"
                    className="w-full h-auto max-w-[325px] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseSection;
