import React from "react";

const experience = [
  {
    role: "Junior Web Developer",
    type: "Full Time",
    company: "Dr. Rajkumar’s Learning App",
    location: "Bengaluru",
    period: "Sep 2021 - Dec 2021",
  },
  {
    role: "Web Development Intern",
    type: "Internship",
    company: "IonPixelz Web Solutions",
    location: "Bengaluru",
    period: "Sep 2021 - Dec 2021",
  },
  {
    role: "SEO / SEM Specialist",
    type: "Internship",
    company: "HAAPS",
    location: "Bengaluru",
    period: "Sep 2021 - Dec 2021",
  },
];

const education = [
  {
    degree: "Bachelor in Electronics & Communication",
    type: "Full Time",
    school: "Bangalore Institute of Technology",
    location: "Bengaluru",
    period: "Aug 2015 - Dec 2020",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white px-6 py-16">
      <div className="max-w-screen-md mx-auto space-y-12">
        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Full-stack web developer, continuously exploring new technologies to
            create scalable and efficient solutions. I craft impactful web
            experiences and build tools that drive innovation.
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-sm text-gray-400">{job.type}</p>
                <p className="mt-1 text-gray-300">
                  {job.company}, {job.location}
                </p>
                <p className="text-sm text-gray-500">{job.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-[#50c4f6] to-[#00ad8b] bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.type}</p>
                <p className="mt-1 text-gray-300">
                  {edu.school}, {edu.location}
                </p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
