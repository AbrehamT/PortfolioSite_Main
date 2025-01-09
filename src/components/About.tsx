import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div> */}
            <div>
              <p className="text-lg mb-4 text-black">
                I'm a passionate Software Engineering student with a focus on web development
                and a keen interest in building scalable applications.
              </p>
              <p className="text-lg mb-4 text-black">
                Currently pursuing my degree in Computer Science, I combine academic
                knowledge with practical experience through personal projects and
                internships.
              </p>
              <p className="text-lg text-black">
                I'm always eager to learn new technologies and contribute to
                meaningful projects that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;