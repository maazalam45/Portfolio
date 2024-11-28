import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/maazalam45",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-hasan-alam-193046330/",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:hassualoo@gmail.com", label: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden py-16  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Let's Create Together</h3>
            <p className="mb-4">
              Turning your ideas into digital realities. Let's build something
              extraordinary!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start a Project
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-purple-500 transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-purple-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center relative z-10"
        >
          <p className="text-sm mb-2">
            © {year} Muhammad Hasan Alam. All rights reserved.
          </p>
          <motion.p
            className="text-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Crafted by Muhammad Hasan Alam with{" "}
            <FaHeart className="text-red-500 mx-1" />
          </motion.p>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
