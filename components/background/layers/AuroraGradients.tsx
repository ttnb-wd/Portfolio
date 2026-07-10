"use client";

import { motion } from "framer-motion";

const auroras = [
  {
    id: 1,
    className: "aurora-1",
    style: {
      background: "radial-gradient(ellipse 800px 600px at 50% 50%, rgba(99, 91, 255, 0.08), transparent 70%)",
      filter: "blur(100px)",
    },
    animate: {
      x: ["0%", "15%", "-10%", "0%"],
      y: ["0%", "-10%", "15%", "0%"],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, 5, -5, 0],
    },
    transition: {
      duration: 45,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
  {
    id: 2,
    className: "aurora-2",
    style: {
      background: "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(96, 165, 250, 0.06), transparent 70%)",
      filter: "blur(120px)",
    },
    animate: {
      x: ["0%", "-15%", "10%", "0%"],
      y: ["0%", "12%", "-8%", "0%"],
      scale: [1, 0.9, 1.15, 1],
      rotate: [0, -8, 8, 0],
    },
    transition: {
      duration: 50,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
  {
    id: 3,
    className: "aurora-3",
    style: {
      background: "radial-gradient(ellipse 600px 700px at 50% 50%, rgba(167, 139, 250, 0.05), transparent 70%)",
      filter: "blur(110px)",
    },
    animate: {
      x: ["0%", "10%", "-15%", "0%"],
      y: ["0%", "-12%", "10%", "0%"],
      scale: [1, 1.08, 0.98, 1],
      rotate: [0, 10, -10, 0],
    },
    transition: {
      duration: 55,
      repeat: Infinity,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
];

export default function AuroraGradients() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {auroras.map((aurora) => (
        <motion.div
          key={aurora.id}
          className={`absolute left-1/2 top-1/2 ${aurora.className}`}
          style={{
            width: "100%",
            height: "100%",
            ...aurora.style,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
          animate={aurora.animate}
          transition={aurora.transition}
        />
      ))}
    </div>
  );
}
