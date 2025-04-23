// SkillsMarquee.js

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"; // Importing icons from react-icons

// Array of skills with names and corresponding icons
export const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-4xl text-yellow-500" />,
  },
  { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-4xl text-blue-600" /> },
];

// SkillsMarquee Component
const SkillsMarquee = () => {
  return (
    <motion.div
      className="flex overflow-x-auto space-x-10 py-4 px-6"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-xl mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2">{skill.icon}</div>
          <span className="text-white text-lg font-semibold">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsMarquee;
