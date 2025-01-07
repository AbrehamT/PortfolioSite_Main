import React from 'react';
import { Github, Linkedin, Mail, ScrollText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm Abreham Tadesse
            <span className="block text-gray-400 text-3xl md:text-4xl">Software Engineering Student</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Aspiring Software Engineer with a passion for Deep Learning and AI.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AbrehamT" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-gray-400 transition-colors flex flex-col items-center">
              <Github className="w-6 h-6" />
              <span className="text-xs mt-1">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:text-gray-400 transition-colors flex flex-col items-center">
              <Linkedin className="w-6 h-6" />
              <span className="text-xs mt-1">LinkedIn</span>
            </a>
            <a href="mailto:abrehamtadesse95@gmail.com"
               className="p-2 hover:text-gray-400 transition-colors flex flex-col items-center">
              <Mail className="w-6 h-6" />
              <span className="text-xs mt-1">Email</span>
            </a>
            <a href="https://docs.google.com/document/d/1jGXoC4fm4mZJzGoI0lgaHbIHVnIdEJcH2oStNE-biD0/edit?usp=sharing" rel="noopener noreferrer" target="_blank"
               className="p-2 hover:text-gray-400 transition-colors flex flex-col items-center">
              <ScrollText className="w-6 h-6" />
              <span className="text-xs mt-1">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;