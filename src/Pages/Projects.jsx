import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

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
        ></motion.div>
      ))}
    </div>
  );
};

const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website built with React and styled with Tailwind CSS. Features include dynamic content loading, add to cart, delete from cart, checkout, Firebase Authentication, and Pagination. Not Completed Yet.",
      image:
        "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/maazalam45/Shopping-Mania-Hasan",
      live: "https://shopping-mania-hasan.vercel.app/",
      tags: ["React", "Tailwind CSS", "JavaScript", "Firebase-Auth"],
    },
    {
      title: "Weather Web",
      description:
        "A sleek, mobile-friendly weather application using a weather API and geolocation. Provides real-time weather data.",
      image:
        "https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fFdlYXRoZXIlMjBhbmltYXRlZHxlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/maazalam45/Wheather-Web",
      live: "https://maazalam45.github.io/Wheather-Web/",
      tags: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "Portfolio Website",
      description:
        "My Client portfolio website showcasing my projects and skills. Features smooth animations, responsive design.",
      image:
        "https://media.istockphoto.com/id/1729511720/photo/3d-black-briefcase-with-golden-lock-floating-isolated-on-blue-background-office-work-job.webp?a=1&b=1&s=612x612&w=0&k=20&c=vsG841v5kCXbVWCtDwWnnUK2SyS7YpT_qRLFAuqu6SE=",
      github: "https://github.com/maazalam45/Hasan-Client-Portfolio",
      live: "https://hasan-client-portfolio.vercel.app/",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Image Gallery",
      description:
        "A simple image Gallery to learn about use state. I learned about use state by making this image gallery.",
      image:
        "https://media.istockphoto.com/id/1439868974/photo/3d-add-image-in-gallery-picture-with-plus-mark-button-to-upload-new-photo-mountains-and-sun.webp?a=1&b=1&s=612x612&w=0&k=20&c=51t6XfXeNJJOKxs1zwRlT1H5Sco0RXJC8xWBMOXV4JU=",
      github: "https://github.com/maazalam45/Hasan-React-Gallery",
      live: "https://hasan-react-gallery.vercel.app/",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "E-Commerce Dynamic Routing Practice",
      description:
        "Practice work to learn about how react routing works. It's responsive also",
      image:
        "https://media.istockphoto.com/id/1355142544/photo/smoothly-flowing-particles-swarm-with-glowing-golden-trails-warm-and-cold-colors-suitable-for.jpg?s=612x612&w=0&k=20&c=ALpW19v8ynANBBsG6SidR1rxUQ44XZFP_VLP3saNNoE=",
      github: "https://github.com/maazalam45/E-Com-hasan",
      live: "https://e-com-hasan.vercel.app/",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Practice E-Commerce Web",
      description:
        "An application for e-commerce firebase-authentication used for login signup, Signup is not wroking after hoisting but login is still working. Firestore to store upload data by upload products.",
      image:
        "https://plus.unsplash.com/premium_photo-1666739387925-5841368970a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob3BpbmclMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/maazalam45/Hasan-SMIT",
      live: "https://maazalam45.github.io/Hasan-SMIT/",
      tags: [
        "HTML",
        "Firebase-Auth",
        "FireStore",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ParticlesBackground isDarkMode={isDarkMode} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>
        <div className="space-y-24">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-2/5">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                        >
                          <FaGithub className="inline-block mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="inline-block mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p
                    className={`mb-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          isDarkMode
                            ? "bg-purple-700 text-purple-100"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center mt-16 space-y-8"
        >
          {!showAll && projects.length > 4 ? (
            <button
              onClick={() => setShowAll(true)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              See All
              <FaChevronDown className="ml-2" />
            </button>
          ) : showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
            >
              Close
              <FaChevronUp className="ml-2" />
            </button>
          ) : null}
          <p
            className={`text-center ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            To see more of my projects, visit my{" "}
            <a
              href="https://github.com/maazalam45"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold ${
                isDarkMode
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              GitHub profile
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
