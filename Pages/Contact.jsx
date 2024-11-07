"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Particles Background Component
const ParticlesBackground = ({ isDarkMode }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(250)].map(
        (
          _,
          index // Change 50 to 100 or more for more particles
        ) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-white" : "bg-black"
            } opacity-25`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`, // Particle size (1 to 7px)
              height: `${Math.random() * 6 + 1}px`, // Particle size (1 to 7px)
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
        )
      )}
    </div>
  );
};

const Contact = ({ isDarkMode }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen py-20 relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ParticlesBackground isDarkMode={isDarkMode} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Get in Touch Heading - Increased size */}
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-semibold mb-8 text-purple-600 dark:text-purple-400 text-center"
        >
          Get in Touch
        </motion.h3>

        {/* Contact Box */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full bg-opacity-90 backdrop-blur-md"
            style={{
              // Ensuring the blur effect works on the background
              backdropFilter: "blur(10px)", // Applied blur effect
            }}
          >
            <p className="mb-8 text-gray-600 dark:text-gray-300 text-center">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  text: "hassualoo@gmail.com",
                  href: "mailto:hassualoo@gmail.com", // Updated link to email
                },
                {
                  icon: FaGithub,
                  text: "github.com/yourusername",
                  href: "https://github.com/yourusername",
                },
                {
                  icon: FaLinkedin,
                  text: "linkedin.com/in/yourusername",
                  href: "https://linkedin.com/in/yourusername",
                },
                {
                  icon: FaTwitter,
                  text: "@yourusername",
                  href: "https://twitter.com/yourusername",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center group"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="text-purple-500 mr-4 text-2xl group-hover:text-purple-600 transition-colors" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
