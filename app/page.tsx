import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import AIWorkflow from "@/components/sections/AIWorkflow";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <AIWorkflow/>
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}