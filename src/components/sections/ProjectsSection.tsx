import React from 'react'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects, getFeaturedProjects } from '@/data/projects'

interface ProjectsSectionProps {
  onNavigate?: (sectionIndex: number) => void
  isScrolling?: boolean
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  // 프로젝트 데이터 사용 (featured 프로젝트 우선 표시)
  const featuredProjects = getFeaturedProjects().slice(0, 4)
  const displayProjects = featuredProjects.length >= 4 ? featuredProjects : projects.slice(0, 4)

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-900 via-red-900 to-slate-900 flex items-center justify-center relative overflow-y-auto">
      <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 py-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">Featured Projects</h2>
        <p className="text-base mb-8 opacity-90 max-w-2xl mx-auto">
          데이터 사이언스와 MLOps 분야에서 진행한 주요 프로젝트들을 소개합니다.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {displayProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        {projects.length > 4 && (
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View All Projects ({projects.length})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}