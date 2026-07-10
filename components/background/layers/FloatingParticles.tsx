"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generateParticles = () => {
  const colors = [
    "rgba(99, 91, 255, 0.06)",
    "rgba(96, 165, 250, 0.05)",
    "rgba(125, 211, 252, 0.04)",
    "rgba(167, 139, 250, 0.05)",
    "rgba(249, 168, 212, 0.04)",
  ];

  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 25 + 35,
    delay: Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setParticles(generateParticles());
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "blur(1px)",
            willChange: "transform",
          }}
          animate={{
            y: [0, -80, -160, -80, 0],
            x: [0, 25, -15, 30, 0],
            opacity: [0.6, 1, 0.5, 0.8, 0.6],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: [0.45, 0.05, 0.55, 0.95],
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
