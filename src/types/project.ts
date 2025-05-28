export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Technology[];
  metrics: Metric[];
  links: ProjectLinks;
  status: ProjectStatus;
  featured: boolean;
  category: ProjectCategory;
  startDate: string;
  endDate?: string;
  images: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

export interface Technology {
  name: string;
  category: TechnologyCategory;
  color: string;
  icon?: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
  color?: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  detail?: string;
  paper?: string;
  blog?: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectCategory = 'machine-learning' | 'deep-learning' | 'computer-vision' | 'nlp' | 'data-science';
export type TechnologyCategory = 'framework' | 'library' | 'language' | 'tool' | 'cloud' | 'database' | 'technique';