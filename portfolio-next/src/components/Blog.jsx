"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaClock, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import ContainerBlogs from './ContainerBlogs';
import ReactMarkdown from 'react-markdown';

const blogPosts = [
  {
    title: 'The Future of AI in Software Testing',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we approach software testing and quality assurance.',
    image: '/images/ai-software-testing.webp',
    date: 'March 15, 2025',
    readTime: '7 min read',
    aiEnhanced: true,
    content: `
  Artificial Intelligence (AI) is no longer just a buzzword—it's actively transforming the landscape of software testing. By automating repetitive tasks, generating intelligent test cases, and providing predictive analytics, AI is making testing more efficient, reliable, and scalable.
  
  ## AI vs. Machine Learning in Testing
  
  AI is the broader concept of creating intelligent systems that can mimic human thought processes, while machine learning (ML) is a subset focused on learning from data. In software testing, ML algorithms can analyze user behavior, generate test cases, and even predict where bugs are most likely to occur.
  
  ## Key Benefits of AI in Software Testing
  
  - **Automated Test Creation:** AI can generate and maintain test scripts automatically, reducing manual effort and keeping up with rapid development cycles.
  - **Bug Detection & Predictive Analytics:** Machine learning models can analyze historical data to identify patterns, predict potential failures, and suggest areas that need more testing.
  - **Comprehensive Test Coverage:** AI-driven tools can ensure that even the most complex user flows are tested, improving overall software quality.
  - **Performance Optimization:** By analyzing performance data, AI can help identify bottlenecks and recommend optimizations.
  
  ## Limitations and Ethical Considerations
  
  While AI brings many advantages, it also has limitations:
  - **Data Dependency:** The quality of AI-driven testing depends on the quality and quantity of data available.
  - **Lack of Human Intuition:** AI excels at pattern recognition but cannot fully replicate human creativity and intuition.
  - **Ethical Concerns:** Issues like bias in training data, privacy, and explainability must be addressed to ensure trustworthy AI testing.
  
  ## The Future
  
  The future of software testing is a collaborative approach, where AI augments human testers. Testers will need to develop new skills in data analysis, AI fundamentals, and automation to thrive in this evolving landscape.
  
  > "AI is unlikely to fully supplant traditional software testing methodologies but will augment and enhance them."  
  > — [Frugal Testing](https://www.frugaltesting.com/blog/the-future-of-ai-in-software-testing)
  
  For more, see [Perfecto's take on AI in testing](https://www.perfecto.io/blog/ai-in-software-testing).
  
  ---
  `
  },
  {
    title: 'Best Practices for Test Automation',
    excerpt: 'A comprehensive guide to implementing effective test automation strategies in modern software development.',
    image: '/images/blog2.webp',
    date: 'March 10, 2025',
    readTime: '7 min read',
    aiEnhanced: false,
    content: `Test automation is essential for delivering high-quality software at speed. This post covers the best practices for setting up a robust automation framework, choosing the right tools, writing maintainable test scripts, and integrating automation into your CI/CD pipeline. Learn how to avoid common pitfalls and maximize the ROI of your automation efforts.`
  },
  {
    title: 'AI-Driven Test Case Generation',
    excerpt: 'How machine learning algorithms are helping create more efficient and comprehensive test cases.',
    image: '/images/blog3.jpg',
    date: 'March 5, 2025',
    readTime: '6 min read',
    aiEnhanced: true,
    content: `Machine learning is enabling the automatic generation of test cases based on application behavior and user data. This article delves into the techniques used for AI-driven test case generation, the benefits over traditional methods, and real-world examples of how organizations are leveraging this technology to improve test coverage and reduce manual effort.`
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
  const [openPost, setOpenPost] = useState(null);
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
          {blogPosts.map((post, idx) => (
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
                <button 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
                  onClick={() => setOpenPost(idx)}
                >
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Modal */}
        {openPost !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-gray-900 rounded-lg max-w-lg w-full p-8 relative shadow-lg border border-emerald-500">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-400 text-2xl"
                onClick={() => setOpenPost(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-white mb-2">{blogPosts[openPost].title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  {blogPosts[openPost].date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="w-4 h-4" />
                  {blogPosts[openPost].readTime}
                </span>
              </div>
              <div className="mb-4">
                <Image
                  src={blogPosts[openPost].image}
                  alt={blogPosts[openPost].title}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <ContainerBlogs>
                <div className="prose prose-invert max-w-none text-gray-300 mb-6">
                  <ReactMarkdown>
                    {blogPosts[openPost].content}
                  </ReactMarkdown>
                </div>
              </ContainerBlogs>
              <button
                className="w-full mt-2 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
                onClick={() => setOpenPost(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

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