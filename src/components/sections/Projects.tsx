import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
// import { Project } from '../../types';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Add event listener to close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [activeProject]);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Projects</h2>
        <p className="text-gray-400 text-center mb-12">A showcase of my technical work and case studies</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 cursor-pointer group hover:border-blue-500"
              onClick={() => setActiveProject(project.id)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-blue-300 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-all duration-300 group-hover:translate-x-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project.id);
                    }}
                  >
                    <span className="font-semibold">View Case Study</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Case Study Modal */}
      {activeProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100">
                {projects.find(p => p.id === activeProject)?.title} - Case Study
              </h3>
              <button 
                onClick={() => setActiveProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              <div className="prose max-w-none prose-invert">
                {projects.find(p => p.id === activeProject)?.caseStudy.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h4 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-100">{paragraph.replace('## ', '')}</h4>;
                  } else if (paragraph.includes('- **')) {
                    const items = paragraph.split('\n- ').filter(Boolean);
                    return (
                      <ul key={index} className="list-disc list-inside mt-4 mb-4 text-gray-300">
                        {items.map((item, itemIndex) => {
                          const boldMatch = item.match(/\*\*(.*?)\*\*/);
                          if (boldMatch) {
                            const [fullMatch, boldText] = boldMatch;
                            return (
                              <li key={itemIndex} className="mb-2">
                                <span className="font-semibold text-blue-300">{boldText}:</span>
                                {item.replace(fullMatch, '')}
                              </li>
                            );
                          }
                          return <li key={itemIndex} className="mb-2">{item}</li>;
                        })}
                      </ul>
                    );
                  } else if (paragraph.startsWith('1. **')) {
                    const items = paragraph.split('\n').filter(item => item.trim().length > 0);
                    const numberedItems = items.filter(item => /^\d+\./.test(item.trim()));
                    
                    if (numberedItems.length > 0) {
                      return (
                        <ol key={index} className="list-decimal list-inside mt-4 mb-4 text-gray-300">
                          {numberedItems.map((item, itemIndex) => {
                            // Extract the number and remove it
                            const cleanItem = item.replace(/^\d+\.\s*/, '');
                            const boldMatch = cleanItem.match(/\*\*(.*?)\*\*/);
                            
                            if (boldMatch) {
                              const [fullMatch, boldText] = boldMatch;
                              return (
                                <li key={itemIndex} className="mb-2">
                                  <span className="font-semibold text-blue-300">{boldText}:</span>
                                  {cleanItem.replace(fullMatch, '')}
                                </li>
                              );
                            }
                            return <li key={itemIndex} className="mb-2">{cleanItem}</li>;
                          })}
                        </ol>
                      );
                    }
                  }
                  return <p key={index} className="mb-4 text-gray-300">{paragraph}</p>;
                })}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-700 flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
                {projects.find(p => p.id === activeProject)?.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setActiveProject(null)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection; 