import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";

const About = () => {
  const [workExperience, setWorkExperience] = useState([]);
  useEffect(() => {
    const fetchedData = [
      // {
      //   title: "Front-End Developer",
      //   company: "Company XYZ",
      //   duration: "Jan 2022 to Present",
      //   description:
      //     "Built responsive web interfaces with React, HTML, CSS, and JavaScript. Collaborated across teams to deliver polished digital experiences.",
      // },
      // {
      //   title: "Web Development Intern",
      //   company: "Company ABC",
      //   duration: "June 2021 to Dec 2021",
      //   description:
      //     "Supported development of internal tools and applications using React. Gained experience in modern development workflows and team collaboration.",
      // },
    ];
    setWorkExperience(fetchedData);
  }, []);

  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-4 sm:px-8 py-10 sm:py-16 space-y-8"
    >
      <div className="max-w-screen-md mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-neutral-300 text-base sm:text-lg md:text-xl"
        >
          I’m a passionate web developer based in Nepal with a keen interest in
          building dynamic, user-friendly, and responsive web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center gap-4"
        >
          <FaCloud className="text-3xl sm:text-4xl text-[#50c4f6]" />
          <h4 className="text-sm sm:text-lg md:text-xl text-neutral-300">
            Excited by the web — from responsive design to full-stack
            applications.
          </h4>
        </motion.div>

        {workExperience.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold text-[#50c4f6]"
            >
              Work Experience
            </motion.h3>

            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-2 hover:shadow-2xl transition-shadow duration-300"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {job.title}
                </h4>
                <p className="text-sm sm:text-base text-neutral-400">
                  {job.company} — {job.duration}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
