export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  social: SocialLinks;
  resume?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  blog?: string;
  portfolio?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}