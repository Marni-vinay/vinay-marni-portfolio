import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Cloud, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const pillars = [
    {
      title: "AWS Cloud Architecture",
      desc: "Designing resilient, multi-AZ cloud infrastructures following the AWS Well-Architected Framework: Reliability, Performance, and Security.",
      icon: Cloud,
      color: "text-amber-500",
      bg: "bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Software Engineering & APIs",
      desc: "Developing performant RESTful APIs, asynchronous services with Python FastAPI and Node.js, and integrating AI and financial intelligence feeds.",
      icon: Cpu,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Data Systems & PL/SQL",
      desc: "Proficient with relational (MySQL, Oracle PL/SQL, PostgreSQL) and document (MongoDB) databases, ACID compliance, stored procedures, and triggers.",
      icon: Layers,
      color: "text-sky-500",
      bg: "bg-sky-500/10 border-sky-500/20"
    },
    {
      title: "DevOps & Infrastructure as Code",
      desc: "Containerizing services with Docker, writing declarative AWS CloudFormation templates, and orchestrating automated GitHub Actions pipelines.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B]/80 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Background & Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Bridging cloud infrastructure design with robust software development to build fault-tolerant, automated, and high-performance digital systems.
          </p>
        </div>

        {/* 2-Column Split: Education Details & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials & Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-indigo-600/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">
                    Lovely Professional University
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Punjab, India • Established Institution
                  </p>
                </div>
              </div>

              {/* Degree Specs */}
              <div className="space-y-4 text-sm">
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Program / Major
                  </span>
                  <p className="font-semibold text-slate-900 dark:text-white text-base">
                    B.Tech in Cloud Computing Engineering
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Department of Computer Science & Engineering
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-0.5">
                      Academic CGPA
                    </span>
                    <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
                      6.98
                    </span>
                    <span className="text-[10px] text-slate-500 block">Out of 10.0</span>
                  </div>

                  <div className={`p-3.5 rounded-xl border ${
                    darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block mb-0.5">
                      Graduation Year
                    </span>
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                      2027
                    </span>
                    <span className="text-[10px] text-slate-500 block">Class of 2027</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Primary Interests & Specializations
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>AWS Cloud Services:</strong> VPC, EC2, ALB, Auto Scaling, RDS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>Cloud Architecture:</strong> High Availability, Fault Tolerance, Multi-AZ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>Software Engineering:</strong> Full-stack applications & RESTful APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span><strong>Database Systems:</strong> Oracle PL/SQL, MySQL, MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architecture & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold tracking-tight">
                Engineering Focus & Core Competencies
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Areas where I build, architect, and optimize production-grade solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 border ${pillar.bg}`}>
                      <IconComponent className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <h4 className="font-bold text-base mb-1.5 text-slate-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Banner: Recruiter Availability */}
            <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-950/40 to-blue-950/30 border-indigo-500/30' 
                : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'
            }`}>
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                  Recruiter Notice
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  Ready to contribute to Cloud Computing, DevOps, and Software Engineering internships.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
