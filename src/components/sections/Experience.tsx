import React from 'react';

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Haig's Quality Printing",
      duration: "June 2024 - Present",
      description: [
        "Developed a full-stack Node.js application leveraging AI to automate quote generation for large-scale manufacturing jobs. Reduced quote turn around time and improved customer to client communications.",
        "Trained several Large Language Models to improve performance on automated downstream tasks for quote generation.",
        "Implemented OAuth2.0 authentication with Google and Microsoft. Designed a stateless JWT-based authorization system for secure, scalable access control.",
        "Architected CI/CD pipelines using Github Actions and deployed to AWS ECS for streamlined production and testing deployments."
      ],
      technologies: ["TypeScript", "Node.js", "Express", "MongoDB", "REST API", "Git", "AWS", "OAuth2.0", "JWT"]
    },
    {
      id: 2,
      role: "Undergraduate Researcher — DeepLearning and LLMs",
      company: "University of Nevada, Las Vegas",
      duration: "August 2021 - Present",
      description: [
        "Processing a large corpus of Alzheimer's-related literature from PubMed to build a domain-specific dataset for language model training and evaluation.",
        "Fine-tuning foundation LLMs via self-supervised learning to enhance domain understanding of biomedical language related to Alzheimer's disease.",
        "Conducting supervised training of LLMs for downstream tasks including information extraction and multi-label classification of biomedical research texts.",
        "Collaborating with interdisciplinary teams to customize models for domain-specific tasks, contributing to ongoing Alzheimer's research."
      ],
      technologies: ["Python", "PyTorch", "HuggingFace", "NLP", "Deep Learning", "LLMs", "Biomedical NLP"]
    }
  ];
  
  const education: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
      institution: "University of Nevada, Las Vegas",
      duration: "August 2021 - Present (Graduating December 2025)",
      description: "Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Web Development, Operating Systems, Computer Networks, Linear Algebra, Statistics"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Experience</h2>
        <p className="text-gray-400 text-center mb-12">My professional journey and education</p>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="text-xl font-semibold text-gray-100">{exp.role}</h4>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-gray-300">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Education</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="text-xl font-semibold text-gray-100">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.duration}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 