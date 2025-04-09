import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-blue-400">Abreham Tadesse</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Software Engineer
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Computer Science student at University of Nevada, Las Vegas with experience in full-stack development, AI/ML, and embedded systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border border-blue-500 text-blue-400 hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-6xl font-bold">
              AT
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8">
          <a href="https://github.com/AbrehamT" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:abrehamtadesse95@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="http://www.abrehamtadesse.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <FileText size={20} />
            <span>Website</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 