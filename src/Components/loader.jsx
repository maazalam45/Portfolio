// Loader.jsx
import React from "react";
import { motion } from "framer-motion";

const Loader = ({ isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="relative">
        {/* Outer rotating circle */}
        <motion.div
          className={`w-40 h-40 rounded-full border-4 ${
            isDarkMode ? "border-purple-500" : "border-purple-600"
          }`}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          className={`absolute top-1/2 left-1/2 w-24 h-24 -mt-12 -ml-12 rounded-full ${
            isDarkMode ? "bg-purple-600" : "bg-purple-500"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Text animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading
          </motion.h1>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-3 h-3 rounded-full ${
              isDarkMode ? "bg-purple-400" : "bg-purple-300"
            }`}
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, Math.cos(index * 60) * 80, 0],
              y: [0, Math.sin(index * 60) * 80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
//new loader
