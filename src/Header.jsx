import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-40 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-black">
            <img
              src="/images/logo2.png"
              alt="MOULD TECK Logo"
              className="w-20 h-auto"
            />
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden"> {/* Show only on mobile (smaller than 'md') */}
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links (visible on larger screens) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-yellow-500">Home</Link>
            <Link to="/about" className="text-black hover:text-yellow-500">About</Link>
            <Link to="/services" className="text-black hover:text-yellow-500">Services</Link>
            <Link to="/contact" className="text-black hover:text-yellow-500">Contact</Link>
            <Link to="/contact">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Book Now</button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (visible when hamburger is clicked) */}
        {isOpen && (
          <div className="md:hidden bg-white bg-opacity-90 z-10">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <Link to="/" className="text-black hover:text-yellow-500" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-black hover:text-yellow-500" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-black hover:text-yellow-500" onClick={toggleMenu}>Services</Link>
              <Link to="/contact" className="text-black hover:text-yellow-500" onClick={toggleMenu}>Contact</Link>
              <Link to="/contact" onClick={toggleMenu}>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Book Now</button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;