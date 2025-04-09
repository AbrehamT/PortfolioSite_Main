export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    caseStudy: string;
    github?: string;
    demo?: string;
    image: string;
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