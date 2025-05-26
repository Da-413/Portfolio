import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project, Technology, Metric } from '../../types/project';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Clickable area for project detail */}
      <Link href={`/projects/${project.id}`}>
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                {project.title}
              </h3>
              {project.featured && (
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-xs font-medium">⭐ Featured</span>
                </div>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-blue-400 transition-colors ml-2 flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 4).map((tech: Technology) => (
              <span
                key={tech.name}
                className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-medium"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            {project.metrics.slice(0, 2).map((metric: Metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-base font-bold ${metric.color || 'text-green-400'}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' 
                ? 'bg-green-500/20 text-green-300' 
                : 'bg-yellow-500/20 text-yellow-300'
            }`}>
              {project.status === 'completed' ? '완료' : '진행중'}
            </span>
            
            <div className="text-xs text-white/60 group-hover:text-blue-400 transition-colors">
              자세히 보기
            </div>
          </div>
        </div>
      </Link>

      {/* Action buttons */}
      <div className="px-5 pb-5">
        <div className="flex space-x-2 pt-2 border-t border-white/10">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm text-white/80 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm text-white/80 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};