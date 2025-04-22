import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "tech", "projects", "contact"];
      const scrollY = window.scrollY;

      setNavbarVisible(scrollY > 100);

      if (scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 80;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItemClass = (id) =>
    `cursor-pointer transition duration-150 ${
      activeSection === id ? "text-[#13B0F5]" : "hover:text-[#13B0F5]"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/70 backdrop-blur-lg bg-opacity-60 text-white font-poppins">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: navbarVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full min-w-[320px] max-w-screen-xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between"
      >
        {/* Centered Menu */}
        <div className="flex-1 flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
          <a href="#about" className={menuItemClass("about")}>
            About
          </a>
          <a href="#tech" className={menuItemClass("tech")}>
            Tech Stack
          </a>
          <a href="#projects" className={menuItemClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={menuItemClass("contact")}>
            Contact
          </a>
        </div>

        {/* Social Icons - hidden on small screens */}
        <div className="hidden sm:flex gap-4 text-xl">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-gray-200 transition duration-150" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-200 transition duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-gray-200 transition duration-150" />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
