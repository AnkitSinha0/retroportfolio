
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string;
  github?: string;
  liveSite?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Learning Platform",
      period: "Aug 28, 2024 — Present",
      description: [
        "Developing a E-learning Platform to facilitate Online Learning for Students. Creating responsive and interactive web pages with HTML5, CSS3.",
        "Developing JavaScript components to handle interactive elements like quizzes, progress bars, and video lessons.",
        "Tracking development progress using Git for code management and collaboration.",
        "Implementing a SQL database for managing course content, user information, and progress tracking."
      ],
      technologies: "HTML, CSS3, JavaScript, SQL, Git",
    },
    {
      title: "Solid Waste Management",
      period: "Oct 25, 2023 — Dec 5, 2023",
      description: [
        "Designed a Website of Solid Waste Management to raise awareness about waste management. Ensured cross-device compatibility and responsiveness by using HTML, CSS3.",
        "Integrated Dynamic features using JavaScript.",
        "Configured continuous deployment using GitHub and Netlify. Utilized Netlify's platform for east hosting and managing deployment.",
        "Managed Version Control using Git."
      ],
      technologies: "HTML, CSS3, JavaScript, Netlify, Git",
      github: "https://github.com/AnkitSinha0/solid-waste-mangement",
    },
    {
      title: "Railway Booking Platform",
      period: "Nov 2, 2022 — Dec 15, 2022",
      description: [
        "Designed a Website for Railway Ticket Booking and Management. Integrated a responsive interface with HTML5 and CSS3, ensuring optimal performance across various devices and screen sizes.",
        "Leveraged CSS3 for clean layouts, animations, and a visually engaging experience. Ensured cross-browser compatibility and optimized performance.",
        "Hosted and managed the project on Vercel with seamless integration and automated deployments."
      ],
      technologies: "HTML, CSS, Vercel",
      github: "https://github.com/AnkitSinha0/Railway-Booking-Format-",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto section-transition">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">My</span> Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="pixel-card group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveSite && (
                      <a 
                        href={project.liveSite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                        aria-label="Live Site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block text-xs font-mono px-2 py-1 bg-primary/10 text-primary rounded">
                    {project.period}
                  </span>
                </div>
                
                <ul className="mb-4 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies:</span> {project.technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
