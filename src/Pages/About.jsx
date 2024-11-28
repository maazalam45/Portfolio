"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";

const About = ({ isDarkMode }) => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const education = [
    {
      name: "Sindh Madressatul Islam University (SMIU)",
      type: "University",
      icon: FaUserGraduate,
      years: "2020-Present",
    },
    {
      name: "Shipowners' Govt. College",
      type: "College",
      icon: FaGraduationCap,
      years: "2018-2020",
    },
    {
      name: "St. Jude's High School",
      type: "School",
      icon: FaGraduationCap,
      years: "2006-2018",
    },
  ];

  const skills = [
    { name: "Web Development", icon: FaCode, color: "text-blue-500" },
    { name: "Mobile Development", icon: FaMobileAlt, color: "text-green-500" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ParticlesBackground isDarkMode={isDarkMode} />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center container">
          <motion.div variants={itemVariants} className="flex justify-center">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJmYhrjKWF8EfCZXPdlQZGL0JDgZsmifoKeq0a4WeWhKoMf-B9r=s288-c-no"
              alt="Muhammad Hasan Alam"
              className="w-48 h-48 object-cover rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg">
              Hello! I'm Muhammad Hasan Alam, an aspiring web and mobile
              developer currently studying at Sindh Madressatul Islam University
              (SMIU). I'm passionate about technology and excited to learn and
              grow in the field of software development.
            </p>
            <p className="text-lg">
              I'm currently enrolled in a web and mobile development course at
              Saylani Mass IT Training (SMIT), where I'm honing my skills and
              gaining hands-on experience in creating responsive and
              user-friendly applications. Every day, I'm learning something new
              and working towards turning my passion for coding into a
              successful career.
            </p>
            <div className="flex justify-center">
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
            </div>
          </motion.div>
        </div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-center mt-20 mb-10 text-purple-600 dark:text-purple-400"
        >
          Education Journey
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105`}
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <item.icon className="text-3xl text-purple-500" />
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                {item.name}
              </h4>
              <p className="text-center text-purple-500 dark:text-purple-400">
                {item.type}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {item.years}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-10 text-purple-600 dark:text-purple-400"
        >
          Skills In Progress
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`w-16 h-16 rounded-full bg-${
                  skill.color.split("-")[1]
                }-100 flex items-center justify-center mb-4`}
              >
                <skill.icon className={`text-3xl ${skill.color}`} />
              </div>
              <h4 className="text-xl font-semibold text-center">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r bg-white  dark:bg-gray-800  p-8 rounded-lg shadow-xl"
        >
          <FaLaptopCode className="text-6xl text-purple-600 mx-auto mb-4" />
          <p className="text-lg text-black dark:text-white font-semibold">
            Currently enhancing my skills at Saylani Mass IT Training (SMIT) in
            Web and Mobile Development
          </p>
        </motion.div>
      </motion.div>
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
