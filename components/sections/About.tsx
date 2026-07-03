'use client';

import Container from "@/components/shared/Container";
import AboutHeader from "@/components/about/AboutHeader";
import ProfileCard from "@/components/about/ProfileCard";
import AboutContent from "@/components/about/AboutContent";
import AboutTimeline from "@/components/about/AboutTimeline";
import TechPhilosophy from "@/components/about/TechPhilosophy";
import AIWOrkflow from "@/components/about/AIWorkflow";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-slate-50 py-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <Container>
        {/* Header */}
        <motion.div variants={fadeUp}>
          <AboutHeader />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr]">
          
          {/* Profile Card */}
          <motion.div
            className="sticky top-28"
            variants={fadeUp}
          >
            <ProfileCard />
          </motion.div>

          {/* Content Stack */}
          <div className="space-y-10">
            <motion.div variants={fadeUp}>
              <AboutContent />
            </motion.div>

            <motion.div variants={fadeUp}>
              <AboutTimeline />
            </motion.div>

            <motion.div variants={fadeUp}>
              <TechPhilosophy />
            </motion.div>

            <motion.div variants={fadeUp}>
              <AIWOrkflow />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}