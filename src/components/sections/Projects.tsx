import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
// import { Project } from '../../types';
import { projects } from '../../data/projects';
import SectionHeading from '../../ui/SectionHeading';

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
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="pb-8 pt-24 md:pt-36">
      <div className="container">
        <SectionHeading
          number="02"
          title="Projects"
          subtitle="A showcase of my technical work and case studies"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-card border border-hairline bg-paper transition-colors hover:border-ink"
              onClick={() => setActiveProject(project.id)}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-bone">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className="label absolute left-3 top-3 rounded-chip bg-paper/90 px-2 py-1 text-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="display text-[1.9rem] text-ink">{project.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{project.description}</p>
                <div className="mb-6 mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="chip">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="chip text-muted">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-hairline pt-3">
                  <button
                    type="button"
                    className="label -ml-1 flex min-h-[44px] items-center gap-2 px-1 text-accent hover:text-accent-hover"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project.id);
                    }}
                  >
                    View Case Study
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-chip text-muted hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} aria-hidden="true" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} demo`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-chip text-muted hover:text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
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

// Render **bold** spans inside case-study text
const renderInline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const bulletRe = /^\s*(?:•|-)\s+/;
const numberRe = /^\s*(\d+)\.\s+/;

// Modal Component rendered via Portal
const CaseStudyModal = ({
  project,
  onClose
}: {
  project: typeof projects[0];
  onClose: () => void;
}) => {
  const [slidesActive, setSlidesActive] = useState(false);
  const [drawioActive, setDrawioActive] = useState(false);

  const hasDrawio = !!(project.drawio && project.drawio.trim());
  const interactHint =
    'label rounded-chip border border-hairline bg-paper/95 px-3 py-2 text-ink opacity-0 transition-opacity group-hover:opacity-100';

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/50 p-2 backdrop-blur-sm animate-fadeIn md:p-4"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-card border border-hairline bg-paper text-ink animate-slideIn md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-shrink-0 items-start justify-between gap-3 border-b border-hairline px-4 py-3 md:px-6 md:py-5">
          <div className="min-w-0">
            <p className="label text-accent">Case Study</p>
            <h3 id="case-study-title" className="display mt-1.5 text-[1.6rem] text-ink md:text-[2.5rem]">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="-mr-2 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-chip text-muted transition-colors hover:bg-bone hover:text-ink"
          >
            <X size={22} />
          </button>
        </div>

        {/* Main Content Area - Different layout for slides/drawio (top) vs images/PDF (side) */}
        <div className={`flex flex-1 overflow-hidden ${(project.slides || hasDrawio) ? 'flex-col' : 'flex-col md:flex-row'}`}>
          {/* Visual Showcase Section */}
          <div className={`flex flex-shrink-0 flex-col border-hairline bg-bone ${
            (project.slides || hasDrawio)
              ? 'w-full border-b'
              : 'w-full border-b md:w-1/2 md:border-b-0 md:border-r'
          }`}>
            <div className="px-3 pb-1 pt-3 md:px-5 md:pb-2 md:pt-4">
              <h4 className="label text-muted">
                {project.pdf ? 'Research Paper' : hasDrawio ? 'Architecture Diagram' : 'Visual Showcase'}
              </h4>
            </div>
            <div className={`flex items-center justify-center p-2 pt-1 md:p-5 md:pt-2 ${
              project.slides
                ? 'h-[180px] md:h-[320px]'
                : hasDrawio
                ? 'h-[200px] md:h-[350px]'
                : 'h-[170px] md:min-h-[400px] md:flex-1'
            }`}>
              {project.pdf ? (
                <iframe
                  src={project.pdf}
                  className="h-full w-full rounded-chip border border-hairline bg-paper"
                  allowFullScreen
                  title={`${project.title} PDF`}
                />
              ) : hasDrawio && project.drawio ? (
                <div className="relative h-full w-full overflow-hidden rounded-chip border border-hairline bg-white">
                  <iframe
                    src={(() => {
                      const drawio = project.drawio as string;
                      // If it's already a draw.io viewer URL, use as-is
                      if (drawio.includes('viewer.diagrams.net')) {
                        return drawio;
                      }
                      // If it's a Google Drive link, convert it
                      if (drawio.includes('drive.google.com')) {
                        // Extract file ID from Google Drive URL
                        const fileIdMatch = drawio.match(/\/d\/([a-zA-Z0-9_-]+)/);
                        if (fileIdMatch) {
                          const fileId = fileIdMatch[1];
                          return `https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=diagram.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D${fileId}`;
                        }
                      }
                      // If it's a direct URL to a .drawio file, use the viewer
                      return `https://viewer.diagrams.net/?url=${encodeURIComponent(drawio)}`;
                    })()}
                    className="h-full w-full"
                    style={{ pointerEvents: drawioActive ? 'auto' : 'none' }}
                    allowFullScreen
                    title={`${project.title} Diagram`}
                  />
                  {/* Overlay to allow scrolling - click to interact with diagram */}
                  {!drawioActive && (
                    <div
                      className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-ink/0 transition-colors hover:bg-ink/5"
                      onClick={() => setDrawioActive(true)}
                    >
                      <div className={interactHint}>Click to interact with diagram</div>
                    </div>
                  )}
                </div>
              ) : project.slides ? (
                <div className="relative h-full w-full overflow-hidden rounded-chip border border-hairline">
                  <iframe
                    src={(() => {
                      const slides = project.slides as string;
                      // If URL already has parameters, use as-is
                      if (slides.includes('?')) {
                        return slides;
                      }
                      // Manual navigation mode (no auto-advance)
                      return `${slides}?start=false&loop=false&rm=minimal`;
                    })()}
                    className="absolute border-0"
                    style={{
                      top: '-26px',  // Hide the top toolbar
                      left: 0,
                      width: '100%',
                      height: 'calc(100% + 26px)',
                      pointerEvents: slidesActive ? 'auto' : 'none',
                    }}
                    allowFullScreen
                    title={`${project.title} Slides`}
                  />
                  {/* Overlay to allow scrolling - click to interact with slides */}
                  {!slidesActive && (
                    <div
                      className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-ink/0 transition-colors hover:bg-ink/5"
                      onClick={() => setSlidesActive(true)}
                    >
                      <div className={interactHint}>Click to interact with slides</div>
                    </div>
                  )}
                </div>
              ) : project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-chip object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>

          {/* Modal Body - Below for slides/pdf, Right side for images */}
          <div
            className="flex-1 overflow-y-auto bg-paper px-4 py-5 md:px-8 md:py-7"
            onClick={() => {
              if (slidesActive) setSlidesActive(false);
              if (drawioActive) setDrawioActive(false);
            }}
          >
            <div className="max-w-3xl">
              {(project.caseStudy || '').split('\n\n').map((rawParagraph, index) => {
                const paragraph = rawParagraph.trim();
                if (!paragraph) return null;

                // Section header: "## Title", or a single short line with no bullets/colons
                const isMarkdownHeader = paragraph.startsWith('## ');
                const isHeader = isMarkdownHeader || (
                  !paragraph.includes('•') &&
                  !paragraph.includes(':') &&
                  paragraph.split('\n').length === 1 &&
                  paragraph.length < 80
                );

                if (isHeader) {
                  return (
                    <h4
                      key={index}
                      className={`display text-[1.6rem] text-ink md:text-[1.9rem] ${index === 0 ? 'mt-0' : 'mt-8 md:mt-10'} mb-3`}
                    >
                      {paragraph.replace(/^##\s+/, '')}
                    </h4>
                  );
                }

                const lines = paragraph.split('\n').filter(line => line.trim());
                const hasList = lines.some(line => bulletRe.test(line) || numberRe.test(line));

                if (hasList) {
                  return (
                    <div key={index} className="mb-5 space-y-2 text-[15px] leading-relaxed text-ink-2 md:text-base">
                      {lines.map((line, lineIndex) => {
                        const numberMatch = line.match(numberRe);
                        if (numberMatch) {
                          return (
                            <p key={lineIndex} className="flex gap-3 pt-1 font-medium text-ink">
                              <span className="label pt-[0.3em] text-accent">{numberMatch[1].padStart(2, '0')}</span>
                              <span>{renderInline(line.replace(numberRe, ''))}</span>
                            </p>
                          );
                        }
                        if (bulletRe.test(line)) {
                          const indented = /^\s{2,}/.test(line);
                          return (
                            <p key={lineIndex} className={`flex gap-3 ${indented ? 'pl-8' : ''}`}>
                              <span aria-hidden="true" className="select-none text-accent">&ndash;</span>
                              <span>{renderInline(line.replace(bulletRe, ''))}</span>
                            </p>
                          );
                        }
                        return (
                          <p key={lineIndex} className="font-medium text-ink">
                            {renderInline(line.trim())}
                          </p>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <p key={index} className="mb-4 leading-relaxed text-ink-2 md:text-[17px]">
                    {renderInline(paragraph)}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-shrink-0 items-center justify-between gap-3 border-t border-hairline bg-bone px-4 py-3 md:px-6 md:py-4">
          <div className="hidden flex-wrap items-center gap-2 md:flex">
            {project.technologies.map((tech, index) => (
              <span key={index} className="chip bg-paper">
                {tech}
              </span>
            ))}
          </div>
          {/* Mobile: Show only first 3 tags in a compact format */}
          <div className="flex flex-1 flex-wrap items-center gap-1.5 overflow-hidden md:hidden">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="chip bg-paper">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="label text-muted">+{project.technologies.length - 3}</span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm btn-ink flex-shrink-0"
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
