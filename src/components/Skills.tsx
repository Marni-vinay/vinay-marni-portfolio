import React, { useState, useMemo } from 'react';
import { 
  Cloud, 
  Database, 
  Code2, 
  Cpu, 
  Search, 
  Terminal, 
  Boxes, 
  Check, 
  GitBranch, 
  Layers, 
  Server,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { filterSkills } from '../utils/rules';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Cloud', 'Programming', 'Database', 'DevOps & Tools'];

  const filteredSkills = useMemo(() => {
    return filterSkills(SKILLS_DATA, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'AWS':
        return <Cloud className="w-6 h-6 text-amber-500" />;
      case 'MS Azure':
        return <Cloud className="w-6 h-6 text-sky-500" />;
      case 'Python':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Docker':
        return <Boxes className="w-6 h-6 text-blue-500" />;
      case 'PL/SQL':
        return <Database className="w-6 h-6 text-red-500" />;
      case 'MySQL':
        return <Database className="w-6 h-6 text-blue-400" />;
      case 'MongoDB':
        return <Database className="w-6 h-6 text-emerald-500" />;
      case 'Git / GitHub':
        return <GitBranch className="w-6 h-6 text-orange-500" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section 
      id="skills" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & Cloud Tooling
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Enterprise cloud platforms, programming languages, relational & NoSQL databases, and modern DevOps tooling.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. EC2, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter skills by keyword"
              className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80'
                  : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div>
                {/* Header: Icon + Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                    skill.level === 'Advanced'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1.5 flex items-center justify-between">
                  <span>{skill.name}</span>
                  <span className="text-xs font-mono text-slate-400">{skill.proficiencyPercent}%</span>
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiencyPercent}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {skill.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
                {skill.tags.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    +{skill.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Detail View when clicking a skill */}
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`w-full max-w-lg rounded-2xl p-6 border shadow-2xl relative ${
              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}>
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 p-1"
                aria-label="Close skill details"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  {getSkillIcon(selectedSkill.name)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedSkill.name}</h3>
                  <p className="text-xs text-indigo-500 dark:text-indigo-400 font-mono">
                    Category: {selectedSkill.category} • {selectedSkill.level} ({selectedSkill.proficiencyPercent}%)
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Associated Cloud & Engineering Concepts:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg font-mono bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-2.5 rounded-xl font-semibold text-xs bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
