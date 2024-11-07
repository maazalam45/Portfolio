import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const About = ({ isDarkMode }) => {
  const education = [
    {
      name: "Sindh Madressatul Islam University (SMIU)",
      type: "University",
      icon: FaGraduationCap,
    },
    {
      name: "Shipowners' Govt. College",
      type: "College",
      icon: FaGraduationCap,
    },
    { name: "St. Jude's High School", type: "School", icon: FaGraduationCap },
  ];

  const skills = [
    { name: "Web Development", icon: FaCode, color: "text-blue-500" },
    { name: "Mobile Development", icon: FaMobileAlt, color: "text-green-500" },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center items-center py-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Particle Background */}
      <ParticlesBackground isDarkMode={isDarkMode} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJmYhrjKWF8EfCZXPdlQZGL0JDgZsmifoKeq0a4WeWhKoMf-B9r=s288-c-no"
              alt="Muhammad Hasan Alam"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6">
              Hello! I'm Muhammad Hasan Alam, an aspiring web and mobile
              developer currently studying at Sindh Madressatul Islam University
              (SMIU). I'm passionate about technology and excited to learn and
              grow in the field of software development.
            </p>
            <p className="text-lg mb-6">
              I'm currently enrolled in a web and mobile development course at
              Saylani Mass IT Training (SMIT), where I'm honing my skills and
              gaining hands-on experience in creating responsive and
              user-friendly applications. Every day, I'm learning something new
              and working towards turning my passion for coding into a
              successful career.
            </p>

            <motion.a
              href="#contact"
              className={`inline-block px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out ${
                isDarkMode
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
        {/* Education Section */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold text-center mt-16 mb-8"
        >
          Education
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-center`}
            >
              <item.icon className="text-4xl text-purple-500 mb-4" />
              <h4 className="text-xl font-semibold text-center mb-2">
                {item.name}
              </h4>
              <p className="text-center text-gray-500">{item.type}</p>
            </motion.div>
          ))}
        </div>
        {/* Skills Section */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Skills In Progress
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-center`}
            >
              <skill.icon className={`text-4xl ${skill.color} mb-4`} />
              <h4 className="text-xl font-semibold text-center">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
        {/* Current Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <FaLaptopCode className="text-6xl text-purple-500 mx-auto mb-4" />
          <p className="text-lg">
            Currently enhancing my skills at Saylani Mass IT Training (SMIT) in
            Web and Mobile Development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ParticlesBackground = ({ isDarkMode }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(100)].map((_, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${
            isDarkMode ? "bg-white" : "bg-black"
          } opacity-25`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 1}px`,
            height: `${Math.random() * 6 + 1}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default About;
