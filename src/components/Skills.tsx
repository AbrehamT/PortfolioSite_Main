import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C/C++', 'Python', 'TypeScript', 'C#', 'SQL']
    },
    {
      title: 'ML/DeepLearning',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'ROS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'ASP.NET', 'REST APIs']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'Postman', 'Amazon Web Services']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;