"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
   items,
   direction = "left",
   speed = "fast",
   pauseOnHover = true,
   className
}) => {
   const containerRef = React.useRef(null);
   const scrollerRef = React.useRef(null);
   
   const [start, setStart] = useState(false);
   
   // useEffect(() => {
   //    addAnimation();
   // }, []);

   const [clonedItems, setClonedItems] = useState([]);
   useEffect(() => {
      const reversed = [...items].reverse(); // reverse order
      setClonedItems([...reversed, ...reversed]); // duplicate for looping
      addAnimation();
   }, [items]);
   

   
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         // const scrollerContent = Array.from(scrollerRef.current.children);

         // scrollerContent.forEach((item) => {
         //    const duplicatedItem = item.cloneNode(true);
         //    if (scrollerRef.current) {
         //       scrollerRef.current.appendChild(duplicatedItem);
         //    }
         // });

         getDirection();
         getSpeed();
         setStart(true);
      }
   }
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === "left") {
            containerRef.current.style.setProperty("--animation-direction", "forwards");
         } else {
            containerRef.current.style.setProperty("--animation-direction", "reverse");
         }
      }
   };
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === "fast") {
            containerRef.current.style.setProperty("--animation-duration", "20s");
         } else if (speed === "normal") {
            containerRef.current.style.setProperty("--animation-duration", "40s");
         } else {
            containerRef.current.style.setProperty("--animation-duration", "80s");
         }
      }
   };
   return (
      <div
         ref={containerRef}
         className={cn(
            "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
            className
         )}>
         <ul
            ref={scrollerRef}
            className={cn(
               "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
               start && "animate-scroll",
               pauseOnHover && "hover:[animation-play-state:paused]"
            )}>
               {/* {items.map((stat, idx) => ( */}
               {clonedItems.map((stat, idx) => (
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
            ))}

            {/* {items.map((item, idx) => (
               <li
                  className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                  key={item.name}>
                  
                  <blockquote>
                     <div
                        aria-hidden="true"
                        className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                     <span
                        className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                        {item.quote}
                     </span>
                     <div className="relative z-20 mt-6 flex flex-row items-center">
                        <span className="flex flex-col gap-1">
                           <span
                              className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                              {item.name}
                           </span>
                           <span
                              className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                              {item.title}
                           </span>
                        </span>
                     </div>
                  </blockquote>
               </li>
            ))} */}
         </ul>
      </div>
   );
};
