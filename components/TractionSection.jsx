// components/TractionSection.tsx
"use client";

import { motion } from "framer-motion";

const traction = [
  {
    title: "10K+ Preorders",
    description: "Massive early demand from caregivers and clinics.",
  },
  {
    title: "5 Pilot Hospitals",
    description: "Real-world trials underway in top dementia care centers.",
  },
  {
    title: "Backed by Y-Combinator",
    description: "Recognized by leading healthcare accelerators.",
  },
  {
    title: "95% User Satisfaction",
    description: "Early users reported improved care insights and peace of mind.",
  },
];

export default function TractionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-zinc-900 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        Trusted and Growing Fast
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
      >
        MemoTag is already making a difference for caregivers, hospitals, and early adopters.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {traction.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
