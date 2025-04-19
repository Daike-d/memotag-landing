"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FeedbackSection() {
   return (
      <div className="h-[35rem] mx-auto bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-zinc-900 flex flex-col items-center justify-center w-full">
         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 dark:text-white"
         >
            Hear From Our Users
         </motion.h2>
         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-20"
         >
            These voices reflect the trust and impact we strive for every day.
         </motion.p>


         {/* <div className=" flex items-center justify-center w-full"> */}
         <CardStack items={CARDS} />
         {/* </div> */}
      </div>
   );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
   children,
   className
}) => {
   return (
      <span
         className={cn(
            "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
            className
         )}>
         {children}
      </span>
   );
};

const CARDS = [
   {
      id: 0,
      name: "Dr. Anjali Mehta",
      designation: "Neurologist, Fortis Hospital",
      content: (
         <p>
            <Highlight>MemoTag</Highlight> has become an <Highlight>invaluable</Highlight> part of our
            patient monitoring toolkit. Its <Highlight>cognitive tracking</Highlight> features allow for
            <Highlight>early detection</Highlight>, which is a <Highlight>game-changer</Highlight> in dementia care.
         </p>
      ),
   },
   {
      id: 1,
      name: "Mark Thompson",
      designation: "Caregiver & Son",
      content: (
         <p>
            Ever since my father started using <Highlight>MemoTag</Highlight>,
            I’ve felt so much more <Highlight>at peace</Highlight>. The <Highlight>GPS</Highlight> and <Highlight>fall alerts</Highlight> ensure he’s
            <Highlight>safe</Highlight>, even when I’m not around.
         </p>
      ),
   },
   {
      id: 2,
      name: "Sophia Liang",
      designation: "Geriatric Nurse",
      content: (
         <p>
            <Highlight>MemoTag’s</Highlight> wearable is <Highlight>light</Highlight>, <Highlight>non-intrusive</Highlight>,
            and <Highlight>accurate</Highlight>. It integrates <Highlight>seamlessly</Highlight> with our existing care
            protocols, improving both <Highlight>safety</Highlight> and <Highlight>insight</Highlight>.
         </p>
      ),
   },
   {
      id: 3,
      name: "Ravi Patel",
      designation: "Investor, HealthTech Ventures",
      content: (
         <p>
            We backed <Highlight>MemoTag</Highlight> because we believe in tech
            that <Highlight>changes lives</Highlight>. Their combination of <Highlight>AI</Highlight> and <Highlight>empathy</Highlight> is
            <Highlight>rare</Highlight> and incredibly <Highlight>impactful</Highlight>.
         </p>
      ),
   },
   {
      id: 4,
      name: "Laura Fernandez",
      designation: "Occupational Therapist",
      content: (
         <p>
            I recommend <Highlight>MemoTag</Highlight> to families during
            consultations. It provides <Highlight>real-time data</Highlight> that helps <Highlight>tailor</Highlight> therapy
            sessions to the patient’s <Highlight>current condition</Highlight>.
         </p>
      ),
   },
   {
      id: 5,
      name: "Daniel Kim",
      designation: "Tech Blogger, Health & AI",
      content: (
         <p>
            <Highlight>MemoTag</Highlight> is a shining example of <Highlight>ethical AI</Highlight> in
            healthcare. Its ability to blend <Highlight>smart tracking</Highlight> with <Highlight>privacy safeguards</Highlight> is
            truly <Highlight>impressive</Highlight>.
         </p>
      ),
   },

];
