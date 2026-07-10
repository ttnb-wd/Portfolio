"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
      {/* Primary */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full sm:w-auto"
      >
        <Button
          asChild
          size="lg"
          className="
            group
            h-12
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-blue-700
            px-7
            text-white
            font-semibold
            transition-all
            duration-500
            hover:from-blue-700
            hover:to-blue-800
            hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]
            focus-visible:ring-2
            focus-visible:ring-blue-600
            focus-visible:ring-offset-2
            focus-visible:ring-offset-slate-50
          "
        >
          <a href="#projects" aria-label="View my projects section">
            View Projects

            <ArrowRight
              className="
                ml-2
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              aria-hidden="true"
            />
          </a>
        </Button>
      </motion.div>

      {/* Secondary */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-full sm:w-auto"
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="
            group
            h-12
            w-full
            rounded-xl
            border-slate-300
            bg-white
            px-7
            text-slate-700
            font-semibold
            transition-all
            duration-500
            hover:border-blue-600
            hover:bg-gradient-to-r
            hover:from-blue-50
            hover:to-sky-50
            hover:text-blue-700
            hover:shadow-[0_8px_20px_rgba(37,99,235,0.15)]
            focus-visible:ring-2
            focus-visible:ring-blue-600
            focus-visible:ring-offset-2
            focus-visible:ring-offset-slate-50
          "
        >
          <a href="#contact" aria-label="Go to contact section">
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Contact Me
          </a>
        </Button>
      </motion.div>
    </div>
  );
}