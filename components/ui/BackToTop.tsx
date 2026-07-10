"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-blue-300 bg-gradient-to-br from-white to-blue-50 text-blue-600 shadow-lg shadow-blue-500/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-blue-600 hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </motion.button>
  );
}