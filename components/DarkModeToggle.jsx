// components/DarkModeToggle.jsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {cn} from "../lib/utils";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "fixed bottom-5 right-4 z-50 bg-transparent p-3 rounded-full shadow-md hover:scale-105 transition",
        "bg-blue-200/10 dark:bg-white/5 backdrop-blur-md"
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
