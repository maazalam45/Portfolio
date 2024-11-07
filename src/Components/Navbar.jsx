"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md z-20 transition-all duration-300 ${
        isDarkMode
          ? scrolled
            ? "bg-gray-900 bg-opacity-90"
            : "bg-gray-900 bg-opacity-75"
          : scrolled
          ? "bg-white bg-opacity-90"
          : "bg-white bg-opacity-75"
      } ${isOpen ? "h-auto" : "h-16"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1
            className={`text-xl md:text-2xl font-extrabold tracking-wide ${
              isDarkMode ? "text-purple-400" : "text-purple-600"
            }`}
          >
            Muhammad Hasan Alam
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative overflow-hidden group ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 ${
                    isDarkMode ? "bg-purple-400" : "bg-purple-600"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}
                ></span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center transition-colors duration-300 p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaMoon className="text-yellow-300" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </div>
          <button
            onClick={handleToggle}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className={isDarkMode ? "text-white" : "text-black"} />
            ) : (
              <FaBars className={isDarkMode ? "text-white" : "text-black"} />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden flex flex-col items-center space-y-4 mt-4 pb-4 ${
              isDarkMode
                ? "bg-gray-800 bg-opacity-90"
                : "bg-gray-100 bg-opacity-90"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className={`w-full text-center py-2 px-4 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center transition-colors duration-300 p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaMoon className="text-yellow-300" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
