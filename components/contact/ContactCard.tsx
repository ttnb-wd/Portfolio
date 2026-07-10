"use client";

import { motion } from "framer-motion";
import ContactLinks from "./ContactLinks";

export default function ContactCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
    >
      <ContactLinks />
    </motion.div>
  );
}