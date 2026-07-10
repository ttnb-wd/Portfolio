import dynamic from "next/dynamic";

// Lazy load below-the-fold sections
const About = dynamic(() => import("@/components/sections/About"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const AIWorkflow = dynamic(() => import("@/components/sections/AIWorkflow"));

// Critical components - load immediately
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <AIWorkflow />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}