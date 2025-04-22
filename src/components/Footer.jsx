import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Desktop Layout - Single Row */}
        <div className="hidden md:flex justify-between items-center">
          {/* Name */}
          <div className="text-sm sm:text-xl font-semibold">Aprim Regmi</div>

          {/* Contact Info */}
          <div className="flex gap-8">
            <a
              href="mailto:your.email@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] hover:text-transparent text-sm sm:text-base"
            >
              your.email@example.com
            </a>
            <a
              href="tel:9864731000"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] hover:text-transparent text-sm sm:text-base"
            >
              +977 9864731000
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg sm:text-xl">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <div className="text-md sm:text-lg font-semibold">Aprim Regmi</div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <a
              href="mailto:your.email@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] hover:text-transparent text-xs sm:text-sm"
            >
              your.email@example.com
            </a>
            <a
              href="tel:9864731000"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] hover:text-transparent text-xs sm:text-sm"
            >
              +977 9864731000
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-lg sm:text-lg">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
