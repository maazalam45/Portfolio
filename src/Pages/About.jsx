"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUserGraduate,
  FaJava,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiMui,
  SiAntdesign,
  SiShadcnui,
} from "react-icons/si";

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
      years: "2023-Present",
    },
    {
      name: "Pakistan Shipowners' Govt. College",
      type: "College",
      icon: FaGraduationCap,
      years: "2021-2023",
    },
    {
      name: "St. Jude's High School",
      type: "School",
      icon: FaGraduationCap,
      years: "2011-2021",
    },
    {
      name: "Saylani Mass IT Training (SMIT)",
      type: "Course",
      icon: FaLaptopCode,
      years: "2023-2025",
    },
  ];

  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    { name: "Shadcn UI", icon: SiShadcnui, color: "text-gray-800" },
    { name: "Material UI", icon: SiMui, color: "text-blue-700" },
    { name: "Ant Design", icon: SiAntdesign, color: "text-red-600" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative min-h-screen py-16 sm:py-20 ${
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
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <motion.div
            variants={itemVariants}
            className="lg:w-1/3 flex flex-col items-center"
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocJmYhrjKWF8EfCZXPdlQZGL0JDgZsmifoKeq0a4WeWhKoMf-B9r=s288-c-no"
              alt="Muhammad Hasan Alam"
              className="w-48 h-48 object-cover rounded-full shadow-xl mb-6"
            />

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-blue-600 hover:to-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:w-2/3 space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Muhammad Hasan Alam, an aspiring web and mobile
              developer currently studying at Sindh Madressatul Islam University
              (SMIU). I'm passionate about technology and excited to learn and
              grow in the field of software development.
            </p>
            <p className="text-lg leading-relaxed">
              I'm currently enrolled in a web and mobile development course at
              Saylani Mass IT Training (SMIT), where I'm honing my skills and
              gaining hands-on experience in creating responsive and
              user-friendly applications. Every day, I'm learning something new
              and working towards turning my passion for coding into a
              successful career.
            </p>
          </motion.div>
        </div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-center mt-20 mb-10 text-gray-800 dark:text-gray-200"
        >
          Education Journey
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-between h-full transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}
              style={{
                boxShadow: isDarkMode
                  ? "0 4px 6px -1px rgba(255, 255, 255, 0.1)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div
                className={`w-16 h-16 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon
                  className={`text-3xl ${
                    isDarkMode ? "text-blue-400" : "text-purple-600"
                  }`}
                />
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                {item.type}
              </h4>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                {item.years}
              </p>
              <p
                className={`text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-center`}
              >
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200"
        >
          Skills In Progress
        </motion.h3>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`p-4 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md group relative overflow-hidden`}
              style={{
                boxShadow: isDarkMode
                  ? "0 2px 4px -1px rgba(255, 255, 255, 0.1)"
                  : "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div
                className={`w-16 h-16 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className={`text-3xl ${skill.color}`} />
              </div>
              <h4 className="text-sm font-semibold text-center group-hover:scale-105 transition-transform duration-300">
                {skill.name}
              </h4>
            </motion.div>
          ))}
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
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default About;
