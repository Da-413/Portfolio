import React from 'react'
import { SkillCategory } from '@/components/ui/SkillCategory'
import { skillCategories } from '@/data/skills'

interface SkillsSectionProps {
  onNavigate?: (sectionIndex: number) => void
  isScrolling?: boolean
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-green-900 to-slate-900 flex items-center justify-center relative overflow-y-auto">
      <div className="text-center text-white z-10 max-w-6xl mx-auto px-4 py-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 gradient-text">Skills & Technologies</h2>
        <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto">
          데이터 수집부터 모델 배포까지, 전 과정을 아우르는 기술 스택을 보유하고 있습니다.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, idx) => (
            <SkillCategory 
              key={category.name}
              category={category}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}