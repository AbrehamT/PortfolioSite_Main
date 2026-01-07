import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    <section 
      id="projects" 
      className="py-16 md:py-24" 
      style={{ 
        background: 'var(--section-bg-2)',
        position: 'relative',
        zIndex: 0,
        paddingBottom: '2rem'
      }}
    >
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
      
      {/* Render Modal via Portal */}
      {activeProject !== null && (() => {
        const project = projects.find(p => p.id === activeProject);
        if (!project) return null;
        return <CaseStudyModal project={project} onClose={() => setActiveProject(null)} />;
      })()}
    </section>
  );
};

// Modal Component rendered via Portal
const CaseStudyModal = ({ 
  project, 
  onClose 
}: { 
  project: typeof projects[0]; 
  onClose: () => void;
}) => {
  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header - Compact on mobile */}
        <div className="flex justify-between items-start gap-2 p-3 md:p-6 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base md:text-2xl font-semibold text-gray-800 leading-tight">
            {project.title}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
          >
            <X size={20} className="md:w-[22px] md:h-[22px]" />
          </button>
        </div>
        
        {/* Main Content Area - Different layout for slides (top) vs images/PDF (side) */}
        <div className={`flex flex-1 overflow-hidden ${project.slides ? 'flex-col' : 'flex-col md:flex-row'}`}>
          {/* Visual Showcase Section - Smaller on mobile */}
          <div className={`bg-gray-50 border-gray-100 flex-shrink-0 flex flex-col ${
            project.slides
              ? 'w-full border-b' 
              : 'w-full md:w-1/2 border-b md:border-b-0 md:border-r'
          }`}>
            <div className="p-2 md:p-4 pb-1 md:pb-2">
              <h4 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wide">
                {project.pdf ? 'Research Paper' : 'Visual Showcase'}
              </h4>
            </div>
            <div className={`p-2 md:p-4 pt-1 md:pt-2 flex items-center justify-center ${
              project.slides 
                ? 'h-[180px] md:h-[500px]' 
                : 'h-[150px] md:flex-1 md:min-h-[400px]'
            }`}>
              {project.pdf ? (
                <iframe
                  src={project.pdf}
                  className="w-full h-full rounded-lg border border-gray-200"
                  allowFullScreen
                  title={`${project.title} PDF`}
                />
              ) : project.slides ? (
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                  <iframe
                    src={(() => {
                      // If URL already has parameters, use as-is
                      if (project.slides.includes('?')) {
                        return project.slides;
                      }
                      // Manual navigation mode (no auto-advance)
                      return `${project.slides}?start=false&loop=false&rm=minimal`;
                    })()}
                    className="absolute border-0"
                    style={{ 
                      top: '-26px',  // Hide the top toolbar
                      left: 0,
                      width: '100%',
                      height: 'calc(100% + 26px)',
                    }}
                    allowFullScreen
                    title={`${project.title} Slides`}
                  />
                </div>
              ) : project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>
        
          {/* Modal Body - Below for slides/pdf, Right side for images */}
          <div className="flex-1 p-3 md:p-6 overflow-y-auto bg-white">
            <div className="max-w-none">
              {(project.caseStudy || '').split('\n\n').map((paragraph, index) => {
                // Check if it's a section header (single line, no bullet points, relatively short)
                const isHeader = !paragraph.includes('•') && 
                                 !paragraph.includes(':') && 
                                 paragraph.split('\n').length === 1 && 
                                 paragraph.length < 80 &&
                                 paragraph.length > 0;
                
                // Check if paragraph contains bullet points
                const hasBullets = paragraph.includes('•');
                
                if (isHeader) {
                  return (
                    <h4 key={index} className="text-base md:text-lg font-semibold mt-4 md:mt-6 mb-2 md:mb-3 text-gray-800">
                      {paragraph}
                    </h4>
                  );
                } else if (hasBullets) {
                  const lines = paragraph.split('\n').filter(line => line.trim());
                  const headerLine = lines.find(line => !line.startsWith('•'));
                  const bulletLines = lines.filter(line => line.startsWith('•'));
                  
                  return (
                    <div key={index} className="mb-3 md:mb-4">
                      {headerLine && (
                        <p className="font-medium text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">{headerLine}</p>
                      )}
                      <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                        {bulletLines.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="mr-2 text-blue-500">•</span>
                            <span>{item.replace('•', '').trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                
                return (
                  <p key={index} className="mb-3 md:mb-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Modal Footer - Compact on mobile, hide tech tags on small screens */}
        <div className="p-3 md:p-6 border-t border-gray-100 flex justify-between items-center flex-shrink-0 bg-gray-50 gap-3">
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 font-medium">
                {tech}
              </span>
            ))}
          </div>
          {/* Mobile: Show only first 3 tags in a compact format */}
          <div className="flex md:hidden flex-wrap items-center gap-1.5 flex-1 overflow-hidden">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-white text-gray-600 px-2 py-0.5 rounded-full text-xs border border-gray-200">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-gray-400 text-xs">+{project.technologies.length - 3}</span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg transition-colors font-medium text-sm md:text-base flex-shrink-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectsSection; 