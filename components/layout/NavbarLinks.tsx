"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export default function NavbarLinks() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 backdrop-blur-xl" aria-label="Main navigation">
      {navItems.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        const isHovered = hovered === id;

        return (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-current={isActive ? "page" : undefined}
            aria-label={`Navigate to ${item.label} section`}
          >
            {/* PILLS */}
            {(isActive || isHovered) && (
              <motion.div
                layoutId="navbar-pill"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                className="absolute inset-[2px] rounded-full bg-blue-100 ring-1 ring-blue-300"
              />
            )}

            {/* TEXT */}
            <span
              className={`relative z-10 flex items-center justify-center transition-colors ${
                isActive || isHovered
                  ? "text-blue-700"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}