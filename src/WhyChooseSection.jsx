import React from 'react';

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
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Image Content */}
        {(image1 || image2) && (
          <div className="lg:w-1/2 mt-8 lg:mt-0 px-8">
            <div className={`grid grid-cols-${image1 && image2 ? '2' : '1'} gap-4`}>
              {image1 && (
                <div className="flex justify-center">
                  <img
                    src={image1}
                    alt="Manufacturing Machine"
                    className="w-[325px] h-[420px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
              {image2 && (
                <div className={`flex justify-center ${!image1 ? '' : 'relative top-10'}`}>
                  <img
                    src={image2}
                    alt="Manufacturing Tool"
                    className="w-[325px] h-[420px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className={`lg:w-${image1 || image2 ? '1/2' : 'full'} px-8`}>
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
          {description && (
            <p className="text-gray-600 mt-4">
              {description}
            </p>
          )}
          {listItems && (
            <ul className="text-gray-600 mt-4 space-y-2">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
      </div>
    </section>
  );
};

export default WhyChooseSection;
