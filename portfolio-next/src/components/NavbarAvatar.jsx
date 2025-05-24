"use client";

import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

export default function NavbarAvatar({ className = "w-6 h-6" }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaRobot className={`w-full h-full text-emerald-400`} />
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/19216361?s=400&u=b26a1eeb08ff41e289ba65d78685b9b3fe9e305f&v=4"
          alt="Cesar Roman"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
} 