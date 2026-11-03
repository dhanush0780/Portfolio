export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  category: string;
  badge: string;
  previewDetails?: {
    overview: string;
    highlights: string[];
    features: string[];
    mockPreviewType?: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon: string;
    description: string;
  }[];
}

export interface EducationMilestone {
  period: string;
  institution: string;
  stage: string;
  details: string;
  statusBadge?: string;
  iconType: 'school' | 'university' | 'specialization';
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  stars?: number;
}
