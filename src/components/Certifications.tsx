import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Download, 
  Eye, 
  X, 
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types/portfolio';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getIssuerBadge = (issuer: string) => {
    if (issuer.includes('Google')) {
      return 'bg-sky-500/10 text-sky-500 dark:text-sky-400 border-sky-500/20';
    }
    if (issuer.includes('Infosys')) {
      return 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20';
    }
    if (issuer.includes('LPU') || issuer.includes('Lovely')) {
      return 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20';
    }
    return 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20';
  };

  return (
    <section 
      id="certifications" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Licenses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified technical certifications spanning Google Generative AI, Angular Web Development, Oracle PL/SQL, JavaScript, and Responsive Web Design.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer group/card ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              <div>
                {/* Visual Certificate Preview Thumbnail */}
                {cert.previewImageUrl ? (
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer group border-b border-slate-800/60"
                  >
                    <img 
                      src={cert.previewImageUrl} 
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Hover Inspection Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="px-3 py-1.5 rounded-xl bg-indigo-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        Preview Certificate
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/70 text-slate-200 backdrop-blur-sm border border-slate-700/60">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Issuer & Date Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border ${getIssuerBadge(cert.issuer)}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  {/* Grade / Certificate Number Badge */}
                  {cert.gradeOrScore && (
                    <div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 font-semibold">
                        {cert.gradeOrScore}
                      </span>
                    </div>
                  )}

                  {/* Validated Competencies */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                      Validated Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                            darkMode
                              ? 'bg-slate-950/70 border-slate-800 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                {cert.documentUrl ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-indigo-400 transition-colors"
                      title="Open PDF directly in new browser tab"
                    >
                      <span>Open PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Inspection & Full-Screen Preview Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className={`w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
              darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}>
              {/* Modal Header */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      {selectedCert.issuer} • {selectedCert.issueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCert.documentUrl && (
                    <a
                      href={selectedCert.documentUrl}
                      download
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 flex items-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    aria-label="Close certificate modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: High-Res Image Preview */}
              <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center bg-slate-950/90 text-center">
                {selectedCert.previewImageUrl ? (
                  <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-white mb-4">
                    <img 
                      src={selectedCert.previewImageUrl} 
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : null}

                {/* Info Bar */}
                <div className="w-full max-w-2xl text-left space-y-3 pt-2">
                  {selectedCert.gradeOrScore && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                      <strong>Result / Honor: </strong> {selectedCert.gradeOrScore}
                    </div>
                  )}

                  <div className="space-y-1">
                    <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Verified Competencies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900 border border-slate-800 text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                    {selectedCert.verificationUrl ? (
                      <a
                        href={selectedCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline flex items-center gap-1 font-mono"
                      >
                        <span>Verify on Official Issuer Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-500 font-mono">Issued to Marni Veera Venkata Vinay</span>
                    )}

                    {selectedCert.documentUrl && (
                      <a
                        href={selectedCert.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white flex items-center gap-1 font-mono"
                      >
                        <span>Open Document in New Tab</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
