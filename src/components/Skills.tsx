
import React from "react";
import { 
  Code, Terminal, Database, Coffee, Layout, 
  Figma, GitBranch, Github, Cpu, FileJson
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "C++", icon: <Terminal className="h-5 w-5 text-primary" /> },
    { name: "C", icon: <Terminal className="h-5 w-5 text-primary" /> },
    { name: "JavaScript", icon: <Code className="h-5 w-5 text-yellow-500" /> },
    { name: "HTML", icon: <Code className="h-5 w-5 text-orange-500" /> },
    { name: "CSS", icon: <Code className="h-5 w-5 text-blue-500" /> },
    { name: "SQL", icon: <Database className="h-5 w-5 text-green-500" /> },
    { name: "JAVA", icon: <Coffee className="h-5 w-5 text-red-500" /> },
    { name: "Bootstrap 5", icon: <Layout className="h-5 w-5 text-purple-500" /> },
    { name: "Figma", icon: <Figma className="h-5 w-5 text-pink-500" /> },
    { name: "Git", icon: <GitBranch className="h-5 w-5 text-orange-600" /> },
    { name: "GitHub", icon: <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" /> },
    { name: "Tailwind", icon: <Cpu className="h-5 w-5 text-blue-400" /> },
    { name: "TypeScript", icon: <FileJson className="h-5 w-5 text-blue-600" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto section-transition">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">Technical</span> Skills
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card px-4 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 bg-white dark:bg-gray-800 p-3 rounded-full border border-gray-200 dark:border-gray-700">
                  {skill.icon}
                </div>
                <span className="font-mono text-sm text-center text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg pixel-shadow border-2 border-black dark:border-gray-700">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Skill Proficiency
            </h3>
            
            <div className="space-y-6">
              <SkillBar skill="HTML & CSS" percentage={90} />
              <SkillBar skill="JavaScript" percentage={85} />
              <SkillBar skill="C++" percentage={80} />
              <SkillBar skill="SQL" percentage={70} />
              <SkillBar skill="Git & GitHub" percentage={85} />
              <SkillBar skill="Problem Solving" percentage={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="font-mono text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden pixel-border">
        <div 
          className="h-full bg-primary transition-all duration-1000 ease-out origin-left" 
          style={{ width: `${percentage}%`, animation: "animate-pixel-slide-in 1s ease-out" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
