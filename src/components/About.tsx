import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
              <p className="text-lg mb-4 text-black">
              I am a passionate Computer Science student at the University of Nevada, Las Vegas, with a strong foundation in software development, machine learning, and data analysis. My experience spans building scalable web applications, leveraging large language models for automation, and conducting research to support innovative tools for neurodegenerative disease studies.
              </p>
              <p className="text-lg mb-4 text-black">
              With expertise in Python, C++, and Go, alongside frameworks like TensorFlow, Django, and Docker, I thrive in creating solutions that integrate cutting-edge technology to address real-world challenges.
              </p>
              <p className="text-lg text-black">
                I'm always eager to learn new technologies and contribute to
                meaningful projects that make a difference.
              </p>
            </div>
            <div>
              <img
                src="src/me.jpg"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;