import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio, SiExpress } from "react-icons/si";

const MarqueeItem = ({ items, from, to }) => {
  return (
    <motion.div className="group flex  overflow-hidden">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: to }}
          initial={{ x: from }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-x-6 pl-6 group-hover:pause-animation"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-gray-800 p-3 sm:p-4 rounded-lg text-white w-40 sm:w-48 h-14 cursor-pointer transition-all"
            >
              <div className="flex flex-row items-center space-x-2 sm:space-x-3">
                <div className={`text-xl sm:text-2xl ${item.iconColor}`}>
                  {item.icon}
                </div>
                <div className="flex flex-col items-start space-y-0.5 sm:space-y-1">
                  <div className="text-xs sm:text-sm font-semibold">
                    {item.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400">
                    {item.subtext}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

const TechStackMarquee = () => {
  const firstRowItems = [
    {
      icon: <FaReact />,
      name: "React",
      subtext: "JS Library",
      iconColor: "text-[#61DAFB]",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
      subtext: "Web Language",
      iconColor: "text-[#F7DF1E]",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      subtext: "JS Runtime",
      iconColor: "text-[#339933]",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
      subtext: "Utility-First CSS",
      iconColor: "text-[#06B6D4]",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      subtext: "NoSQL Database",
      iconColor: "text-[#47A248]",
    },
  ];

  const secondRowItems = [
    {
      icon: <FaGitAlt />,
      name: "Git",
      subtext: "Version Control",
      iconColor: "text-[#F05032]",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      subtext: "Code Repository",
      iconColor: "text-[#181717]",
    },

    {
      icon: <SiExpress />,
      name: "Express",
      subtext: "Backend Framework",
      iconColor: "text-[#ffffff]",
    },
    {
      icon: <SiAppwrite />,
      name: "Appwrite",
      subtext: "Backend Service",
      iconColor: "text-[#F02E65]",
    },
    // {
    //   icon: <FaReact />,
    //   name: "Next.js",
    //   subtext: "React Framework",
    //   iconColor: "text-black",
    // },

    {
      icon: <SiSocketdotio />,
      name: "Socket.IO",
      subtext: "WebSocket Library",
      iconColor: "text-[#ffffff]",
    },
  ];

  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto py-8 max-w-screen-md"
    >
      <div className="mb-6">
        <MarqueeItem items={firstRowItems} from={0} to="-100%" />
      </div>
      <div className="mt-6">
        <MarqueeItem items={secondRowItems} from="-100%" to={0} />
      </div>
    </motion.section>
  );
};

export default TechStackMarquee;
