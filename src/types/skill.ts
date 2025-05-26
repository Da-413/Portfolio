export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}