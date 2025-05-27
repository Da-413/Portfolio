import React from 'react'

interface HeroSectionProps {
  onNavigate: (sectionIndex: number) => void
  isScrolling: boolean
  currentSection: number
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onNavigate, 
  isScrolling, 
  currentSection 
}) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center relative">
      {/* Hero Content */}
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          <span className="gradient-text">Data Scientist</span>
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold mb-8 text-gray-300">
          & MLOps Engineer
        </h2>
        <p className="text-lg lg:text-xl opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto">
          머신러닝 모델링부터 프로덕션 배포까지, <br />
          데이터로 비즈니스 가치를 창출하는 엔지니어입니다.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Spark', 'AWS', 'FastAPI'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate(3)} // Projects 섹션으로
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            disabled={isScrolling}
          >
            View Projects
          </button>
          <button
            onClick={() => onNavigate(4)} // Contact 섹션으로
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-semibold border border-white/20 transition-all duration-300"
            disabled={isScrolling}
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          {[
            { name: 'GitHub', icon: '⚡', url: 'https://github.com/your-username' },
            { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/your-profile' },
            { name: 'Kaggle', icon: '📊', url: 'https://kaggle.com/your-profile' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-data-flow" />
        <div className="absolute top-3/4 right-0 w-48 h-px bg-gradient-to-l from-transparent via-purple-500/50 to-transparent animate-data-flow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-blue-500/60 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scroll Hint */}
      {currentSection === 0 && (
        <div className="absolute bottom-10 left-200 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0l7-7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}