
import React from "react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  specialization?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "Lovely Professional University Punjab",
      degree: "Bachelor of Computer Applications",
      period: "2023 — 2026",
      location: "Jalandhar, Punjab",
      grade: "CGPA: 9.81",
    },
    {
      institution: "L.A Garden Public School",
      degree: "12th with Science",
      period: "2020 — 2022",
      location: "Ranchi, Jharkhand",
    },
    {
      institution: "D.A.V Public School",
      degree: "10th",
      period: "2019 — 2020",
      location: "Chaibasa, Jharkhand",
      grade: "Percentage 95.6%",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto section-transition">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
            <span className="text-primary">My</span> Education
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>

            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-2.5 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pt-5 md:pt-0`}>
                  <div className="pixel-card p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {item.institution}
                    </h3>
                    <p className="font-mono text-sm text-primary mb-2">{item.degree}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{item.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.location}</p>
                    {item.grade && (
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {item.grade}
                      </p>
                    )}
                    {item.specialization && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.specialization}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Spacer for opposite side (mobile view only) */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
