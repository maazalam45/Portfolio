import React, { useState, useEffect } from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

import Loader from "./Components/loader";
import Navbar from "./Components/Navbar";

const App = () => {
  // Retrieve dark mode preference from localStorage, default to false if not set
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode); // Save the new preference
      return newMode;
    });
  };

  useEffect(() => {
    // Apply initial dark mode class based on saved preference
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Simulate loading time and check if all content is loaded
    const timer = setTimeout(() => {
      window.onload = () => {
        setIsLoading(false);
      };

      // Fallback if window.onload doesn't trigger
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, 1500); // Minimum loading time of 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {isLoading ? (
        <Loader isDarkMode={isDarkMode} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
//updated
