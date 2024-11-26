import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);  // Ref for the menu
  const buttonRef = useRef(null);  // Ref for the hamburger button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) && // Check if the click is outside the menu
        !buttonRef.current.contains(event.target) // Check if the click is outside the button
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-40 z-50">
  <div className="container mx-auto px-6 py-2 flex justify-between items-center">
    {/* Logo */}
    <div className="text-3xl font-bold text-black">
      <img
        src="/images/logoWithNamer.png"
        alt="MOULD TECK Logo"
        className="w-[200px] h-[72px] object-contain" // Adjust size and ensure the image fits properly
      />
    </div>

    {/* Hamburger Icon - visible only on smaller screens */}
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-black focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    {/* Main Menu - visible only on larger screens */}
    <div className="hidden lg:flex space-x-6">
      <Link to="/" className="text-black hover:text-gray-500">
        Home
      </Link>
      <Link to="/about" className="text-black hover:text-gray-500">
        About
      </Link>
      <Link to="/services" className="text-black hover:text-gray-500">
        Services
      </Link>
      <Link to="/contact" className="text-black hover:text-gray-500">
        Contact
      </Link>
      <Link to="/contact">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          Book Now
        </button>
      </Link>
    </div>
  </div>

  {/* Mobile Menu (visible when hamburger is clicked) */}
  {isOpen && (
    <div ref={menuRef} className="lg:hidden bg-white bg-opacity-90 z-50">
      <div className="flex flex-col space-y-4 px-6 py-4">
        <Link to="/" className="text-black hover:text-gray-500" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-gray-500" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/services" className="text-black hover:text-gray-500" onClick={toggleMenu}>
          Services
        </Link>
        <Link to="/contact" className="text-black hover:text-gray-500" onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          <button className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )}
</header>

    </>
  );
};

export default Header;
