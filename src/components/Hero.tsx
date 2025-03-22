
import React, { useEffect } from "react";
import SocialLinks from "./SocialLinks";

const Hero: React.FC = () => {
  useEffect(() => {
    // Pixel animation setup
    const canvas = document.getElementById('pixel-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Pixel properties
    const pixelSize = 20;
    const pixels: {x: number, y: number, color: string, speed: number, alpha: number}[] = [];
    
    // Generate pixels
    const generatePixels = () => {
      const cols = Math.ceil(canvas.width / pixelSize);
      const rows = Math.ceil(canvas.height / pixelSize);
      
      for (let i = 0; i < 50; i++) {
        pixels.push({
          x: Math.random() * cols * pixelSize,
          y: Math.random() * rows * pixelSize,
          color: `hsl(${263}, 90%, 51%)`,
          speed: 0.2 + Math.random() * 0.8,
          alpha: 0.1 + Math.random() * 0.2
        });
      }
    };
    
    generatePixels();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      pixels.forEach(pixel => {
        ctx.fillStyle = pixel.color.replace(')', `, ${pixel.alpha})`);
        ctx.fillRect(
          Math.floor(pixel.x / pixelSize) * pixelSize,
          Math.floor(pixel.y / pixelSize) * pixelSize,
          pixelSize,
          pixelSize
        );
        
        // Move pixels upward
        pixel.y -= pixel.speed;
        
        // Reset when out of screen
        if (pixel.y < -pixelSize) {
          pixel.y = canvas.height + pixelSize;
          pixel.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <canvas id="pixel-canvas" className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      <div className="container mx-auto section-transition z-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 mb-8">
            <div className="pixel-shadow absolute inset-0 w-full h-full rounded-full bg-primary animate-pulse opacity-30"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden pixel-border border-2 border-black dark:border-gray-700">
              <img 
                src="/lovable-uploads/5894b812-7e3d-4680-b4dc-70f725f8b573.png" 
                alt="Ankit Sinha"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">ANKIT</span> SINHA
          </h1>
          
          <p className="text-md md:text-lg mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-mono">
            <span className="inline-block h-5 w-3 bg-primary animate-blink"></span> Web Developer | Problem Solver | Creative Thinker
          </p>
          
          <p className="text-sm md:text-base mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            Jalandhar, Punjab
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
              <span className="absolute inset-0 bg-primary/10 transition-all duration-300 ease-out transform hover:scale-105 hover:translate-x-1 hover:-translate-y-1"></span>
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
              <span className="absolute inset-0 bg-gray-800/10 dark:bg-gray-200/10 transition-all duration-300 ease-out transform hover:scale-105 hover:translate-x-1 hover:-translate-y-1"></span>
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
