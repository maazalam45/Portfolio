"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } pt-16 md:pt-20`} // Added top padding to account for the Navbar
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: isDarkMode
            ? "url('/placeholder.svg?height=1080&width=1920')"
            : "url('/placeholder.svg?height=1080&width=1920')",
          filter: isDarkMode ? "brightness(0.5)" : "brightness(0.7)",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJmYhrjKWF8EfCZXPdlQZGL0JDgZsmifoKeq0a4WeWhKoMf-B9r=s288-c-no"
            alt="Muhammad Hasan Alam"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
          <h1
            className={`text-4xl md:text-6xl font-extrabold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Muhammad Hasan Alam
          </h1>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p
            className={`text-lg md:text-xl mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a{" "}
            <motion.span
              className="font-semibold text-purple-500 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Web & Mobile Developer
            </motion.span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <SocialIcon
            href="https://github.com"
            Icon={FaGithub}
            label="GitHub"
            isDarkMode={isDarkMode}
          />
          <SocialIcon
            href="https://linkedin.com"
            Icon={FaLinkedin}
            label="LinkedIn"
            isDarkMode={isDarkMode}
          />
          <SocialIcon
            href="https://twitter.com"
            Icon={FaTwitter}
            label="Twitter"
            isDarkMode={isDarkMode}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="space-x-4"
        >
          <motion.a
            href="#about"
            className={`bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-lg transition duration-300 ease-in-out inline-block shadow-md hover:shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className={`bg-transparent border-2 border-purple-500 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-lg transition duration-300 ease-in-out inline-block shadow-md ${
              isDarkMode
                ? "text-purple-400 hover:bg-purple-400 hover:text-gray-900"
                : "text-purple-500 hover:bg-purple-500 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
      <ParticlesBackground isDarkMode={isDarkMode} />
    </section>
  );
};

const SocialIcon = ({ href, Icon, label, isDarkMode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition duration-300 ease-in-out ${
        isDarkMode
          ? "text-gray-300 hover:text-purple-400"
          : "text-gray-700 hover:text-purple-500"
      }`}
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8" />
    </motion.a>
  );
};

const ParticlesBackground = ({ isDarkMode }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(50)].map((_, index) => (
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

export default Home;
