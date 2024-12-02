import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // For success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS Service ID, Template ID, and Public Key
    emailjs
      .send(
        "service_n5toxnk", // Replace with your EmailJS Service ID
        "template_xe9a1ps", // Replace with your EmailJS Template ID
        formData, // Form data
        "USsp9khR8sfDKBgYf" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Form submitted successfully!");
          setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setFormStatus("Failed to send the form. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 md:px-0">
      <div className="w-full max-w-4xl md:flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left section - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-16 bg-gray-500 mx-auto mb-8"></div>

          {formStatus && (
            <p className={`text-center mb-4 ${formStatus.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {formStatus}
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
            Near Orchid Tower, Ground Floor, Room No.04, B-wing, Zaitun Baug, Talavpali Road, Kausa, Mumbra, Kalyan, Thane,
            Maharashtra, 400612.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
