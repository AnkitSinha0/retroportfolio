
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface SocialLinksProps {
  variant?: "default" | "vertical" | "spaced";
  size?: number;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = "default",
  size = 20,
  className = "",
}) => {
  const links = [
    {
      name: "Email",
      href: "mailto:ankits0057@gmail.com",
      icon: <Mail size={size} />,
      label: "ankits0057@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ankit-sinha-267789252/",
      icon: <Linkedin size={size} />,
      label: "linkedin.com/in/ankit-sinha-267789252/",
    },
    {
      name: "GitHub",
      href: "https://github.com/AnkitSinha0",
      icon: <Github size={size} />,
      label: "github.com/AnkitSinha0",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/reaper_787",
      icon: <Twitter size={size} />,
      label: "@reaper_787",
    },
  ];

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col space-y-4 ${className}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <span className="mr-2">{link.icon}</span>
            <span className="text-sm font-mono">{link.label}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === "spaced") {
    return (
      <div className={`flex flex-wrap gap-4 items-center ${className}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transform hover:scale-110 transition-all duration-300"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
