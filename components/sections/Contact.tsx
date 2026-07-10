'use client';

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactCard from "@/components/contact/ContactCard";
import ContactCTA from "@/components/contact/ContactCTA";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-slate-50 py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <motion.div variants={fadeUp}>
          <ContactHeader />
        </motion.div>
        
        <motion.div className="mt-12" variants={fadeUp}>
          <ContactCard />
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <ContactCTA />
        </motion.div>
      </Container>
    </motion.section>
  );
}