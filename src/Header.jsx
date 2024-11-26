import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false); // Hide header on scroll down
      } else {
        setIsHeaderVisible(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white bg-opacity-20 shadow-lg py-4 px-6 lg:px-10 fixed top-0 w-full z-50  transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
  <div className="relative">
    <img
      src="/images/logo2.png"
      alt="MOULD TECK Logo"
      className="w-[50px] h-auto object-contain"
    />
  </div>
  <div className="flex flex-col">
    <h1 className="text-l sm:text-xl lg:text-2xl font-extrabold text-black">
      Mould-Teck
    </h1>
    <p className="text-tiny sm:text-sm lg:text-base text-black font-light">
  Injection Mould Manufacturer & CNC Job Work
</p>

  </div>
</div>


        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800">
          <Link to="/">
            <span className="hover:text-black text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Home
            </span>
          </Link>
          <Link to="/about">
            <span className="hover:text-black text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              About
            </span>
          </Link>
          <Link to="/services">
            <span className="hover:text-black text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Services
            </span>
          </Link>
          <Link to="/contact">
            <span className="hover:text-black text-sm sm:text-base lg:text-lg font-bold transition duration-300 ease-in-out">
              Contact
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white bg-opacity-80 p-4 shadow-md transition-transform duration-300 ease-in-out">
          <Link to="/" onClick={toggleMenu}>
            <span className="text-gray-800 hover:text-black text-base font-bold transition duration-300">
              Home
            </span>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <span className="text-gray-800 hover:text-black text-base font-bold transition duration-300">
              About
            </span>
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            <span className="text-gray-800 hover:text-black text-base font-bold transition duration-300">
              Services
            </span>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <span className="text-gray-800 hover:text-black text-base font-bold transition duration-300">
              Contact
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
