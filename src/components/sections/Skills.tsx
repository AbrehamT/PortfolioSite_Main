import React from 'react';
import SectionHeading from '../../ui/SectionHeading';

interface Skill {
  category: string;
  items: string[];
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript/JavaScript", "C/C++", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "PyTorch", "HuggingFace", "Express", "TensorFlow"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Git", "GitHub Actions", "Docker", "CI/CD", "JWT"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Machine Learning",
      items: ["Deep Learning", "LLMs", "Computer Vision", "NLP", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="pb-8 pt-24 md:pt-36">
      <div className="container">
        <SectionHeading
          number="03"
          title="Skills"
          subtitle="Technologies and methodologies I work with"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="rounded-card border border-hairline bg-paper p-6 md:p-7">
              <p className="label text-accent">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="display mt-3 text-[2rem] text-ink md:text-[2.25rem]">{skillGroup.category}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="chip bg-bone">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
