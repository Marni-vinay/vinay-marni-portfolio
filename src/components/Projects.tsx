import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight,
  Database,
  Cpu,
  BarChart3,
  Bot
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Full-Stack':
        return <BarChart3 className="w-4 h-4 text-indigo-400" />;
      case 'Cloud & API':
        return <Bot className="w-4 h-4 text-sky-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Frontend':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B]/90 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Projects & System Implementations
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-world full-stack architectures, financial APIs, relational database triggers, and workflow tracking solutions.
          </p>
        </div>

        {/* Projects Grid: 2x2 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Header: Category Badge + Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-xs font-mono font-semibold text-indigo-500 dark:text-indigo-400">
                      {project.category}
                    </span>
                  </div>

                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 font-mono">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Flow Banner */}
                {project.architecture && (
                  <div className={`p-3 rounded-xl border text-[11px] font-mono ${
                    darkMode ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                    <span className="text-[10px] text-indigo-500 dark:text-indigo-400 uppercase tracking-wider block font-bold mb-1">
                      Data & Architecture Flow:
                    </span>
                    <div className="overflow-x-auto whitespace-nowrap py-0.5">
                      {project.architecture}
                    </div>
                  </div>
                )}

                {/* Key Engineering Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Engineering Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Tech Stack & Actions */}
              <div className="pt-6 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-[11px] font-mono border ${
                        darkMode 
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300' 
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center gap-2 transition-all active:scale-95 shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    <div className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                      Cloud Architecture Repository
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border ml-auto transition-all ${
                      darkMode 
                        ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                        : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`w-full max-w-2xl rounded-2xl p-6 sm:p-8 border shadow-2xl relative max-h-[90vh] overflow-y-auto ${
              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-200 p-1"
                aria-label="Close project modal"
              >
                ✕
              </button>

              <div className="space-y-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.architecture && (
                  <div className={`p-4 rounded-xl border font-mono text-xs ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-slate-50 border-slate-200 text-indigo-700'
                  }`}>
                    <strong className="block mb-1 text-slate-400">Architecture Pipeline:</strong>
                    {selectedProject.architecture}
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Engineering Highlights:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Open GitHub Repository
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-300 dark:border-slate-700 ml-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
