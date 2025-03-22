
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto section-transition">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-pixel mb-4 text-gray-900 dark:text-white">
              <span className="text-primary">About</span> Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I'm Ankit Sinha, a passionate web developer and computer applications student from Punjab, India. My journey in tech is driven by creativity, problem-solving, and a commitment to building intuitive digital experiences.
            </p>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              With a foundation in HTML, CSS, JavaScript, and various frameworks, I enjoy tackling complex challenges and transforming ideas into functional, user-friendly applications. My approach combines technical expertise with an eye for design, ensuring solutions that are both powerful and beautiful.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              Currently pursuing my Bachelor's in Computer Applications with a strong academic record (CGPA: 9.81), I balance theoretical knowledge with practical experience through various projects. I'm constantly exploring new technologies and methodologies to expand my skillset and deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
