import React from 'react';
import Header from './Components/layout/Header';
import Hero from './Components/sections/Hero';
import ExperienceSection from './Components/sections/Experience';
import ProjectsSection from './Components/sections/Projects';
import SkillsSection from './Components/sections/Skills';
import ContactSection from './Components/sections/Contact';
import Footer from './Components/layout/Footer';
import SectionTransition from './Components/layout/SectionTransition';
import './App.css';

const App = () => {
  return (
    <div 
      className="min-h-screen text-gray-200"
      style={{
        // Theme color variables
        '--hero-bg': '#111827', // from-gray-900
        '--section-bg-1': '#1F2937', // bg-gray-800
        '--section-bg-2': '#111827', // bg-gray-900
        '--section-bg-3': '#1F2937', // bg-gray-800
        '--contact-bg': '#111827', // bg-gray-900
        '--footer-bg': '#111827', // bg-gray-900
      } as React.CSSProperties}
    >
      <Header />
      <main className="overflow-hidden">
        <Hero />
        
        {/* Hero to Experience transition */}
        <SectionTransition fromColor="hero-bg" toColor="section-bg-1" height="90px" />
        
        <ExperienceSection />
        
        {/* Experience to Projects transition */}
        <SectionTransition fromColor="section-bg-1" toColor="section-bg-2" height="90px" />
        
        <ProjectsSection />
        
        {/* Projects to Skills transition */}
        <SectionTransition fromColor="section-bg-2" toColor="section-bg-3" height="90px" />
        
        <SkillsSection />
        
        {/* Skills to Contact transition */}
        <SectionTransition fromColor="section-bg-3" toColor="contact-bg" height="90px" />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;