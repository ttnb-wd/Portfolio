"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function GlobalBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#F8FAFC]">

      {/* VERY SUBTLE GRID */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* AURORA (MAIN ENERGY) */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-250px] h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-[160px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, #635BFF 0%, transparent 55%), radial-gradient(circle, #A78BFA 35%, transparent 70%), radial-gradient(circle, #60A5FA 60%, transparent 85%)",
        }}
      />

      {/* FLOATING ORB 1 */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full blur-[140px] opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #60A5FA, transparent 70%)",
        }}
      />

      {/* FLOATING ORB 2 */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] bottom-[10%] h-[700px] w-[700px] rounded-full blur-[160px] opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #F9A8D4, transparent 75%)",
        }}
      />

      {/* MOUSE GLOW (VERY SUBTLE) */}
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[140px] opacity-[0.12]"
        style={{
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #A78BFA, transparent 60%)",
        }}
      />

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* VIGNETTE (STRIPE DEPTH SECRET) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#F8FAFC_92%)]" />
    </div>
  );
}