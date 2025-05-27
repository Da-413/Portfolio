import React from 'react'

interface AboutSectionProps {
  onNavigate?: (sectionIndex: number) => void
  isScrolling?: boolean
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
      <div className="text-center text-white z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <p className="text-base leading-relaxed opacity-90">
              데이터 사이언스와 MLOps 분야에서 5년간의 경험을 보유하고 있습니다. 
              복잡한 데이터 문제를 해결하고 머신러닝 모델을 프로덕션 환경에 배포하는 것을 전문으로 합니다.
            </p>
            <p className="text-base leading-relaxed opacity-90">
              Python, TensorFlow, Docker, AWS를 활용하여 확장 가능한 ML 파이프라인을 구축하고 있습니다.
            </p>
            <p className="text-base leading-relaxed opacity-90">
              데이터 기반 의사결정과 비즈니스 임팩트 창출에 열정을 가지고 있으며, 
              지속적인 학습과 기술 발전을 추구합니다.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-blue-300">Experience</h3>
              <p className="text-sm opacity-80">5+ years in Data Science & MLOps</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-purple-300">Education</h3>
              <p className="text-sm opacity-80">Computer Science & Statistics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
              <h3 className="font-semibold mb-2 text-cyan-300">Interests</h3>
              <p className="text-sm opacity-80">AI Research, Open Source, Teaching</p>
            </div>
          </div>
        </div>

        {/* 핵심 가치 */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: '🎯',
              title: 'Problem Solving',
              description: '복잡한 비즈니스 문제를 데이터로 해결'
            },
            {
              icon: '🚀',
              title: 'Innovation',
              description: '최신 기술을 활용한 혁신적 솔루션'
            },
            {
              icon: '🤝',
              title: 'Collaboration',
              description: '팀워크와 지식 공유를 통한 성장'
            }
          ].map((value) => (
            <div 
              key={value.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{value.icon}</div>
              <h4 className="font-semibold mb-2">{value.title}</h4>
              <p className="text-sm opacity-80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}