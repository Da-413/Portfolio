import { Project, ProjectCategory  } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'semiconductor-anomaly-detection',
    title: '반도체 소자 이상탐지',
    description: 'ResNet50 특성 추출과 다중 이상탐지 알고리즘을 활용한 반도체 제조 품질 관리 시스템',
    longDescription: '반도체 제조 과정에서 발생하는 불량품을 자동으로 탐지하는 AI 시스템을 개발했습니다. ResNet50을 활용한 특성 추출과 세 가지 서로 다른 이상탐지 알고리즘을 비교 분석하여 최적의 성능을 달성했습니다.',
    technologies: [
      { name: 'PyTorch', category: 'framework', color: 'red' },
      { name: 'Computer Vision', category: 'library', color: 'purple' },
      { name: 'Anomaly Detection', category: 'library', color: 'cyan' },
      { name: 'Bayesian Optimization', category: 'tool', color: 'green' },
    ],
    metrics: [
      { label: 'ML Models', value: '3', color: 'text-blue-400' },
      { label: 'Accuracy', value: '95%', color: 'text-purple-400' },
      { label: 'Processing Time', value: '<100ms', color: 'text-green-400' },
      { label: 'Features', value: '2048', color: 'text-cyan-400' },
    ],
    links: {
      github: 'https://github.com/your-username/semiconductor-anomaly-detection',
      detail: '/projects/semiconductor-anomaly-detection',
    },
    status: 'completed',
    featured: true,
    category: 'computer-vision',
    startDate: '2024-01-01',
    endDate: '2024-03-15',
    images: ['/images/projects/semiconductor-1.png'],
    challenges: [
      '다양한 불량 패턴의 복잡성과 희소성',
      '실시간 처리 성능 요구사항 충족',
      '소량의 불량 데이터로 인한 클래스 불균형 문제',
      '제조 환경의 노이즈와 조명 변화에 대한 강건성',
    ],
    solutions: [
      'ResNet50 전이학습으로 효과적인 특성 추출 파이프라인 구축',
      '3가지 서로 다른 이상탐지 알고리즘의 비교 분석 및 앙상블',
      '베이지안 최적화를 통한 체계적인 하이퍼파라미터 튜닝',
      '데이터 증강과 합성 데이터 생성으로 학습 데이터 확충',
    ],
    results: [
      '95% 이상의 높은 정확도와 낮은 오탐률 달성',
      '실시간 처리 가능한 100ms 이내 추론 속도 달성',
      '제조업체 품질 관리 비용 20% 절감 효과 입증',
      '3개월 연속 무결점 제품 생산 달성에 기여',
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.id === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};