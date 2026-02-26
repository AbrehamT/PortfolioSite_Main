import React from 'react';

interface Skill {
  category: string;
  items: string[];
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "C/C++", "TypeScript/JavaScript", "Matlab", "SQL"]
    },
    {
      category: "HPC & Systems",
      items: ["Linux", "SLURM", "CUDA", "HPC Workflows", "Docker", "Distributed Systems"]
    },
    {
      category: "ML Frameworks",
      items: ["PyTorch", "DeepSpeed", "NumPy", "SciPy", "HuggingFace", "TensorFlow"]
    },
    {
      category: "Robotics & Simulation",
      items: ["ROS2", "Isaac Sim", "Imitation Learning", "Diffusion Models", "SLAM", "LiDAR"]
    },
    {
      category: "AI / ML",
      items: ["LLMs", "RAG", "Weak Supervision", "Domain Adaptation", "NLP", "Reinforcement Learning"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS ECS", "GitHub Actions", "CI/CD", "Docker", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24" 
      style={{ 
        background: 'var(--section-bg-3)',
        position: 'relative',
        zIndex: 0,
        paddingBottom: '2rem'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Skills</h2>
        <p className="text-gray-400 text-center mb-12">Technologies and methodologies I work with</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-md border border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-gray-800 text-gray-300 border border-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 