import { PersonalInfo, NavigationItem } from '@/types/common';

export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'AI Engineer & Data Scientist',
  bio: '머신러닝, 딥러닝, 컴퓨터 비전을 활용한 실무 중심의 AI 프로젝트 포트폴리오',
  location: 'Seoul, South Korea',
  email: 'your-email@example.com',
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
  },
};

export const navigationItems: NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];