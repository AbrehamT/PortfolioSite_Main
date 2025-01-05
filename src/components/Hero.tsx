import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Software Engineering
            <span className="block text-gray-400">Student</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Passionate about creating elegant solutions to complex problems
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AbrehamT" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-gray-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.linkedin.com/in/abreham-t-tadesse-34b78b259&ved=2ahUKEwilqpPC3d2KAxVFD0QIHe63MiMQFnoECCEQAQ&usg=AOvVaw1UWIQajt1zfc2VHJ5_vYIB" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:text-gray-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:abrehamtadesse95@gmail.com"
               className="p-2 hover:text-gray-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;