'use client';

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { fadeUp } from "@/lib/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 py-32"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <ExperienceHeader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <ExperienceTimeline />
        </motion.div>
      </Container>
    </section>
  );
}