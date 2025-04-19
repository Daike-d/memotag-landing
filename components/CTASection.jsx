// components/CTASection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function CTASection() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { name, email, message } = formData;

      const { data, error } = await supabase
         .from("submissions")
         .insert([{ name, email, message }]);

      if (error) {
         console.error("Supabase insert error:", error.message);
         toast.error("Something went wrong. Please try again.");
      } else {
         console.log("Submitted:", data);
         toast.success("Thank you! We’ll be in touch.");
         setFormData({ name: "", email: "", message: "" });
      }
   };

   return (
      <section className="py-20 bg-blue-50 dark:bg-zinc-900 px-6">
         <div className="max-w-2xl mx-auto text-center">
            <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
               Ready to Experience MemoTag?
            </motion.h2>

            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               viewport={{ once: true }}
               className="text-gray-700 dark:text-gray-300 mb-10"
            >
               Get early access or request a live demo. We're here to support caregivers and clinicians.
            </motion.p>
         </div>

         <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto grid gap-6"
         >
            <motion.input
               whileFocus={{ scale: 1.02 }}
               name="name"
               type="text"
               value={formData.name}
               onChange={handleChange}
               required
               placeholder="Your Name"
               className="w-full p-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <motion.input
               whileFocus={{ scale: 1.02 }}
               name="email"
               type="email"
               value={formData.email}
               onChange={handleChange}
               required
               placeholder="Your Email"
               className="w-full p-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <motion.textarea
               whileFocus={{ scale: 1.02 }}
               name="message"
               value={formData.message}
               onChange={handleChange}
               rows={4}
               placeholder="Your Message"
               className="w-full p-4 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <motion.button
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.98 }}
               type="submit"
               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
            >
               Submit
            </motion.button>
         </form>
      </section>
   );
}
