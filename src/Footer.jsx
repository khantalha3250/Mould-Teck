import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto px-4 max-w-6xl"> {/* Set a max-width for wider appearance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Section: Social Links and Logo */}
          <div className="flex flex-col items-center md:items-start">
            {/* Social Icons */}
            {/* <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div> */}

            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img src="/images/logo.jpg" alt="MOULD TECK Logo" className="w-24 mb-2" />
              <p className="text-sm text-white text-center md:text-left">Injection Mould Manufacturer & CNC Job Work Services.</p>
            </div>
          </div>

          {/* Middle Section: Company Description */}
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-white text-sm max-w-md text-center md:text-left">
              MOULD TECK, a leading injection mold manufacturer dedicated to delivering exceptional quality and innovation. With a strong focus on design, development, and production, we create high-performance molds for various industries.

            </p>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="flex items-center text-white">
              <i className="fas fa-phone-alt mr-2"></i> +91 7021828751 / 8291450822
            </p>
            <p className="flex items-center text-white">
              <i className="fas fa-envelope mr-2"></i> mouldteck15@gmail.com
            </p>
            <p className="flex items-center text-white">
              <i className="fas fa-map-marker-alt mr-2"></i> Near Orchid Tower, Ground Floor, Room No.04, B-wing,
 Zaitun Baug, Talavpali Road, Kausa, Mumbra, Kalyan,
 Thane, Maharashtra, 400612.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">&copy; 2024 MOULD TECK. All Rights Reserved.</p>
          <a href="#" className="text-white text-sm hover:text-gray-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;