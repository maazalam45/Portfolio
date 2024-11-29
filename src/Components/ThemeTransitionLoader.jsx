import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeTransitionLoader = ({ isDarkMode, isTransitioning }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isTransitioning ? 1 : 0,
        backgroundColor: isDarkMode ? "#1a202c" : "#f7fafc",
      }}
      transition={{
        opacity: { duration: 0.3 },
        backgroundColor: { duration: 0.5 },
      }}
    >
      <div className="text-center flex flex-col items-center justify-center">
        <motion.div
          className="text-6xl mb-4 flex items-center justify-center"
          animate={{
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
          transition={{
            duration: 0.5,
            delay: isDarkMode ? 0 : 0.3, // Delay color change for light mode
          }}
        >
          {isDarkMode ? <FaMoon size={64} /> : <FaSun size={64} />}
        </motion.div>
        <motion.div
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isDarkMode ? "Switching to Dark Theme" : "Switching to Light Theme"}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThemeTransitionLoader;
