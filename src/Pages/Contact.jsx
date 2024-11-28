"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload, // Changed to FaFileDownload from react-icons
} from "react-icons/fa";

// ParticlesBackground component
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
        />
      ))}
    </div>
  );
};

const Contact = ({ isDarkMode }) => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  const handleDownload = async () => {
    try {
      // Convert Google Drive view link to download link
      const fileId = "13y07IY0tPfwSrSmIU2l3a4TUBoipCMGD";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      // Create a link element
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "HasanAlam-CV.pdf"; // Name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download CV:", error);
    }
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      text: "hassualoo@gmail.com",
      href: "mailto:hassualoo@gmail.com",
    },
    {
      icon: FaGithub,
      text: "github.com/maazalam45",
      href: "https://github.com/maazalam45",
    },
    {
      icon: FaLinkedin,
      text: "linkedin.com/in/muhammad-hasan-alam",
      href: "https://www.linkedin.com/in/muhammad-hasan-alam-193046330/",
    },
    {
      icon: FaFileDownload,
      text: "Download CV",
      action: handleDownload,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`min-h-screen py-12 sm:py-20 relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ParticlesBackground isDarkMode={isDarkMode} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h3
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 text-purple-600 dark:text-purple-400 text-center"
        >
          Get in Touch
        </motion.h3>

        <div className="flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg bg-opacity-90 backdrop-blur-md"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base"
            >
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </motion.p>
            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center group hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors cursor-pointer"
                  onClick={item.action}
                  whileHover={{ x: 5 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full"
                    >
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                        <item.icon className="text-purple-500 text-xl group-hover:text-purple-600 transition-colors" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm sm:text-base truncate flex-grow">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <>
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                        <item.icon className="text-purple-500 text-xl group-hover:text-purple-600 transition-colors" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm sm:text-base truncate flex-grow">
                        {item.text}
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
