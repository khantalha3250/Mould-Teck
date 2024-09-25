import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-4/5 md:flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left section - Form */}
        <div className="w-full md:w-1/2 p-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">GET IN TOUCH</h2>
          <div className="h-1 w-16 bg-green-500 mx-auto mb-8"></div>

          <form className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
                required
              ></textarea>
             
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>

        {/* Right section - Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">CONTACT US</h3>
          <h4 className="text-xl font-light text-blue-900 mb-8">LET'S TALK!</h4>

          <p className="text-gray-600 mb-4">
            Contact us now to discover how MOULD TECK can enhance your manufacturing operations and drive success.
          </p>

          <p className="text-gray-800 font-semibold mb-2">info@k-tooling.com</p>
          <p className="text-gray-800 font-semibold mb-2">+91 70126 41436</p>
          <p className="text-gray-600">
            D31, Neo Logistic Park, Opposite to Lodha Industrial Park, Mumbai, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
