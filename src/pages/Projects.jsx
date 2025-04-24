import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

import Text from "../assets/imgs/Text.png";
import Shortly from "../assets/imgs/Shortly.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white px-4 sm:px-8 md:px-12 py-8 sm:py-12 space-y-8"
    >
      <div className="max-w-screen-md mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="space-y-8">
          <ProjectLink
            title="Text."
            description="A public chat room."
            imgSrc={Text}
            href="https://text5.netlify.app"
            repo="https://github.com/aprimr/text"
          />
          <ProjectLink
            title="Chattly"
            description="A bold step in tech innovation"
            imgSrc={Shortly}
            href="https://www.shortly5.netlify.app"
            repo="https://github.com/aprimr/Shortly"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectLink = ({ title, imgSrc, description, href, repo }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const MotionArrow = motion.create(FiArrowRight);
  const MotionCode = motion.create(FaCode);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onClick={() => window.open(href, "_blank")}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 cursor-pointer hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{ initial: { x: 0 }, whileHover: { x: -16 } }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-3xl font-bold text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl"
        >
          {title.split("").map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
              transition={{ type: "spring" }}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-sm text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
          {description}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-28 w-34 rounded-lg object-cover md:h-40 md:w-56"
        alt={`Thumbnail for ${title}`}
      />

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="hidden sm:flex relative z-10 p-4 items-center gap-4"
      >
        <a
          href={repo}
          target="_blank"
          title="View Code"
          rel="noopener noreferrer"
          className="text-4xl text-neutral-50"
        >
          <MotionCode
            whileHover={{ scale: 1.1, rotate: -10 }}
            transition={{ type: "spring" }}
          />
        </a>
        <MotionArrow
          title="Live Demo"
          whileHover={{ scale: 1.5, rotate: -45 }}
          transition={{ type: "spring" }}
          className="text-4xl text-neutral-50"
        />
      </motion.div>

      {/* View Code btn for mobile */}
      <motion.div
        initial={{ rotate: -10 }}
        className="flex sm:hidden relative z-10 p-4 items-center gap-4"
      >
        <a href={repo} target="_blank" rel="noopener noreferrer"></a>
        <FaCode className="text-xl text-neutral-50" />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
