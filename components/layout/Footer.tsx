"use client";

import { motion } from "framer-motion";
import FooterBrand from "@/components/footer/FooterBrand";
import FooterSocials from "@/components/footer/FooterSocials";
import FooterBottom from "@/components/footer/FooterBottom";
import FooterTech from "@/components/footer/FooterTech";
import FooterStatus from "@/components/footer/FooterStatus";
import FooterBackToTop from "@/components/footer/FooterBackToTop";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative border-t border-slate-200 bg-white"
    >
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        
        {/* TOP SECTION */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <motion.div variants={fadeUp}>
            <FooterBrand />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:justify-self-end">
            <FooterSocials />
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px bg-slate-200" />

        {/* MIDDLE - TECH */}
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center text-center">
          <FooterTech />
        </motion.div>

        {/* STATUS ROW */}
        <motion.div variants={fadeUp} className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
          <FooterStatus />
          <FooterBackToTop />
        </motion.div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-slate-200" />

        {/* BOTTOM */}
        <motion.div variants={fadeUp}>
          <FooterBottom />
        </motion.div>
      </div>
    </motion.footer>
  );
}