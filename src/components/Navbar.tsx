
import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll event to style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
        setIsMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home and then scroll
      navigate("/");
      // Use a small timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          });
          setIsMenuOpen(false);
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-pixel text-primary hover:text-primary/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              ANKIT SINHA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection("certifications")}>Certifications</NavLink>
            <NavLink onClick={() => scrollToSection("education")}>Education</NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 animate-pixel-slide-in">
            <div className="py-4 px-4 space-y-3">
              <MobileNavLink onClick={() => scrollToSection("about")}>About</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("projects")}>Projects</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("skills")}>Skills</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("certifications")}>Certifications</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("education")}>Education</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("contact")}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-mono text-sm text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </button>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full py-2 text-left font-mono text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-800"
    >
      {children}
    </button>
  );
};

export default Navbar;
