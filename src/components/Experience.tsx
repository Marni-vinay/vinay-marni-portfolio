import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section 
      id="experience" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B]/85 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Practical industry engagement, technical leadership, and mentoring engineering students on cloud roadmaps.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl relative ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              {/* Badge & Period Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5 my-4">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Responsibilities & Contributions:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies Applied */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                {exp.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                      darkMode
                        ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
