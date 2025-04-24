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

      setNavbarVisible(scrollY > 70);

      if (scrollY < 70) {
        setActiveSection("");
        return;
      }

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 18;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const menuItemClass = (id) =>
    `cursor-pointer transition duration-150 ${
      activeSection === id ? "text-[#13B0F5]" : "hover:text-[#13B0F5]"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900/70 backdrop-blur-lg bg-opacity-60 text-white font-poppins">
      {navbarVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: navbarVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full min-w-[320px] max-w-screen-md mx-auto py-3 sm:py-4 flex items-center justify-between"
        >
          {/* Left: Menu */}
          <div className="flex-1 flex justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
            <span
              onClick={() => scrollToSection("tech")}
              className={menuItemClass("tech")}
            >
              Tech Stack
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className={menuItemClass("about")}
            >
              About
            </span>
            <span
              onClick={() => scrollToSection("projects")}
              className={menuItemClass("projects")}
            >
              Projects
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className={menuItemClass("contact")}
            >
              Contact
            </span>
          </div>

          {/* Right: Social Icons (hidden on small screens) */}
          <div className="hidden sm:flex gap-4 text-xl">
            <a
              href="https://x.com/aprimre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="hover:text-[#13B0F5] transition duration-150" />
            </a>
            <a
              href="https://github.com/aprimr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:text-[#13B0F5] transition duration-150" />
            </a>
            <a
              href="https://www.linkedin.com/in/aprimregmi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-[#13B0F5] transition duration-150" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
