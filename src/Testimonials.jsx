import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 mt-[15vh] mb-0">
        <h2 className="text-center text-gray-700 text-sm uppercase tracking-wide">Client Testimonials</h2>
        <h1 className="text-center text-4xl font-bold my-4">WHAT OUR CLIENTS SAY</h1>
        <p className="text-center text-gray-500 text-lg">
          Read testimonials from our satisfied partners who have experienced the exceptional service and quality
          of MOULD TECK.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="text-center">
            <div className="flex justify-center">
              <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-lg mt-4">
              MOULD TECK’s precision and attention to detail significantly improved our product manufacturing process.
              Highly recommended.
            </p>
            <div className="flex justify-center items-center mt-6">
              <img
                className="w-12 h-12 rounded-full"
                src="./images/person2.jpeg"
                alt="Jennifer"
              />
              <div className="ml-4">
                <p className="font-semibold">JENNIFER</p>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center">
            <div className="flex justify-center">
              <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-lg mt-4">
              Exceptional service, quality products, and reliable partnership. MOULD TECK exceeded our expectations in
              every aspect.
            </p>
            <div className="flex justify-center items-center mt-6">
              <img
                className="w-12 h-12 rounded-full"
                src="./images/person3.jpeg"
                alt="David Smith"
              />
              <div className="ml-4">
                <p className="font-semibold">DAVID SMITH</p>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>
          </div>
        </div>

        {/* White Space Below Testimonials */}
        <div className="mt-10 bg-white h-20"></div> {/* You can adjust the height as needed */}
      </div>
    </div>
  );
};

export default Testimonials;
