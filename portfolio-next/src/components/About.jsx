"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBug, FaBrain } from 'react-icons/fa';

const skills = [
  {
    name: 'Software Testing',
    icon: <FaBug className="w-6 h-6" />,
    description: 'Expert in manual and automated testing methodologies, ensuring software quality and reliability.'
  },
  {
    name: 'Web Development',
    icon: <FaCode className="w-6 h-6" />,
    description: 'Proficient in modern web technologies and frameworks, building responsive and performant applications.'
  },
  {
    name: 'AI Integration',
    icon: <FaBrain className="w-6 h-6" />,
    description: 'Passionate about leveraging AI to enhance software development and testing processes.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 mb-4">
            <FaRobot className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Who I Am
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer with expertise in testing and development, 
            always exploring new technologies and AI solutions to create better software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="text-emerald-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
} 