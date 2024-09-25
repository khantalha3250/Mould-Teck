import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  backgroundImage,
  primaryButtonLink,  // New prop for primary button link
  secondaryButtonLink // New prop for secondary button link
}) => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '70vh' }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      {/* Content over the image */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        
        {/* Conditionally render the buttons if text props are provided */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex justify-center space-x-4">
            {primaryButtonText && (
              <Link to={primaryButtonLink || '/contact'} onClick={onPrimaryButtonClick}>
                <button
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  {primaryButtonText}
                </button>
              </Link>
            )}
            {secondaryButtonText && (
              <Link to={secondaryButtonLink || '/services'} onClick={onSecondaryButtonClick}>
                <button
                  className="border border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
                >
                  {secondaryButtonText}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
