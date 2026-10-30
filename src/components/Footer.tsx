import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Cloud, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-[#070D1F] border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white font-mono text-xs">
                VM
              </span>
              <span>{PERSONAL_INFO.fullName}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              B.Tech Cloud Computing Engineering Student at Lovely Professional University (Graduation 2027). Specializing in high-availability AWS architecture, backend microservices, and database engineering.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#home" className="hover:text-indigo-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-500 transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-indigo-500 transition-colors">Cloud Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-500 transition-colors">System Projects</a></li>
              <li><a href="#cloud" className="hover:text-indigo-500 transition-colors">AWS Architecture</a></li>
              <li><a href="#experience" className="hover:text-indigo-500 transition-colors">Experience & Certs</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Connect With Vinay
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} MARNI VEERA VENKATA VINAY • Lovely Professional University
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
