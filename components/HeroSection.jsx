// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "@/public/animations/ai-care-illustration.json";

export default function HeroSection() {
  return (
    <section className="mt-15 min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-indigo-600 mb-4"
      >
        Dementia Care with AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6"
      >
        MemoTag empowers caregivers with smart tracking tools to improve dementia care.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-indigo-600 text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl font-medium hover:bg-primary dark:hover:text-white dark:hover:bg-indigo-600 transition"
      >
        Request a Demo
      </motion.button>

      {/* Animation or image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 w-full max-w-md"
      >
  <Lottie animationData={heroAnimation} loop={true} />
</motion.div>
    </section>
  );
}
