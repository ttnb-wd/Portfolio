"use client";

import { motion } from "framer-motion";
import { experiences } from "./experience";
import TimelineItem from "./TimelineItem";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      {/* Vertical Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-blue-400 via-blue-300 to-transparent"
      />

      <div className="space-y-16">
        {experiences.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.15,
            }}
          >
            <TimelineItem item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}