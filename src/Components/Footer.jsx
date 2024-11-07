"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-sm">
              © {currentYear} Muhammad Hasan Alam. All rights reserved.
            </p>
            <p className="text-sm mt-1">
              Made with <FaHeart className="inline-block text-red-500" /> and
              React
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {[
              { icon: FaGithub, href: "https://github.com/yourusername" },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/yourusername",
              },
              { icon: FaTwitter, href: "https://twitter.com/yourusername" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`text-2xl ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                <item.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
