"use client";

import { motion } from "framer-motion";
import {
   UserGroupIcon,
   ExclamationTriangleIcon,
   ChartBarIcon,
   ClockIcon,
   GlobeAltIcon,
   CurrencyDollarIcon,
   HeartIcon,
   EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const stats = [
   {
      icon: <UserGroupIcon className="h-8 w-8 text-indigo-600" />,
      stat: "55M+",
      label: "People worldwide live with dementia",
   },
   {
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />,
      stat: "60%",
      label: "Go undiagnosed in early stages",
   },
   {
      icon: <ChartBarIcon className="h-8 w-8 text-emerald-500" />,
      stat: "3x",
      label: "Increase in cases by 2050",
   },
   {
      icon: <ClockIcon className="h-8 w-8 text-yellow-500" />,
      stat: "1 every 3s",
      label: "New case arises globally",
   },
   {
      icon: <GlobeAltIcon className="h-8 w-8 text-blue-500" />,
      stat: "71%",
      label: "Projected dementia cases in underserved regions",
   },    
   {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-green-600" />,
      stat: "$2.8T",
      label: "Global economic impact by 2030",
   },
   {
      icon: <HeartIcon className="h-8 w-8 text-pink-600" />,
      stat: "133B hrs",
      label: "Informal care hours provided annually",
   },
   {
      icon: <EyeSlashIcon className="h-8 w-8 text-gray-500" />,
      stat: "75%",
      label: "Cases go undiagnosed globally",
   },
];

export default function ProblemSection() {
   return (
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-black px-6 text-center overflow-hidden">
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

         <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
               items={stats}
               direction="right"
               speed="slow"
            />
         </div>
         <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
               items={stats}
               direction="left"
               speed="slow"
            />
            {/* {stats.map((stat, idx) => (
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
                     {stat.stat}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                     {stat.label}
                  </p>
               </motion.div>
            ))} */}
         </div>
      </section>
   );
}
