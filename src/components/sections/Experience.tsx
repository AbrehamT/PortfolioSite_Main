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
      role: "Software Engineer Intern — Embedded & Scientific Programming",
      company: "Nautilus X-Ray",
      duration: "May 2025 - Aug 2025",
      description: [
        "Developed custom non-linear optimization algorithms (Levenberg–Marquardt, gradient-based) to calibrate source and detector positions in a novel CT scanner, improving accuracy of motion capture systems.",
        "Modeled CT imaging calibration as a non-linear system, reducing model residual error by 30% and improving calibration stability under noise.",
        "Transformed spatial model parameters into frequency domain, accelerating convergence of numeric optimization and cutting compute time by over 50%.",
        "Developed C++ drivers & control interfaces for real-time motion control of an 800lbs. plate spinning at over 200 RPM. Ensured motor control safety, latency constraints, and synchronized motion/imaging capture."
      ],
      technologies: ["C++", "Python", "Numerical Optimization", "Signal Processing", "Embedded Systems"]
    },
    {
      id: 2,
      role: "Software Engineer — AI/ML & Cloud Systems",
      company: "Haig's Quality Printing",
      duration: "May 2024 - May 2025",
      description: [
        "Developed & deployed a full-stack application leveraging Generative AI to automate quote generation for large-scale manufacturing jobs, reducing quote turnaround time by 50%.",
        "Achieved ≈90% classification accuracy by fine-tuning LLMs on company and public data for automated quote generations.",
        "Deployed LLM Agents using Model Context Protocol (MCP) on AWS ECS to simplify the user onboarding process.",
        "Architected CI/CD pipelines using Docker, GitHub Actions, and AWS ECS — enabling rapid and reliable production deployments."
      ],
      technologies: ["TypeScript", "Node.js", "AWS ECS", "Docker", "GitHub Actions", "LLMs", "MCP"]
    },
    {
      id: 3,
      role: "Undergraduate Researcher — Applied AI for Biomedical Systems",
      company: "University of Nevada, Las Vegas",
      duration: "Aug 2024 - Present",
      description: [
        "Contributed to a $3.2M federally funded Biomarker Observatory by developing scalable data analysis pipelines and tools, supporting interdisciplinary research into Alzheimer's biomarkers.",
        "Engineered data-generation pipelines utilizing retrieval-augmented generation (RAG) and weak-supervision to curate a large set of annotated data for model training — resulting in a 50% drop in the time required for manual data-labeling.",
        "Achieved ≈90% classification accuracy on 10,000+ research papers from PubMed Central by fine-tuning Large Language Models for domain adaptation."
      ],
      technologies: ["Python", "PyTorch", "HuggingFace", "RAG", "NLP", "Deep Learning", "HPC"]
    },
  ];

  
  const education: Education[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University of Nevada, Las Vegas",
      duration: "Jan 2026 – Present",
      description: "Graduate studies in Computer Science with focus on AI/ML and systems research."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nevada, Las Vegas",
      duration: "Aug 2021 – Dec 2025",
      description: "Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Operating Systems, Computer Networks, Linear Algebra, Statistics"
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-16 md:py-24" 
      style={{ 
        background: 'var(--section-bg-1)',
        position: 'relative',
        zIndex: 0,
        paddingBottom: '2rem'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Experience</h2>
        <p className="text-gray-400 text-center mb-12">My professional journey and development</p>
        
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
