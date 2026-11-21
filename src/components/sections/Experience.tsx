import React from 'react';
import SectionHeading from '../../ui/SectionHeading';

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
    <section id="experience" className="pb-8 pt-24 md:pt-36">
      <div className="container">
        <SectionHeading
          number="01"
          title="Experience"
          subtitle="My professional journey and development"
        />

        <div className="space-y-20 md:space-y-28">
          <div>
            <h3 className="label mb-2 text-muted">Work Experience</h3>
            <ol>
              {experiences.map((exp) => (
                <li
                  key={exp.id}
                  className="grid grid-cols-1 gap-3 border-t border-hairline py-10 md:grid-cols-12 md:gap-10 md:py-14"
                >
                  <p className="label text-muted md:col-span-3 md:pt-1.5">{exp.duration}</p>
                  <div className="md:col-span-9">
                    <h4 className="text-[1.375rem] font-semibold leading-snug tracking-[-0.01em] text-ink md:text-[1.75rem]">
                      {exp.role}
                    </h4>
                    <p className="mt-1 text-lg font-medium text-accent md:text-xl">{exp.company}</p>
                    <ul className="mt-6 space-y-3">
                      {exp.description.map((item, index) => (
                        <li key={index} className="flex gap-3 leading-relaxed text-ink-2 md:text-lg">
                          <span aria-hidden="true" className="select-none pt-[0.05em] text-accent">&ndash;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="label mb-2 text-muted">Education</h3>
            <ol>
              {education.map((edu) => (
                <li
                  key={edu.id}
                  className="grid grid-cols-1 gap-3 border-t border-hairline py-10 md:grid-cols-12 md:gap-10 md:py-14"
                >
                  <p className="label text-muted md:col-span-3 md:pt-1.5">{edu.duration}</p>
                  <div className="md:col-span-9">
                    <h4 className="text-[1.375rem] font-semibold leading-snug tracking-[-0.01em] text-ink md:text-[1.75rem]">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-lg font-medium text-accent md:text-xl">{edu.institution}</p>
                    <p className="mt-5 leading-relaxed text-ink-2 md:text-lg">{edu.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
