import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ExperienceSection from './components/sections/Experience';
import ProjectsSection from './components/sections/Projects';
import SkillsSection from './components/sections/Skills';
import ContactSection from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <a
        href="#home"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-chip focus:bg-ink focus:px-4 focus:py-3 focus:text-bone"
      >
        Skip to content
      </a>
      <Header />
      <main className="overflow-hidden">
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
