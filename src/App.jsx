import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

import Loader from "./Components/loader";
import Navbar from "./Components/Navbar";
import ThemeTransitionLoader from "./Components/ThemeTransitionLoader";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  const toggleDarkMode = () => {
    setIsThemeTransitioning(true);
    setTimeout(() => {
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem("darkMode", newMode);
        return newMode;
      });
    }, 750); // Delay theme change to middle of transition
    setTimeout(() => setIsThemeTransitioning(false), 1500); // Total transition time
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.onload = () => {
        setIsLoading(false);
      };

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading || isThemeTransitioning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading, isThemeTransitioning]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader isDarkMode={isDarkMode} />
          </motion.div>
        ) : isThemeTransitioning ? (
          <motion.div
            key="theme-transition-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeTransitionLoader
              isDarkMode={isDarkMode}
              isTransitioning={isThemeTransitioning}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading || isThemeTransitioning ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          key="navbar"
        />
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </motion.div>
    </div>
  );
};

export default App;
