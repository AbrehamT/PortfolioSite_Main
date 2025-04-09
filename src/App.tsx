import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ExperienceSection from './components/sections/Experience';
import ProjectsSection from './components/sections/Projects';
import SkillsSection from './components/sections/Skills';
import ContactSection from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;