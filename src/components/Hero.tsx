import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileDown, 
  ArrowRight, 
  Cloud, 
  Server, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  GraduationCap,
  Boxes
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CloudScene3D } from './CloudScene3D';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'photo' | '3d'>('photo');

  return (
    <section 
      id="home" 
      className={`relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden ${
        darkMode ? 'bg-[#0B132B] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Decorative Cloud Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#6366f1' : '#3b82f6'} 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-none inline-block"></span>
              <span>Available for Cloud & SDE Roles (Grad 2027)</span>
            </div>

            {/* Candidate Name */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                Portfolio of
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="block text-slate-900 dark:text-white">
                  MARNI VEERA VENKATA
                </span>
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  VINAY
                </span>
              </h1>
            </div>

            {/* Title / Role */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
              <span className="flex items-center gap-1.5">
                <Cloud className="w-5 h-5 text-indigo-500" />
                Cloud Computing Engineer
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <Server className="w-4 h-4" />
                AWS
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal">
                DevOps & Architecture
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              B.Tech Cloud Computing Engineering student at <strong className="text-slate-900 dark:text-white font-semibold">Lovely Professional University</strong> with a solid foundation in building resilient multi-tier AWS architectures, containerized microservices, and database systems. Committed to designing fault-tolerant, scalable, and recruiter-friendly cloud solutions.
            </p>

            {/* Key Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {['AWS Cloud Architecture', 'Docker & CI/CD', 'Python FastAPI', 'SQL & PL/SQL', 'MongoDB'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              {/* View Projects */}
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <button
                onClick={onOpenResume}
                className={`px-5 py-3 rounded-xl font-semibold text-sm border flex items-center gap-2 transition-all active:scale-95 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800 shadow-sm'
                }`}
              >
                <FileDown className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className={`px-5 py-3 rounded-xl font-semibold text-sm border flex items-center gap-2 transition-all active:scale-95 ${
                  darkMode
                    ? 'border-indigo-500/30 text-indigo-400 hover:bg-indigo-950/40'
                    : 'border-indigo-600/30 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons with Tooltips */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-slate-600 hover:scale-105' 
                    : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:scale-105 shadow-sm'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900/90 text-blue-400 hover:text-blue-300 hover:border-blue-500 hover:scale-105' 
                    : 'border-slate-200 bg-white text-blue-600 hover:text-blue-700 hover:border-blue-400 hover:scale-105 shadow-sm'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900/90 text-indigo-400 hover:text-indigo-300 hover:border-indigo-500 hover:scale-105' 
                    : 'border-slate-200 bg-white text-indigo-600 hover:text-indigo-700 hover:border-indigo-400 hover:scale-105 shadow-sm'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Photo of Vinay + 3D Three.js Interactive Scene Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Switcher Pill Tabs: Photo vs 3D Scene */}
            <div className="mb-4 inline-flex p-1 rounded-xl bg-slate-200 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 shadow-inner">
              <button
                onClick={() => setActiveVisualTab('photo')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeVisualTab === 'photo'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Profile Photo</span>
              </button>
              <button
                onClick={() => setActiveVisualTab('3d')}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeVisualTab === '3d'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Boxes className="w-3.5 h-3.5" />
                <span>Interactive 3D Cloud</span>
              </button>
            </div>

            {/* Container for Visual Representation */}
            <div className="w-full max-w-md">
              {activeVisualTab === 'photo' ? (
                <div className="relative group">
                  {/* Subtle Glowing Aura */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 opacity-30 group-hover:opacity-50 blur-lg transition duration-500" />
                  
                  {/* Card Container */}
                  <div className={`relative rounded-2xl overflow-hidden border p-3 ${
                    darkMode 
                      ? 'bg-gradient-to-b from-slate-900 to-[#0B132B] border-slate-800 shadow-2xl' 
                      : 'bg-white border-slate-200 shadow-xl'
                  }`}>
                    {/* Vinay Marni's Photo */}
                    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                      <img 
                        src={PERSONAL_INFO.avatarUrl} 
                        alt="Vinay Marni - MARNI VEERA VENKATA VINAY"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      
                      {/* Gradient Overlay for Tag Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Floating Bottom Card over Image */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-white text-xs">
                        <div className="flex items-center justify-between font-mono">
                          <span className="font-bold text-slate-100 flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            Vinay Marni
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-300 font-semibold">
                            LPU 2027
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          Lovely Professional University
                        </p>
                      </div>
                    </div>

                    {/* Quick Metric Pills below photo */}
                    <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                      <div className={`p-2 rounded-lg border text-xs ${
                        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">6.98</div>
                        <div className="text-[10px] text-slate-500">CGPA</div>
                      </div>
                      <div className={`p-2 rounded-lg border text-xs ${
                        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="font-bold text-blue-600 dark:text-blue-400 font-mono">2027</div>
                        <div className="text-[10px] text-slate-500">Graduation</div>
                      </div>
                      <div className={`p-2 rounded-lg border text-xs ${
                        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">AWS</div>
                        <div className="text-[10px] text-slate-500">Focus</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <CloudScene3D darkMode={darkMode} />
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
