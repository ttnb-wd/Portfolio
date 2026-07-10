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
      animate={{ y: scrolled ? 0 : 6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      
      // ✅ IMPORTANT FIX: highest layer + isolation
      className="fixed inset-x-0 top-4 z-[999] px-6 isolate"
    >
      {/* OUTER GLOW */}
      <div
        className={`absolute left-1/2 top-0 h-full w-[92%] -translate-x-1/2 rounded-3xl blur-2xl transition-all duration-300 ${
          scrolled ? "bg-indigo-500/10" : "bg-indigo-500/5"
        }`}
      />

      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? 1100 : 1220,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`relative mx-auto flex items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white px-5 py-3 shadow-lg"
            : "border-slate-200 bg-white px-7 py-4 shadow-md"
        }`}
      >
        {/* Logo */}
        <motion.div
          animate={{ scale: scrolled ? 0.94 : 1 }}
          transition={{ duration: 0.25 }}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-slate-900 hover:text-indigo-600"
          >
            Portfolio
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <NavbarLinks />

        {/* Mobile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:hidden"
        >
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5 text-slate-700" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}