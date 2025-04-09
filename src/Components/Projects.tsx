import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Projects</h2>
        <p className="text-gray-400 text-center mb-12">A showcase of my technical work and case studies</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onToggle={() => setActiveProject(activeProject === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;