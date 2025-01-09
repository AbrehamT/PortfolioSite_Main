import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Full Stack Estimating Software',
      description: 'A full-stack platform for estimating costs for large scale print jobs using AI tools',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays forecast data using external APIs',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&q=80',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Experience</h2>
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row text-black"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover"
              /> */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;