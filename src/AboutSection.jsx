import React from 'react';

const AboutSection = ({
  heading,
  subheading,
  description1,
  description2,
  buttonText,
  onButtonClick,
  image1,
  image2
}) => {
  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 px-8">
          {subheading && (
            <h3 className="text-yellow-500 text-lg font-semibold">
              {subheading}
            </h3>
          )}
          {heading && (
            <h2 className="text-5xl font-bold mt-4">
              {heading}
            </h2>
          )}
          {description1 && (
            <p className="text-gray-600 mt-4">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-gray-600 mt-4">
              {description2}
            </p>
          )}

          {/* Conditionally render the button if buttonText is provided */}
          {buttonText && (
            <button
              className="bg-yellow-500 text-white px-6 py-3 mt-6 rounded-lg hover:bg-yellow-600"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center relative">
              <img
                src={image1}
                alt="Manufacturing Tools"
                className="w-[325px] h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center relative top-8"> {/* Adjust the top margin here */}
              <img
                src={image2}
                alt="Plastic Injection"
                className="w-[325px] h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
