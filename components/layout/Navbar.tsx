"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

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
      {/* OUTER GLOW LAYER */}
      <div
        className={`absolute left-1/2 top-0 h-full w-[92%] -translate-x-1/2 rounded-3xl blur-2xl transition-all duration-300 ${
          scrolled ? "bg-blue-500/8" : "bg-blue-500/5"
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
            ? "border-slate-200 bg-white/95 px-5 py-3 shadow-lg shadow-blue-500/10"
            : "border-slate-200 bg-white/90 px-7 py-4 shadow-md shadow-blue-500/5"
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
            className="text-xl font-bold tracking-wide text-slate-900 transition-colors duration-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md"
            aria-label="Portfolio homepage"
          >
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <NavbarLinks />

        {/* Mobile */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" 
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <Menu className="h-5 w-5 text-slate-700" aria-hidden="true" />
        </Button>
      </motion.div>
    </motion.header>
  );
}