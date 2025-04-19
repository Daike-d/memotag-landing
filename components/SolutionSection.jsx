// components/SolutionSection.tsx
"use client";

import { motion } from "framer-motion";
import {
   CpuChipIcon,
   EyeIcon,
   BellAlertIcon,
   ChartPieIcon,
} from "@heroicons/react/24/outline";

const steps = [
   {
      title: "Wearable Setup",
      description: "Users wear MemoTag’s AI-enhanced device for daily tracking.",
      icon: <CpuChipIcon className="h-8 w-8 text-indigo-600" />,
   },
   {
      title: "Cognitive & Physical Tracking",
      description:
         "The system monitors memory patterns, speech, movement, and alerts anomalies.",
      icon: <EyeIcon className="h-8 w-8 text-indigo-600" />,
   },
   {
      title: "Real-Time Alerts",
      description:
         "Caregivers are instantly notified of falls, confusion, or stress signs.",
      icon: <BellAlertIcon className="h-8 w-8 text-indigo-600" />,
   },
   {
      title: "Care Insights Dashboard",
      description:
         "Advanced analytics help doctors and caregivers adjust treatment in real time.",
      icon: <ChartPieIcon className="h-8 w-8 text-indigo-600" />,
   },
];
export default function SolutionSection() {
   return (
      <section className="py-20 bg-gradient-to-b from-white to-white dark:from-zinc-900 dark:to-black px-6 text-center">
         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
         >
            How MemoTag Works
         </motion.h2>

         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
         >
            A powerful blend of AI and care, made simple for daily use.
         </motion.p>

         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-left">
            {steps.map((step, index) => (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-zinc-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-zinc-700"
               >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                     {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                     {step.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </section>
   );
}
