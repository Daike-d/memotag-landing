"use client";;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({
   items,
   offset,
   scaleFactor
}) => {
   const CARD_OFFSET = offset || 10;
   const SCALE_FACTOR = scaleFactor || 0.06;
   const [cards, setCards] = useState(items);

   useEffect(() => {
      startFlipping();

      return () => clearInterval(interval);
   }, []);
   const startFlipping = () => {
      interval = setInterval(() => {
         setCards((prevCards) => {
            const newArray = [...prevCards]; // create a copy of the array
            newArray.unshift(newArray.pop()); // move the last element to the front
            return newArray;
         });
      }, 5000);
   };

   return (
      <div className="relative  h-70 w-80 md:h-70 md:w-90">
         {cards.map((card, index) => {
            return (
               <motion.div
                  key={card.id}
                  className="absolute dark:bg-black bg-white h-70 w-80 md:h-70 md:w-90 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                  style={{
                     transformOrigin: "top center",
                  }}
                  animate={{
                     top: index * -CARD_OFFSET,
                     scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                     zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                  }}>
                  <div className="p-4 font-normal text-neutral-700 dark:text-neutral-200">
                     {card.content}
                  </div>
                  <div>
                     <p className="pl-4 text-neutral-800 font-medium dark:text-white">
                        {card.name}
                     </p>
                     <p className="pl-4 pb-4 text-neutral-500 font-normal dark:text-neutral-200">
                        {card.designation}
                     </p>
                  </div>
               </motion.div>
            );
         })}
      </div>
   );
};
