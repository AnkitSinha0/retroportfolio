
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-3xl font-pixel text-white">
            <span className="text-primary">ANKIT</span> SINHA
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#certifications">Certifications</FooterLink>
            <FooterLink href="#education">Education</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
          
          <SocialLinks className="my-6" />
          
          <div className="text-sm text-gray-400 text-center">
            <p>&copy; {currentYear} Ankit Sinha. All rights reserved.</p>
            <p className="mt-2">
              <span className="inline-block h-3 w-3 bg-primary animate-pulse rounded-full mr-2"></span>
              Made with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-mono"
    >
      {children}
    </a>
  );
};

export default Footer;
