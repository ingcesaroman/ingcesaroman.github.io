"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 mb-8"
          >
            <FaRobot className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              AI-Enhanced Portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Hey, I am <span className="text-emerald-400">Cesar</span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl text-gray-300">
                Programmer since 2010
              </p>
              <p className="text-xl sm:text-2xl text-gray-300">
                Expert Consultant in
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-emerald-400">
                QA Automation Engineer
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-emerald-400">
                Web & Mobile Developer
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Software Engineer & AI Enthusiast specializing in Testing and Development
            Passionate about creating robust software solutions and delivering exceptional user experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/ingcesaroman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ingcesaroman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
} 