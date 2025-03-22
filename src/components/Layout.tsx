
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // On component mount, add entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pixel-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-transition").forEach((section, index) => {
      section.setAttribute("style", `--index: ${index}`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
