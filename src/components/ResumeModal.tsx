import React, { useRef } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA, CERTIFICATIONS_DATA, EXPERIENCE_DATA } from '../data/portfolioData';
import { generateResumePlainText } from '../utils/rules';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = React.useState(false);
  const printContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = generateResumePlainText(PERSONAL_INFO);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const text = generateResumePlainText(PERSONAL_INFO);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Vinay_Marni_Cloud_Engineer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
        darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
      }`}>
        {/* Header Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm sm:text-base font-mono">
              ATS Resume Preview: {PERSONAL_INFO.preferredName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center gap-1.5"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center gap-1.5"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-900 font-sans" ref={printContentRef}>
          
          {/* Header */}
          <div className="text-center border-b pb-6 border-slate-200 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-indigo-700 uppercase tracking-wider font-mono">
              {PERSONAL_INFO.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Punjab / Andhra Pradesh, India
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-indigo-600 font-mono pt-1">
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/Marni-vinay
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/vinay-marni
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-3 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-xs text-slate-700">
                  {PERSONAL_INFO.university}
                </p>
              </div>
              <div className="text-right text-xs">
                <span className="font-bold text-slate-900">Graduation: {PERSONAL_INFO.graduationYear}</span>
                <p className="text-slate-600 font-mono">CGPA: {PERSONAL_INFO.cgpa} / 10.0</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-3 font-mono">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <p>
                <strong className="font-semibold text-slate-900">Cloud Platforms:</strong> AWS (VPC, EC2, ALB, Auto Scaling, RDS, S3, IAM, CloudFormation, CloudWatch), Microsoft Azure
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Programming Languages:</strong> Python (FastAPI, Boto3), JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Databases:</strong> Oracle PL/SQL (Stored Procedures, Triggers, Packages), MySQL, MongoDB, PostgreSQL
              </p>
              <p>
                <strong className="font-semibold text-slate-900">DevOps & Tools:</strong> Docker, Git, GitHub Actions, Linux Shell, REST APIs, JSON Web Tokens (JWT)
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-3 font-mono">
              Work Experience & Internships
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-start text-xs">
                  <div>
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-slate-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-slate-600 font-mono text-[11px]">
                    <span>{exp.period}</span>
                    <span className="block text-indigo-700 font-semibold">{exp.type}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-3 font-mono">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs">
                    <h3 className="font-bold text-slate-900">
                      {proj.title}
                      <span className="font-normal text-slate-500 text-[11px] ml-2">
                        [{proj.techStack.join(', ')}]
                      </span>
                    </h3>
                    {proj.githubUrl && (
                      <span className="text-[11px] font-mono text-indigo-700">
                        GitHub Available
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700">{proj.description}</p>
                  <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5 pl-1">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b pb-1 mb-3 font-mono">
              Certifications & Badges
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
              {CERTIFICATIONS_DATA.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-slate-900">{cert.title}</strong> — {cert.issuer} ({cert.issueDate})
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
