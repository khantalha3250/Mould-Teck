import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  backgroundImage,
  primaryButtonLink,
  secondaryButtonLink,
  titleFontSize,  // New prop to control title font size
}) => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '60vh' }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content over the image */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1
          className={`${
            titleFontSize || 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
          } font-bold mb-4`} // Use the passed font size or default size
        >
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
          {subtitle}
        </p>

        {/* Conditionally render the buttons if text props are provided */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            {primaryButtonText && (
              <Link to={primaryButtonLink || '/contact'} onClick={onPrimaryButtonClick}>
                <button className="bg-gray-400 text-black px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white transition duration-300">
                  {primaryButtonText}
                </button>
              </Link>
            )}
            {secondaryButtonText && (
              <Link to={secondaryButtonLink || '/services'} onClick={onSecondaryButtonClick}>
                <button className="border border-white text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-400 hover:text-black transition duration-300">
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