'use client';

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { fadeUp } from "@/lib/animations";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-32"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <ProjectsHeader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <ProjectsGrid />
        </motion.div>
      </Container>
    </section>
  );
}