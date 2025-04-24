import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <div className="text-sm sm:text-xl font-semibold">Aprim Regmi</div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Aprim Regmi. All rights reserved.
          </div>

          {/* Email */}
          <div>
            <a
              href="mailto:aprim.dev@gmail.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#50c4f6] to-[#00679f] hover:text-transparent text-md"
            >
              aprim.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-2 text-center">
          <div className="text-md sm:text-lg font-semibold">Aprim Regmi</div>

          <a
            href="mailto:aprim.dev@gmail.com"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00679f] via-[#50c4f6] to-[#00679f] hover:text-transparent text-xs sm:text-sm"
          >
            aprim.dev@gmail.com
          </a>

          <div className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Aprim Regmi. All rights reserved.
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
