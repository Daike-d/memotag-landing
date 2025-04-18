"use client";

import { PinContainer } from "./ui/3d-pin";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

// Main FeatureSection Component
export function FeatureSection() {
   return (
      <div className="dark:bg-zinc-900 flex items-center justify-center w-full">
         <PinContainer title="MemoTag">
            <CardStack items={CARDS} />
         </PinContainer>
      </div>
   );
}

// Highlight utility for text
const Highlight = ({ children, className }) => {
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

// Testimonials used in CardStack
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
