"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 200,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 200,
    damping: 30,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMove}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        className="
          absolute
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/15
          blur-[150px]
        "
      />
    </div>
  );
}