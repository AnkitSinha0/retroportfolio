
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "Ankit Sinha | Portfolio";
    
    // Add the background grid pattern
    const style = document.createElement("style");
    style.textContent = `
      .bg-grid-pattern {
        background-size: 50px 50px;
        background-image: 
          linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </Layout>
  );
};

export default Index;
