"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        y: scrolled ? 0 : 6,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-4 z-50 px-6"
    >
      {/* OUTER GLOW LAYER (IMPORTANT FIX) */}
      <div
        className={`absolute left-1/2 top-0 h-full w-[92%] -translate-x-1/2 rounded-3xl blur-2xl transition-all duration-300 ${
          scrolled ? "bg-cyan-500/10" : "bg-cyan-500/5"
        }`}
      />

      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? 1100 : 1220,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`relative mx-auto flex items-center justify-between rounded-2xl border backdrop-blur-3xl transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-zinc-900/80 px-5 py-3 shadow-2xl shadow-cyan-500/20"
            : "border-white/10 bg-zinc-900/60 px-7 py-4 shadow-xl shadow-cyan-500/10"
        }`}
      >
        {/* Logo */}
        <motion.div
          animate={{
            scale: scrolled ? 0.94 : 1,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white transition-colors duration-300 hover:text-cyan-400"
          >
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <NavbarLinks />

        {/* Mobile */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5 text-white" />
        </Button>
      </motion.div>
    </motion.header>
  );
}