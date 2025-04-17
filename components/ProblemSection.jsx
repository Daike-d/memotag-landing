"use client";

import { motion } from "framer-motion";
import {
   ChartBarIcon,
   ExclamationTriangleIcon,
   UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
   {
      icon: <UserGroupIcon className="h-8 w-8 text-indigo-600" />,
      number: "55M+",
      label: "People worldwide live with dementia",
   },
   {
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />,
      number: "60%",
      label: "Go undiagnosed in early stages",
   },
   {
      icon: <ChartBarIcon className="h-8 w-8 text-emerald-500" />,
      number: "3x",
      label: "Increase in cases by 2050",
   },
];

export default function ProblemSection() {
   return (
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 dark:from-zinc-800 dark:to-black px-6 text-center overflow-hidden">
         {/* Background Glow */}
         <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 bg-indigo-300 dark:bg-indigo-800" />

         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
         >
            The Dementia Crisis
         </motion.h2>

         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
         >
            Dementia affects millions, yet early detection and proper care are still far behind.
         </motion.p>

         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
               <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-zinc-700"
               >
                  <div className="flex items-center justify-center mb-4">
                     {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-2 tracking-tight">
                     {stat.number}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                     {stat.label}
                  </p>
               </motion.div>
            ))}
         </div>
      </section>
   );
}
