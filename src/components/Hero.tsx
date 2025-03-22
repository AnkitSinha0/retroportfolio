
import React from "react";
import SocialLinks from "./SocialLinks";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      <div className="container mx-auto section-transition">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-28 h-28 mb-8">
            <div className="pixel-shadow absolute inset-0 w-full h-full rounded bg-primary animate-pulse opacity-30"></div>
            <div className="relative w-full h-full rounded overflow-hidden pixel-border border-2 border-black dark:border-gray-700">
              <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">ANKIT</span> SINHA
          </h1>
          
          <p className="text-md md:text-lg mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-mono">
            <span className="inline-block h-5 w-3 bg-primary animate-blink"></span> Web Developer | Problem Solver | Creative Thinker
          </p>
          
          <p className="text-sm md:text-base mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Chakradharpur, Jharkhand 833102
          </p>
          
          <SocialLinks size={24} className="mb-8" />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="pixel-btn border-primary text-primary hover:bg-primary hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute inset-0 bg-primary/10 transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="pixel-btn border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-800"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute inset-0 bg-gray-800/10 dark:bg-gray-200/10 transition-all duration-300 ease-out transform group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
              <span className="relative">Contact Me</span>
            </a>
          </div>
          
          <div className="mt-12 animate-bounce">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Scroll down"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600 dark:text-gray-400"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
