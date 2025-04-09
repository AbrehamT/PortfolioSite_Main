import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onToggle: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onToggle }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-700">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
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
        {/* Actions */}
        <div className="flex justify-between">
          <button 
            onClick={onToggle}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            {isActive ? 'Hide Case Study' : 'View Case Study'}
          </button>
          <div className="flex items-center gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
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
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Case study section */}
      {isActive && (
        <div className="px-6 py-4 border-t border-gray-700">
          <div className="prose max-w-none prose-invert">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Case Study</h4>
            {project.caseStudy.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h5 key={index} className="text-lg font-semibold mt-4 mb-2 text-gray-200">{paragraph.replace('## ', '')}</h5>;
              } else if (paragraph.includes('- **')) {
                const items = paragraph.split('\n- ').filter(Boolean);
                return (
                  <ul key={index} className="list-disc list-inside mt-2 mb-4 text-gray-300">
                    {items.map((item, itemIndex) => {
                      const boldMatch = item.match(/\*\*(.*?)\*\*/);
                      if (boldMatch) {
                        const [fullMatch, boldText] = boldMatch;
                        return (
                          <li key={itemIndex} className="mb-1">
                            <span className="font-semibold text-blue-300">{boldText}:</span>
                            {item.replace(fullMatch, '')}
                          </li>
                        );
                      }
                      return <li key={itemIndex} className="mb-1">{item}</li>;
                    })}
                  </ul>
                );
              } else if (paragraph.startsWith('1. **')) {
                const items = paragraph.split('\n').filter(item => item.trim().length > 0);
                const numberedItems = items.filter(item => /^\d+\./.test(item.trim()));
                
                if (numberedItems.length > 0) {
                  return (
                    <ol key={index} className="list-decimal list-inside mt-2 mb-4 text-gray-300">
                      {numberedItems.map((item, itemIndex) => {
                        // Extract the number and remove it
                        const cleanItem = item.replace(/^\d+\.\s*/, '');
                        const boldMatch = cleanItem.match(/\*\*(.*?)\*\*/);
                        
                        if (boldMatch) {
                          const [fullMatch, boldText] = boldMatch;
                          return (
                            <li key={itemIndex} className="mb-1">
                              <span className="font-semibold text-blue-300">{boldText}:</span>
                              {cleanItem.replace(fullMatch, '')}
                            </li>
                          );
                        }
                        return <li key={itemIndex} className="mb-1">{cleanItem}</li>;
                      })}
                    </ol>
                  );
                }
              }
              return <p key={index} className="mb-4 text-gray-300">{paragraph}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;