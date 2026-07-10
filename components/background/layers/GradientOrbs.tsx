"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    id: 1,
    gradient: "radial-gradient(circle, rgba(99, 91, 255, 0.12) 0%, transparent 60%)",
    size: 500,
    position: { left: "10%", top: "15%" },
    animate: {
      x: [0, 40, -30, 0],
      y: [0, -50, 40, 0],
      scale: [1, 1.15, 0.92, 1],
    },
    duration: 40,
  },
  {
    id: 2,
    gradient: "radial-gradient(circle, rgba(96, 165, 250, 0.10) 0%, transparent 60%)",
    size: 600,
    position: { right: "8%", top: "20%" },
    animate: {
      x: [0, -35, 45, 0],
      y: [0, 45, -40, 0],
      scale: [1, 0.9, 1.12, 1],
    },
    duration: 48,
  },
  {
    id: 3,
    gradient: "radial-gradient(circle, rgba(125, 211, 252, 0.08) 0%, transparent 60%)",
    size: 450,
    position: { left: "50%", top: "50%" },
    animate: {
      x: [0, 30, -40, 0],
      y: [0, -35, 30, 0],
      scale: [1, 1.08, 0.95, 1],
    },
    duration: 45,
  },
  {
    id: 4,
    gradient: "radial-gradient(circle, rgba(167, 139, 250, 0.09) 0%, transparent 60%)",
    size: 550,
    position: { right: "15%", bottom: "18%" },
    animate: {
      x: [0, -40, 35, 0],
      y: [0, 38, -42, 0],
      scale: [1, 1.1, 0.93, 1],
    },
    duration: 52,
  },
  {
    id: 5,
    gradient: "radial-gradient(circle, rgba(249, 168, 212, 0.07) 0%, transparent 60%)",
    size: 420,
    position: { left: "18%", bottom: "22%" },
    animate: {
      x: [0, 38, -32, 0],
      y: [0, -40, 35, 0],
      scale: [1, 0.94, 1.09, 1],
    },
    duration: 42,
  },
];

export default function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.gradient,
            filter: "blur(90px)",
            ...orb.position,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
      ))}
    </div>
  );
}
