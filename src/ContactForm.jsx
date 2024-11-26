import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 md:px-0">
      <div className="w-full max-w-4xl md:flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left section - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-16 bg-gray-500 mx-auto mb-8"></div>

          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 gray:ring-green-500"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>

        {/* Right section - Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">CONTACT US</h3>
          <h4 className="text-lg md:text-xl font-light text-blue-900 mb-8">LET'S TALK!</h4>

          <p className="text-gray-600 mb-4">
            Contact us now to discover how MOULD TECK can enhance your manufacturing operations and drive success.
          </p>

          <p className="text-gray-800 font-semibold mb-2">mouldteck15@gmail.com</p>
          <p className="text-gray-800 font-semibold mb-2">+91 7021828751 / 8291450822</p>
          <p className="text-gray-600">
          Near Orchid Tower, Ground Floor, Room No.04, B-wing, Zaitun Baug, Talavpali Road, Kausa, Mumbra, Kalyan, Thane, Maharashtra, 400612.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;