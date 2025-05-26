// src/data/skills.ts
export const skillCategories = [
  {
    name: 'Data Science',
    description: '데이터 분석 및 과학적 접근을 통한 인사이트 도출',
    icon: '📊',
    color: 'text-blue-400',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Jupyter', level: 92 }
    ]
  },
  {
    name: 'Machine Learning',
    description: '머신러닝 모델 개발 및 최적화 전문 기술',
    icon: '🤖',
    color: 'text-purple-400',
    skills: [
      { name: 'TensorFlow', level: 87 },
      { name: 'PyTorch', level: 85 },
      { name: 'Keras', level: 88 },
      { name: 'XGBoost', level: 82 },
      { name: 'LightGBM', level: 80 }
    ]
  },
  {
    name: 'MLOps & Cloud',
    description: '모델 배포 및 클라우드 인프라 관리',
    icon: '⚙️',
    color: 'text-green-400',
    skills: [
      { name: 'Docker', level: 89 },
      { name: 'Kubernetes', level: 75 },
      { name: 'MLflow', level: 83 },
      { name: 'Airflow', level: 78 },
      { name: 'AWS', level: 85 }
    ]
  },
  {
    name: 'Data Engineering',
    description: '대용량 데이터 파이프라인 구축 및 운영',
    icon: '🏗️',
    color: 'text-orange-400',
    skills: [
      { name: 'Apache Spark', level: 81 },
      { name: 'Kafka', level: 77 },
      { name: 'PostgreSQL', level: 91 },
      { name: 'MongoDB', level: 84 },
      { name: 'Redis', level: 79 }
    ]
  },
  {
    name: 'Visualization',
    description: '데이터 시각화 및 대시보드 구축',
    icon: '📈',
    color: 'text-indigo-400',
    skills: [
      { name: 'Matplotlib', level: 93 },
      { name: 'Seaborn', level: 90 },
      { name: 'Plotly', level: 86 },
      { name: 'Tableau', level: 82 },
      { name: 'D3.js', level: 75 }
    ]
  },
  {
    name: 'DevOps & Tools',
    description: '개발 및 배포 자동화 도구 활용',
    icon: '🛠️',
    color: 'text-gray-400',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 83 },
      { name: 'Monitoring', level: 78 },
      { name: 'Testing', level: 86 },
      { name: 'Linux', level: 88 }
    ]
  }
];