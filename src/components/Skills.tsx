
import React from "react";

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["C++", "C", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      name: "Technologies/Frameworks",
      skills: ["Git", "GitHub", "Vercel", "Netlify"],
    },
    {
      name: "Skills",
      skills: ["Data Structures and Algorithms", "Problem-Solving", "Responsive Web Design", "Scripting in JavaScript"],
    },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-mono text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
