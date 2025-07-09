import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#001f3f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-[#6cbda4]">Bhavya Gupta</Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8 text-base">
          <Link to="/" className="hover:text-[#6cbda4]">Home</Link>
          <Link to="/about" className="hover:text-[#6cbda4]">About</Link>
          <Link to="/tech-stack" className="hover:text-[#6cbda4]">Tech Stack</Link>
          <Link to="/projects" className="hover:text-[#6cbda4]">Projects</Link>
          <Link to="/contact" className="hover:text-[#6cbda4]">Contact</Link>
        

        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? (
              <span className="text-2xl"><X /></span>
            ) : (
              <span className="text-2xl"><Menu /></span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} text-white text-left ml-4`}
      >
        <Link to="/" onClick={closeMenu} className="block py-3 hover:text-[#6cbda4]">Home</Link>
        <Link to="/about" onClick={closeMenu} className="block py-3 hover:text-[#6cbda4]">About</Link>
        <Link to="/tech-stack" onClick={closeMenu} className="block py-3 hover:text-[#6cbda4]">Tech Stack</Link>
        <Link to="/projects" onClick={closeMenu} className="block py-3 hover:text-[#6cbda4]">Projects</Link>
        <Link to="/contact" onClick={closeMenu} className="block py-3 hover:text-[#6cbda4]">Contact</Link>
  
      </div>
    </nav>
  );
};

export default Navbar;
