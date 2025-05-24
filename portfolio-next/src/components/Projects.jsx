"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'AI-Powered Testing Framework',
    description: 'An innovative testing framework that leverages AI to automate test case generation and execution.',
    image: 'https://placehold.co/600x400?text=AI+Testing+Framework',
    tags: ['AI', 'Testing', 'Automation'],
    github: 'https://github.com/ingcesaroman/ai-testing-framework',
    demo: 'https://demo.ai-testing-framework.com'
  },
  {
    title: 'Smart Test Management System',
    description: 'A comprehensive test management system with AI-driven analytics and reporting capabilities.',
    image: 'https://placehold.co/600x400?text=Smart+Test+Management',
    tags: ['React', 'Node.js', 'AI'],
    github: 'https://github.com/ingcesaroman/smart-test-management',
    demo: 'https://demo.smart-test-management.com'
  },
  {
    title: 'Automated QA Dashboard',
    description: 'Real-time dashboard for monitoring test execution and quality metrics with AI-powered insights.',
    image: 'https://placehold.co/600x400?text=Automated+QA+Dashboard',
    tags: ['Vue.js', 'Python', 'Data Visualization'],
    github: 'https://github.com/ingcesaroman/qa-dashboard',
    demo: 'https://demo.qa-dashboard.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
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
              Featured Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects that showcase my expertise in software testing and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
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
            href="https://github.com/ingcesaroman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 