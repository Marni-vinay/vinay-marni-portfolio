export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Cloud & API' | 'Database' | 'Frontend';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  category: 'Cloud' | 'DevOps & Tools' | 'Programming' | 'Database';
  level: 'Advanced' | 'Proficient' | 'Intermediate';
  proficiencyPercent: number;
  description: string;
  iconKey: string;
  tags: string[];
  awsEquivalent?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  documentUrl?: string;
  verificationUrl?: string;
  gradeOrScore?: string;
  previewImageUrl?: string;
  skillsAcquired: string[];
  badgeColor: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string[];
  skillsApplied: string[];
}

export interface CloudArchitectureNode {
  id: string;
  title: string;
  awsService: string;
  category: 'public' | 'private-app' | 'private-db' | 'management';
  description: string;
  keyResponsibilities: string[];
  metricsMonitored: string[];
  cidrOrConfig?: string;
  iconName: string;
}
