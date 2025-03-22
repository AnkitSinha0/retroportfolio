
import React from "react";
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  linkText?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "Nov 2, 2023",
      linkText: "Certificate Link",
    },
    {
      title: "C Programming Course",
      issuer: "Infosys Springboard",
      date: "Oct 31, 2023",
      linkText: "Certificate Link",
    },
    {
      title: "HTML Beginner",
      issuer: "Infosys Springboard",
      date: "Oct 3, 2023",
      linkText: "Certificate Link",
    },
    {
      title: "Excel Beginner",
      issuer: "Udemy",
      date: "Mar 24, 2023",
      linkText: "Certificate Link",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto section-transition">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">My</span> Certifications
          </h2>
          <div className="w-36 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="pixel-card group hover:scale-[1.02] transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <div className="h-2 w-12 bg-primary mb-4"></div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-xs font-mono text-primary">{cert.date}</p>
                </div>
                
                {cert.linkText && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-xs text-primary hover:text-primary/80 font-mono"
                    >
                      {cert.linkText}
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
