"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBug, FaBrain, FaDatabase, FaTools, FaMobile, FaCloud } from 'react-icons/fa';

const skills = [
  {
    category: 'Testing',
    icon: <FaBug className="w-6 h-6" />,
    items: [
      { name: 'Manual Testing', level: 90 },
      { name: 'Automated Testing', level: 85 },
      { name: 'API Testing', level: 80 },
      { name: 'Performance Testing', level: 75 }
    ]
  },
  {
    category: 'Development',
    icon: <FaCode className="w-6 h-6" />,
    items: [
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'React/Next.js', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 70 }
    ]
  },
  {
    category: 'AI & ML',
    icon: <FaBrain className="w-6 h-6" />,
    items: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Natural Language Processing', level: 70 },
      { name: 'Computer Vision', level: 65 },
      { name: 'Deep Learning', level: 60 }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: <FaTools className="w-6 h-6" />,
    items: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Agile/Scrum', level: 85 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
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
              Technical Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in software testing, development, and AI integration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-emerald-400">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

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