import React from 'react'

interface AboutSectionProps {
  onNavigate?: (sectionIndex: number) => void
  isScrolling?: boolean
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-base leading-relaxed opacity-90">
              데이터 사이언스와 머신러닝 분야의 전문가로, 복잡한 비즈니스 문제를 
              데이터 기반 솔루션으로 해결하는 것을 전문으로 합니다.
            </p>
            <p className="text-base leading-relaxed opacity-90">
              <span className="text-blue-300 font-semibold">컴퓨터 비전</span>, 
              <span className="text-green-300 font-semibold"> 금융 데이터 분석</span>, 
              <span className="text-purple-300 font-semibold"> 스포츠 애널리틱스</span> 등 
              다양한 도메인에서 실전 프로젝트를 성공적으로 수행했습니다.
            </p>
            <p className="text-base leading-relaxed opacity-90">
              웹 크롤링부터 딥러닝 모델 개발, 통계 분석까지 
              <span className="text-cyan-300 font-semibold"> 전체 데이터 파이프라인</span>을 
              설계하고 구현할 수 있습니다.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-blue-300">Expertise</h3>
              <p className="text-sm opacity-80">Computer Vision • Financial Analytics • Sports Data Science</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-purple-300">Tech Stack</h3>
              <p className="text-sm opacity-80">Python • PyTorch • Selenium • Scikit-learn • XGBoost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-cyan-300">Achievements</h3>
              <p className="text-sm opacity-80">95% Accuracy • 77.5% R-squared • 65% Prediction Rate</p>
            </div>
          </div>
        </div>

        {/* 프로젝트 기반 핵심 역량 */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🤖',
              title: 'AI & Deep Learning',
              description: 'ResNet50 기반 이상탐지로 95% 정확도 달성',
              project: '반도체 품질관리'
            },
            {
              icon: '📊',
              title: 'Data Mining & Analytics',
              description: 'RIM 모델과 회귀분석으로 77.5% 설명력 확보',
              project: '기업가치 평가'
            },
            {
              icon: '⚽',
              title: 'Predictive Modeling',
              description: '클러스터 기반 ML로 65% 예측 정확도 달성',
              project: '프리미어리그 예측'
            }
          ].map((skill) => (
            <div 
              key={skill.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <h4 className="font-semibold mb-2 group-hover:text-blue-300 transition-colors">{skill.title}</h4>
              <p className="text-sm opacity-80 mb-2">{skill.description}</p>
              <span className="text-xs text-blue-200/70 italic">from {skill.project}</span>
            </div>
          ))}
        </div>

        {/* 핵심 가치 */}
        <div className="mt-8 grid md:grid-cols-4 gap-3">
          {[
            { icon: '🎯', title: 'Problem Solving', description: '복잡한 문제를 체계적으로 분해하고 해결' },
            { icon: '🔬', title: 'Research-driven', description: '최신 논문과 기법을 실무에 적용' },
            { icon: '⚡', title: 'Performance Focus', description: '95%+ 정확도로 비즈니스 임팩트 창출' },
            { icon: '🚀', title: 'End-to-End', description: '데이터 수집부터 모델 배포까지 전 과정' }
          ].map((value) => (
            <div 
              key={value.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="text-xl mb-1">{value.icon}</div>
              <h5 className="font-semibold text-sm mb-1">{value.title}</h5>
              <p className="text-xs opacity-80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}