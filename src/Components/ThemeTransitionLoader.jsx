"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeTransitionLoader = ({ isDarkMode, isTransitioning }) => {
  const [buttonPosition, setButtonPosition] = useState({ x: "100%", y: "0%" });
  const [transitionColor, setTransitionColor] = useState(null);

  useEffect(() => {
    const button = document.getElementById("theme-toggle-btn");
    if (button) {
      const rect = button.getBoundingClientRect();
      setButtonPosition({
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      });
    }

    // Set transition color only when the transition starts
    if (isTransitioning) {
      setTransitionColor(isDarkMode ? "#e8e8e8" : "#000000");
    }
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {isTransitioning && transitionColor && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{
            clipPath: `circle(5% at ${buttonPosition.x} ${buttonPosition.y})`,
            opacity: 1, // No fade-in effect
          }}
          animate={{
            clipPath: `circle(150% at ${buttonPosition.x} ${buttonPosition.y})`,
            opacity: 1, // Stay fully visible throughout
          }}
          exit={{
            clipPath: `circle(150% at ${buttonPosition.x} ${buttonPosition.y})`,
            opacity: 1, // Prevents fade-out
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundColor: transitionColor,
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default ThemeTransitionLoader;
