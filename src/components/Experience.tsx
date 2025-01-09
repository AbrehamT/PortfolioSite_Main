import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  date: string;
  bullets: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Haig's Quality Printing",
    location: "Las Vegas, NV (Remote)",
    date: "August 2024 - Present",
    bullets: [
      "Partnered with a full-time Klaviyo engineer to build font importing and storing infrastructure so that customers can use custom fonts in their Klaviyo-created content, allowing them to maintain a cohesive brand throughout their website",
      "Used React, Typescript, and Redux to build a font management interface to incorporate user's custom fonts into their content",
      "Worked on and received approval for a plan for the project architecture, including data models, type structures, and an API contract",
      "Partnered closely with Product and Design to build with the user experience in mind",
      "Wrote automated tests using React Testing Library & did extensive manual testing of each aspect of the feature"
    ]
  },
  {
    title: "Researcher and AI Software Developer for Alzheimer's Disease Research",
    company: "University of Las Vegas, Nevada",
    location: "Las Vegas, NV",
    date: "August 2024 - Present",
    bullets: [
      "Used video processing, AI, and ML to automate the labeling of babies' gaze direction in early cognition research videos",
      "Completed the CITI Program Human Research: Data or Specimens Only Research - Basic Course",
      "Discussed and outlined the ethical ramifications of the project alongside several different ethicists",
      "Created and tested several classification models to label babies' gaze direction using GCP Video Intelligence",
      "Figured out how to and wrote documentation for connecting to a Debian VM from a Windows PC with X11 forwarding",
      "Modified OpenGaze docker implementation to use X11 forwarding in order to resolve core dumping issues",
      "Wrote a Python script that takes in an OpenGaze video processing output and converts it into a properly-formatted gaze label TSV"
    ],
    link: "https://example.com/project-link"
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