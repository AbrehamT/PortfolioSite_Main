import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="flex items-center space-x-2">
              <Code size={24} className="text-blue-400" />
              <span className="text-lg font-bold">Abreham Tadesse</span>
            </a>
            <p className="text-gray-400 mt-2">Software Engineering Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/AbrehamT" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:abrehamtadesse95@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abreham Tadesse. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ using React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 