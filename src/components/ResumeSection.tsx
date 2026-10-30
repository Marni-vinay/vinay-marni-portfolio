import React from 'react';
import { 
  FileDown, 
  Eye, 
  Printer, 
  CheckCircle2, 
  Download, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateResumePlainText } from '../utils/rules';

interface ResumeSectionProps {
  darkMode: boolean;
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  darkMode, 
  onOpenResumeModal 
}) => {
  const handleDirectDownload = () => {
    const content = generateResumePlainText(PERSONAL_INFO);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vinay_Marni_Cloud_Computing_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="resume" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B]/95 text-white' : 'bg-slate-100/70 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Resume & Professional Summary
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Download my ATS-formatted resume optimized for technical recruiters, cloud hiring managers, and engineering teams.
          </p>
        </div>

        {/* Highlight Card */}
        <div className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-10 shadow-2xl relative overflow-hidden ${
          darkMode 
            ? 'bg-gradient-to-b from-slate-900 to-[#0c1322] border-slate-800' 
            : 'bg-white border-slate-200'
        }`}>
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Quick Snapshot */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-mono font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Candidate Credentials</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                MARNI VEERA VENKATA VINAY
              </h3>

              <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                Cloud Computing Engineer | AWS Architecture | Python | SQL & PL/SQL
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Education:</strong> B.Tech CSE (Cloud Computing), LPU (CGPA: 6.98)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Graduation:</strong> 2027 (Available for Full-time / Internships)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Internship:</strong> Sr Academic Counsellor @ NYERAS EDU-TECH</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span><strong>Projects:</strong> Stock Market Dashboard, FinoSage API, AMS, Tracker</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Action Buttons */}
            <div className="md:col-span-5 flex flex-col items-stretch gap-3">
              {/* Primary Prominent Download Button */}
              <button
                onClick={handleDirectDownload}
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-blue-500 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 transition-all active:scale-95 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* View / Interactive ATS Modal Button */}
              <button
                onClick={onOpenResumeModal}
                className={`w-full py-3 px-5 rounded-2xl font-semibold text-xs sm:text-sm border flex items-center justify-center gap-2 transition-all ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <Eye className="w-4 h-4 text-indigo-500" />
                <span>Preview ATS Resume & Print</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 font-mono mt-1">
                Format: Clean plain text & formatted printable ATS PDF
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
