"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Future of AI in Software Testing',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we approach software testing and quality assurance.',
    image: '/images/blog1.jpg',
    date: 'March 15, 2024',
    readTime: '5 min read',
    aiEnhanced: true
  },
  {
    title: 'Best Practices for Test Automation',
    excerpt: 'A comprehensive guide to implementing effective test automation strategies in modern software development.',
    image: '/images/blog2.jpg',
    date: 'March 10, 2024',
    readTime: '7 min read',
    aiEnhanced: false
  },
  {
    title: 'AI-Driven Test Case Generation',
    excerpt: 'How machine learning algorithms are helping create more efficient and comprehensive test cases.',
    image: '/images/blog3.jpg',
    date: 'March 5, 2024',
    readTime: '6 min read',
    aiEnhanced: true
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

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
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
              Latest Articles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my thoughts and experiences in software testing, AI integration, and quality assurance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.aiEnhanced && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30">
                    <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                      <FaRobot className="w-4 h-4" />
                      AI Enhanced
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
} 