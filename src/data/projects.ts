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
  // 기존 projects 배열에 이 객체를 추가하세요
  {
    id: 'financial-data-mining-valuation',
    title: '기업 가치 평가 및 금융 데이터 마이닝',
    description: 'Selenium 웹크롤링과 RIM 모델을 활용한 한국 상장기업 가치 평가 시스템',
    longDescription: '한국 상장기업들의 재무제표 데이터를 자동으로 수집하고, RIM(Residual Income Model) 기업가치 평가 모델과 다중회귀분석을 통해 시가총액과 내재가치 간의 차이를 분석하는 시스템을 개발했습니다. FnGuide에서 301개 기업의 재무데이터를 크롤링하여 11개 재무비율을 산출하고, 통계적 모델링을 통해 주식 가격 결정 요인을 분석했습니다.',
    technologies: [
      { name: 'Python', category: 'language', color: 'blue' },
      { name: 'Selenium', category: 'library', color: 'green' },
      { name: 'Pandas', category: 'library', color: 'purple' },
      { name: 'Statsmodels', category: 'library', color: 'orange' },
      { name: 'Scikit-learn', category: 'framework', color: 'orange' },
      { name: 'FinanceDataReader', category: 'library', color: 'cyan' },
      { name: 'Jupyter Notebook', category: 'tool', color: 'orange' },
      { name: 'Web Scraping', category: 'technique', color: 'red' },
    ],
    metrics: [
      { 
        label: 'Companies', 
        value: '301', 
        description: '분석 대상 기업 수',
        color: 'text-blue-400' 
      },
      { 
        label: 'R-squared', 
        value: '77.5%', 
        description: '모델 설명력',
        color: 'text-purple-400' 
      },
      { 
        label: 'Variables', 
        value: '11', 
        description: '재무비율 변수',
        color: 'text-green-400' 
      },
      { 
        label: 'Data Points', 
        value: '3.3K+', 
        description: '수집된 데이터 포인트',
        color: 'text-cyan-400' 
      },
    ],
    links: {
      github: 'https://github.com/your-username/financial-data-mining-valuation',
      detail: '/projects/financial-data-mining-valuation',
    },
    status: 'completed',
    featured: true,
    category: 'data-science',
    startDate: '2023-02-01',
    endDate: '2023-05-26',
    images: ['/images/projects/financial-data-mining-1.png'],
    challenges: [
      '동적 웹페이지에서 안정적인 데이터 수집을 위한 복잡한 크롤링 로직 구현',
      '금융업과 일반기업의 서로 다른 재무제표 구조에 대한 예외 처리',
      '301개 기업의 대용량 데이터 처리 및 결측값 처리 최적화',
      'RIM 모델의 이론적 가정과 실제 시장 데이터 간의 괴리 조정',
    ],
    solutions: [
      'Selenium과 WebDriverManager를 활용한 견고한 웹크롤링 파이프라인 구축',
      '기업별 재무제표 구조 차이를 자동 감지하는 동적 파싱 알고리즘 개발',
      'Pandas를 활용한 효율적인 데이터 전처리 및 StandardScaler로 정규화',
      '다중회귀분석으로 RIM 모델 보완 및 주요 재무비율 영향력 분석',
    ],
    results: [
      'RIM 기업가치와 시가총액 간 상관관계 77.5% 설명력 달성',
      '매출액 증가율, ROA, ROI가 주식가격 결정에 핵심 요인임을 통계적 검증',
      '자동화된 데이터 수집으로 수동 분석 대비 90% 이상 시간 절약',
      '한국 상장기업 밸류에이션 모델의 통계적 유의성 입증 (p<0.001)',
    ],
  },
  {
    id: 'premier-league-analytics',
    title: '프리미어리그 팀 성능 분석 및 경기 결과 예측 시스템',
    description: 'Selenium 웹크롤링과 클러스터 기반 머신러닝을 활용한 프리미어리그 20개 팀의 종합적 성능 분석 및 경기 결과 예측 시스템',
    longDescription: '프리미어리그 공식 웹사이트에서 20개 팀의 25개 통계 지표를 자동 수집하고, 6시즌(2017-2023)간 2,280경기 결과를 분석했습니다. 계층적 클러스터링으로 팀을 3개 그룹으로 분류하고, 각 클러스터별로 특화된 머신러닝 모델을 구축하여 경기 결과를 예측했습니다. VIF 분석을 통해 다중공선성을 제거하고, Feature Importance 기반으로 핵심 변수를 선별하여 최적의 예측 모델을 개발했습니다.',
    technologies: [
      { name: 'Python', category: 'language', color: 'blue' },
      { name: 'Selenium', category: 'library', color: 'green' },
      { name: 'Pandas', category: 'library', color: 'purple' },
      { name: 'Scikit-learn', category: 'framework', color: 'orange' },
      { name: 'XGBoost', category: 'library', color: 'red' },
      { name: 'LightGBM', category: 'library', color: 'cyan' },
      { name: 'Matplotlib', category: 'library', color: 'yellow' },
      { name: 'Seaborn', category: 'library', color: 'pink' },
      { name: 'Statsmodels', category: 'library', color: 'indigo' },
      { name: 'Jupyter Notebook', category: 'tool', color: 'orange' },
      { name: 'Web Scraping', category: 'technique', color: 'red' },
      { name: 'Machine Learning', category: 'technique', color: 'green' },
    ],
    metrics: [
      { 
        label: 'Teams', 
        value: '20', 
        description: '분석 대상 팀 수',
        color: 'text-blue-400' 
      },
      { 
        label: 'Accuracy', 
        value: '65.1%', 
        description: '평균 예측 정확도',
        color: 'text-green-400' 
      },
      { 
        label: 'Features', 
        value: '25', 
        description: '수집된 통계 지표',
        color: 'text-purple-400' 
      },
      { 
        label: 'Matches', 
        value: '2.3K+', 
        description: '분석된 경기 수',
        color: 'text-cyan-400' 
      },
    ],
    links: {
      github: 'https://github.com/your-username/premier-league-analytics',
      detail: '/projects/premier-league-analytics',
    },
    status: 'completed',
    featured: true,
    category: 'data-science',
    startDate: '2023-02-01',
    endDate: '2023-05-26',
    images: ['/images/projects/premier-league-analytics-1.png'],
    challenges: [
      '프리미어리그 공식 웹사이트의 복잡한 동적 웹페이지 크롤링 및 안정적 데이터 수집',
      '25개 통계 지표 간의 다중공선성 문제와 차원의 저주 해결',
      '팀별 성능 차이가 큰 상황에서 단일 모델의 한계 극복',
      '6시즌, 2,280경기의 대용량 시계열 데이터 처리 및 홈어드밴티지 보정',
    ],
    solutions: [
      'Selenium + WebDriverManager를 활용한 견고한 자동화 크롤링 시스템과 예외 처리 구현',
      'VIF 분석으로 다중공선성 제거 및 Random Forest Feature Importance 기반 변수 선택',
      '계층적 클러스터링으로 팀을 3그룹 분류 후 각 클러스터별 특화 모델 구축',
      '6시즌 상대전적 매트릭스 생성 및 홈/어웨이 승률 차이를 반영한 가중치 시스템 도입',
    ],
    results: [
      '클러스터 1(강팀): 65.1% 정확도로 LogisticRegression 최고 성능 달성',
      '클러스터 2(중위팀): 60.6% 정확도로 RandomForest 최고 성능 달성',
      '클러스터 3(약팀): 58.9% 정확도로 SVM 최고 성능 달성',
      '전체 평균 61.5% 예측 정확도로 기존 단일 모델 대비 15% 성능 향상',
      '실제 EPL 31라운드 10경기 예측에서 70% 정확도 달성',
      '인터셉션, 상대전적, 클리어런스가 경기 결과 예측의 핵심 요인임을 검증',
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