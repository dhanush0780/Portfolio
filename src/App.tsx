import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC] matrix-grid-bg relative selection:bg-[#8B5CF6]/30 selection:text-[#22D3EE]">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Technical Skills Section */}
        <SkillsSection />

        {/* 4. Featured Projects Section */}
        <ProjectsSection />

        {/* 5. Education Journey Section */}
        <EducationSection />

        {/* 6. GitHub Explore Section */}
        <GitHubSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Minimalist Footer */}
      <Footer />
    </div>
  );
}
