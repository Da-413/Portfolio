import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { useFullPageScroll } from '@/hooks/useFullPageScroll'

function Home() {
  const sections = [
    { id: 'hero', name: 'Home', component: 'hero' },
    { id: 'about', name: 'About', component: 'about' },
    { id: 'skills', name: 'Skills', component: 'skills' },
    { id: 'projects', name: 'Projects', component: 'projects' },
    { id: 'contact', name: 'Contact', component: 'contact' }
  ]

  const { currentSection, isScrolling, containerRef, goToSection } = useFullPageScroll({
    sectionsLength: sections.length
  })

  // 섹션 렌더링 함수
  const renderSection = (section: any) => {
    switch (section.component) {
      case 'hero':
        return (
          <HeroSection 
            onNavigate={goToSection} 
            isScrolling={isScrolling} 
            currentSection={currentSection}
          />
        )
      case 'about':
        return (
          <AboutSection 
            onNavigate={goToSection} 
            isScrolling={isScrolling}
          />
        )
      case 'skills':
        return (
          <SkillsSection 
            onNavigate={goToSection} 
            isScrolling={isScrolling}
          />
        )
      case 'projects':
        return (
          <ProjectsSection 
            onNavigate={goToSection} 
            isScrolling={isScrolling}
          />
        )
      case 'contact':
        return (
          <ContactSection 
            onNavigate={goToSection} 
            isScrolling={isScrolling}
          />
        )
      default:
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Coming Soon</h2>
              <p className="text-xl mt-4">Section under development</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden bg-dark-bg text-dark-text">
      <Head>
        <title>Data Scientist & MLOps Engineer Portfolio</title>
        <meta 
          name="description" 
          content="데이터 사이언티스트이자 MLOps 엔지니어의 포트폴리오입니다. 머신러닝, 데이터 분석, MLOps 프로젝트를 확인해보세요." 
        />
        <meta 
          name="keywords" 
          content="데이터 사이언티스트, MLOps, 머신러닝, 데이터 분석, Python, TensorFlow, PyTorch, Docker, Kubernetes" 
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Data Scientist & MLOps Engineer Portfolio" />
        <meta 
          property="og:description" 
          content="데이터 사이언티스트이자 MLOps 엔지니어의 포트폴리오입니다. 머신러닝, 데이터 분석, MLOps 프로젝트를 확인해보세요." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Scientist & MLOps Engineer Portfolio" />
        <meta 
          name="twitter:description" 
          content="데이터 사이언티스트이자 MLOps 엔지니어의 포트폴리오입니다." 
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* Header에 직접 goToSection 전달 */}
      <Header 
        currentSection={currentSection}
        onSectionChange={goToSection}
      />

      <main className="h-full w-full">
        <div
          ref={containerRef}
          className="h-full w-full"
          tabIndex={0}
          style={{ touchAction: 'none' }}
        >
          {/* Main Container */}
          <div 
            className="h-full w-full transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateY(-${currentSection * 100}%)`,
              willChange: 'transform'
            }}
          >
            {sections.map((section) => (
              <div key={section.id} className="w-full h-full">
                {renderSection(section)}
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col space-y-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSection(index)}
                  disabled={isScrolling}
                  className={`w-3 h-3 rounded-full transition-all duration-300 group relative ${
                    currentSection === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to ${section.name} section`}
                >
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {section.name}
                  </div>
                </button>
              ))}
            </div>
          </nav>

          {/* Progress Bar */}
          <div className="fixed bottom-4 left-4 z-50">
            <div className="bg-black/90 text-white px-4 py-2 rounded-full flex items-center space-x-3">
              <span className="text-xs font-medium">
                {sections[currentSection].name}
              </span>
              <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-1000"
                  style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// 핵심: _app.tsx의 기본 Layout을 사용하지 않음
Home.getLayout = (page: React.ReactElement) => {
  return page; // Layout 래퍼 없이 바로 페이지 반환
}

export default Home