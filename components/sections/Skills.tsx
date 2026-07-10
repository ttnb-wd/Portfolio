'use client';

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSkillsGrid from "@/components/skills/AnimatedSkillsGrid";
import { fadeUp } from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeader
            badge="My Skills"
            title="Technologies I Use"
            description="I build modern, responsive, and scalable web applications using cutting-edge technologies, AI-assisted workflows, and industry best practices."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <AnimatedSkillsGrid />
        </motion.div>
      </Container>
    </section>
  );
}