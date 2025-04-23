import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to the scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-screen-md mx-auto w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Name */}
          <div className="text-sm sm:text-xl font-semibold">Aprim Regmi</div>

          {/* Contact Info */}
          <div className="flex gap-8">
            <a
              href="tel:9864731000"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00679f] to-[#50c4f6] hover:text-transparent text-sm sm:text-base"
            >
              +977 9864731000
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#50c4f6] to-[#00679f] hover:text-transparent text-sm sm:text-base"
            >
              your.email@example.com
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

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <div className="text-md sm:text-lg font-semibold">Aprim Regmi</div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <span
              href="tel:9864731000"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00679f] via-[#50c4f6] to-[#00679f] hover:text-transparent text-xs sm:text-sm"
            >
              +977 9864731000
            </span>
            <span
              href="mailto:your.email@example.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#00679f] via-[#50c4f6] to-[#00679f] hover:text-transparent text-xs sm:text-sm"
            >
              your.email@example.com
            </span>
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

      {/* Go to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800/70 backdrop-blur-lg bg-opacity-60 shadow-md text-white p-2 rounded-md transition-transform duration-150 hover:bg-gray-950/70"
          aria-label="Go to top"
        >
          <FaAngleUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
