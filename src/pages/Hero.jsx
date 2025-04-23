import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const roles = [
  "Web Developer",
  "Backend Specialist",
  "UI Tinkerer",
  "Tech Explorer",
];
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ text }) => (
  <motion.div
    initial="initial"
    whileHover="hovered"
    className="relative inline-block overflow-hidden cursor-pointer"
    style={{ lineHeight: 1 }}
  >
    <div>
      {text.split("").map((char, i) => (
        <motion.span
          key={`top-${i}`}
          className="inline-block text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] text-transparent bg-clip-text"
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
    <div className="absolute inset-0">
      {text.split("").map((char, i) => (
        <motion.span
          key={`bottom-${i}`}
          className="inline-block text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#13B0F5] to-[#00c29b] text-transparent bg-clip-text"
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative w-full h-auto bg-gray-900 flex items-start justify-start px-4 sm:px-6 md:px-10 py-20">
      <motion.div
        className="z-10 text-left max-w-screen-md w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Poppins']">
          Hi <span className="inline-block">👋</span>,
        </h1>

        <h3 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase font-['Poppins']">
          <span className="text-white text-3xl sm:text-4xl lg:text-5xl mr-2">
            I'm{" "}
          </span>
          <span className="bg-gradient-to-r from-[#13B0F5] to-[#0051a7] text-transparent bg-clip-text text-4xl sm:text-5xl lg:text-6xl">
            Aprim Regmi
          </span>
        </h3>

        {/* Web Developer text with flip animation */}
        <div className="mt-4">
          <FlipText text="Web Developer" />
        </div>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">
          Full-stack web developer, continuously exploring new technologies to
          create scalable and efficient solutions. I craft impactful web
          experiences and build tools that drive innovation.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
