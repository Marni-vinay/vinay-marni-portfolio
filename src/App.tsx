/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CloudArchitecture } from './components/CloudArchitecture';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved) return saved === 'dark';
    return true; // Default to dark navy theme as requested
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme-mode', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#0B132B] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Top Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setIsResumeModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Hero with Photo & 3D Scene */}
        <Hero 
          darkMode={darkMode} 
          onOpenResume={() => setIsResumeModalOpen(true)} 
        />

        {/* 2. About Me */}
        <About darkMode={darkMode} />

        {/* 3. Skills */}
        <Skills darkMode={darkMode} />

        {/* 4. Projects */}
        <Projects darkMode={darkMode} />

        {/* 5. Cloud Engineering (Interactive AWS Architecture) */}
        <CloudArchitecture darkMode={darkMode} />

        {/* 6. Experience (NYERAS Edutech) */}
        <Experience darkMode={darkMode} />

        {/* 7. Certifications */}
        <Certifications darkMode={darkMode} />

        {/* 8. Resume */}
        <ResumeSection 
          darkMode={darkMode} 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
        />

        {/* 9. Contact */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* ATS Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
