import React from 'react';

const OfficeCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg w-full">
        {/* Left section with the office details */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center md:text-left">
            OUR INDIA'S OFFICE
          </h2>

          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="text-green-500 text-2xl mr-2">&#x1F4CD;</span> {/* Location icon */}
            <span className="font-semibold text-blue-900">INDIA</span>
          </div>

          <p className="text-gray-600 mb-8 text-center md:text-left">
            Near Orchid Tower, Ground Floor, Room No.04, B-wing, Zaitun Baug, Talavpali Road, Kausa, Mumbra, Kalyan, Thane, Maharashtra, 400612.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out inline-block w-max"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right section with the image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
          <img
            src="./images/office.jpg" /* Replace with your image path */
            alt="Office Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
