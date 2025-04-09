import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  date: string;
  bullets: string[];
  link?: string;
  impact?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Haig's Quality Printing",
    location: "Las Vegas, NV (Hybrid)",
    date: "June 2024 - Present",
    bullets: [
      "Developing a comprehensive end-to-end application leveraging Large Language Models to optimize quote generation for large scale manufacturing jobs.",
      "Using Typescript to build a scalable backend API that handles authentication, and integrates with a frontend React application.",
      // "Creating AI agents using LLMs and other Machine Learning models to automate the quote generation process.",
      "Set up, managed and deployed to several AWS EC2 instances.",
      "Created a CI-CD pipeline using GitHub Actions for automated testing and deployment.",
    ],
    impact: "The apps automated quote generation system greatly improved the quote generation process for large scale jobs. Additionally, its CRM capabilities improved customer management and increased sales."
  },
  {
    title: "Austonomous Systems Engineer Intern",
    company: "Haig's Quality Printing",
    location: "Las Vegas, NV (Hybrid)",
    date: "August 2024 - Present",
    bullets: [
      "Contributed to the development of a robust pipeline of vision models for enabling autonomous systems to perform complex, dexterous tasks in a manufacturing environment.",
      "Collected and processed 3D PointCloud data using StereoVision cameras, training PointNet models for object classification and image segmentation.",
      "Researched Reinforcement Learning algorithms, including Markov Decision Processes and Deep-Q-Network architectures, to map vision model outputs to agent actions, enhancing decision-making capabilities."
    ],
  },
  {
    title: "Researcher and AI Software Developer for Alzheimer's Disease Research",
    company: "University of Las Vegas, Nevada",
    location: "Las Vegas, NV",
    date: "August 2024 - Present",
    "bullets": [
      "Assisted in the development of an LLM-powered chatbot to support researchers in neurodegenerative disease studies.",
      "Performed large-scale text mining on medical research papers to train LLMs for domain-specific tasks.",
      "Designed and implemented pipelines to enable efficient retrieval and analysis of research data.",
      "Collaborated with cross-functional teams to enhance productivity and decision-making for research projects.",
      "Created and tested machine learning models to streamline information extraction and question answering.",
      "Documented workflows and methodologies to support future developments in AI research."
    ],
    // link: "https://example.com/project-link"
    impact: "The project enhances research efficiency, enabling faster discoveries and better data analysis in neurodegenerative disease studies. By supporting researchers with AI tools, it accelerates treatment development and improves patient outcomes while advancing medical knowledge."
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-black text-center">Experience</h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-0 md:left-8 top-0 h-full w-px bg-gray-200" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 md:pl-24">
                <div className="absolute left-[-10px] md:left-7 top-0 w-[18px] h-[18px] rounded-full bg-gray-300 border-4 border-white" />
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-1 text-black">{experience.title}</h3>
                  <div className="text-gray-600 italic mb-4">
                    {experience.company} | {experience.location} | {experience.date}
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {experience.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  {experience.impact && (
                    <div className="mt-4">
                      <h4 className="font-bold text-black mb-2">Impact</h4>
                      <p className="text-gray-700">{experience.impact}</p>
                    </div>
                  )}
                  {experience.link && (
                    <div className="mt-4">
                      View the open-source project my work was added to{' '}
                      <a href={experience.link} className="text-blue-600 hover:text-blue-800">
                        here
                      </a>
                      .
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
