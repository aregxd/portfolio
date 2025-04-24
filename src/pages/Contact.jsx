import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import DownloadBtn from "../components/DownloadBtn";

const socialLinks = [
  {
    icon: FaTwitter,
    url: "https://x.com/aprimre",
    label: "Twitter",
  },
  {
    icon: FaGithub,
    url: "https://github.com/aprimr",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/aprimregmi",
    label: "LinkedIn",
  },
  {
    icon: FaRedditAlien,
    url: "https://www.reddit.com/u/aregxd",
    label: "Reddit",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/_aprimr",
    label: "Instagram",
  },
];

const cardStyle =
  "bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-lg";

const Contact = () => {
  const MotionArrow = motion.create(FiArrowRight);

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white px-4 sm:px-6 py-8 sm:py-20"
    >
      <div className="max-w-screen-md mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent"
        >
          Let's work together!
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className={cardStyle}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#50c4f6]">
              Contact
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 mb-4">
              Whether you're interested in collaborating or just want to say hi,
              I'm always open to a conversation.
            </p>
            <div className="flex items-center gap-3 text-base sm:text-lg">
              <span className="break-all font-rubik flex items-center gap-3">
                aprim.dev@gmail.com
                <a href="mailto:aprim.dev@gmail.com">
                  <MotionArrow
                    title="Send an email"
                    initial={{ rotate: -25 }}
                    whileHover={{ scale: 1.5, rotate: -45 }}
                    transition={{ type: "spring" }}
                    className="text-xl text-neutral-50"
                  />
                </a>
              </span>
            </div>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className={cardStyle}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#50c4f6]">
              Resume
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 mb-4">
              Want to know more about my background and experience?
            </p>
            <DownloadBtn title="Download Resume" />
          </motion.div>

          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className={`${cardStyle} md:col-span-2`}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#50c4f6] text-center mb-2">
              Connect with Me
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 text-center mb-6">
              Feel free to follow or message me on any of the platforms below.
            </p>

            <div className="flex justify-center gap-6 sm:gap-10">
              {socialLinks.map(({ icon: Icon, url, label }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white text-2xl sm:text-3xl hover:text-[#50c4f6] transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
