import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              to="https://lnk.ink/a28Vq"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#2a9776] hover:bg-[#2a9776] hover:text-white transition"
            >
              <FaLinkedin className="size-9" />
            </Link>
            <Link
              to="https://github.com/Bhavya-2704"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#2a9776] hover:bg-[#2a9776] hover:text-white transition"
            >
              <FaGithub  className="size-9"/>
            </Link>
            <Link
              to="/whatsapp"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#2a9776] hover:bg-[#2a9776] hover:text-white transition"
            >
              <FaWhatsapp className="size-9" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Bhavya Gupta. All rights reserved.
          </p>
        </div>

        {/* Optional Section (e.g., Contact Information) */}
        <div className="mt-6 text-center">
          <p className="text-base text-gray-400">
            Feel free to reach out for collaboration or inquiries!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
