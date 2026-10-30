import { SkillItem } from '../types/portfolio';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please enter a message or phone number (at least 5 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function filterSkills(
  skills: SkillItem[],
  activeCategory: string,
  searchQuery: string = ''
): SkillItem[] {
  const query = searchQuery.trim().toLowerCase();
  return skills.filter((skill) => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      query === '' ||
      skill.name.toLowerCase().includes(query) ||
      skill.description.toLowerCase().includes(query) ||
      skill.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
}

export const ARCHITECTURE_HOPS: readonly string[] = [
  'internet',
  'alb',
  'asg',
  'ec2',
  'rds'
];

export function getPacketPath(hopIndex: number): string {
  const clampedIndex = Math.max(0, Math.min(hopIndex, ARCHITECTURE_HOPS.length - 1));
  return ARCHITECTURE_HOPS[clampedIndex];
}

export function generateResumePlainText(info: {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  university: string;
  degree: string;
  cgpa: string;
  graduationYear: string;
  githubUrl: string;
  linkedinUrl: string;
}): string {
  return [
    `============================================================`,
    `${info.fullName.toUpperCase()}`,
    `${info.headline}`,
    `Email: ${info.email} | Phone: ${info.phone}`,
    `GitHub: ${info.githubUrl} | LinkedIn: ${info.linkedinUrl}`,
    `============================================================\n`,
    `EDUCATION`,
    `---------`,
    `${info.degree}`,
    `${info.university}`,
    `CGPA: ${info.cgpa} | Expected Graduation: ${info.graduationYear}\n`,
    `AREAS OF EXPERTISE`,
    `------------------`,
    `* Cloud & Infrastructure: AWS (VPC, EC2, ALB, Auto Scaling, RDS, S3, IAM, CloudFormation, CloudWatch), Azure`,
    `* Languages & Frameworks: Python (FastAPI, Boto3), JavaScript (React), HTML5, CSS3, Tailwind CSS`,
    `* Databases: Oracle PL/SQL, MySQL, MongoDB Atlas, PostgreSQL`,
    `* DevOps & Tools: Docker, Git, GitHub Actions, Linux, RESTful APIs\n`,
    `EXPERIENCE`,
    `----------`,
    `NYERAS EDU-TECH AND INNOVATIONS PRIVATE LIMITED`,
    `Role: Sr Academic Counsellor (Internship)`,
    `Duration: Aug 2026 – Jan 2027`,
    `* Mentored engineering students on tech career roadmaps, cloud architecture, and competitive programming.`,
    `* Advised learners on AWS certifications and industry capstone project design.\n`,
    `FEATURED PROJECTS`,
    `-----------------`,
    `1. Stock Market Dashboard (React, Node.js, Express.js, MongoDB, JWT, Tailwind, Alpha Vantage, Finnhub)`,
    `   GitHub: https://github.com/Marni-vinay/MAJOR-PROJECT-CAPSTONE-`,
    `2. FinoSage API (FastAPI, PostgreSQL, Supabase, Firebase, Claude AI, Alpha Vantage, Finnhub)`,
    `3. Placement / Internship Tracker (HTML, CSS, JavaScript, localStorage)`,
    `   GitHub: https://github.com/Marni-vinay/Placement-Tracker`,
    `4. Academic Management System (Oracle PL/SQL, SQL, DBMS)`,
    `   GitHub: https://github.com/Marni-vinay/Project-is-Academic-Management-System-using-PL-SQL\n`,
    `CERTIFICATIONS`,
    `--------------`,
    `* Angular Web Developer Certification (Infosys Springboard)`,
    `* Gemini Certified Student: Generative AI (Google for Education)`,
    `* CodeQuery: PL/SQL & Data Science Bootcamp (Grade 'A', LPU)`,
    `* JavaScript Course Completion (Infosys Springboard)`,
    `* Responsive Web Design Certification (freeCodeCamp)`
  ].join('\n');
}
