export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    caseStudy: string;
    github?: string;
    demo?: string;
    image: string;
    slides?: string;  // Google Slides embed URL
    pdf?: string;     // PDF embed URL (Google Drive preview or direct PDF)
  }
  
  export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
  }
  
  export interface Education {
    id: number;
    degree: string;
    institution: string;
    duration: string;
    description: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }