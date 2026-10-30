import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { validateContactForm } from '../utils/rules';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePreFillSample = () => {
    setFormData({
      name: PERSONAL_INFO.fullName,
      email: PERSONAL_INFO.email,
      message: `Phone / Contact: ${PERSONAL_INFO.rawPhone} - Hello Vinay, we reviewed your AWS and Cloud Engineering portfolio and would love to connect regarding opportunities!`
    });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 relative ${
        darkMode ? 'bg-[#0B132B] text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing cloud architecture, software engineering roles, or internships? Let's connect.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards & Simple Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Contact Card */}
            <div className={`p-6 sm:p-7 rounded-2xl border ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <div className="space-y-1 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  Candidate Profile
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {PERSONAL_INFO.degree} • LPU
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3.5">
                {/* Email Item */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Email Address
                      </span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-500 truncate block font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Direct Phone / WhatsApp
                      </span>
                      <a 
                        href={`tel:${PERSONAL_INFO.rawPhone}`} 
                        className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.rawPhone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
                    title="Copy phone"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Social & Code Profiles:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-medium transition-all ${
                      darkMode 
                        ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs font-medium transition-all ${
                      darkMode 
                        ? 'bg-slate-950/60 border-slate-800 text-blue-400 hover:border-blue-500' 
                        : 'bg-white border-slate-200 text-blue-600 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
                : 'bg-slate-50 border-slate-200 shadow-md'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Messages are routed straight to Vinay's inbox.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePreFillSample}
                  className="text-xs font-mono text-indigo-500 dark:text-indigo-400 hover:underline"
                >
                  Quick Fill Info
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'recruiter'}. Vinay will reply via email at <strong className="text-indigo-500 font-mono">{formData.email}</strong> or phone.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Hiring Manager / John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/5'
                          : darkMode
                            ? 'bg-slate-950/60 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/5'
                          : darkMode
                            ? 'bg-slate-950/60 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label 
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message or Phone Number
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Hi Vinay, we would like to interview you for our Cloud / DevOps team..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 bg-rose-500/5'
                          : darkMode
                            ? 'bg-slate-950/60 border-slate-700 text-white focus:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Vinay</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
