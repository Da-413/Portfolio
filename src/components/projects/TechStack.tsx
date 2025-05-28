import React from 'react';
import { motion } from 'framer-motion';
import { Technology, TechnologyCategory } from '@/types/project';

interface TechStackProps {
  technologies: Technology[];
  showGrouped?: boolean;
  maxDisplay?: number;
  className?: string;
}

export const TechStack: React.FC<TechStackProps> = ({ 
  technologies, 
  showGrouped = true,
  maxDisplay,
  className = '' 
}) => {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  // 카테고리별 그룹화
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<TechnologyCategory, Technology[]>);

  // 카테고리 라벨 매핑
  const categoryLabels: Record<TechnologyCategory, string> = {
    framework: '프레임워크',
    library: '라이브러리',
    language: '언어',
    tool: '도구',
    cloud: '클라우드',
    database: '데이터베이스',
    technique: '기술',
  };

  // 색상 매핑
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      red: 'bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30',
      blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30',
      green: 'bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30',
      purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30',
      pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30',
      orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30',
    };
    return colorMap[color] || 'bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30';
  };

  // 그룹화된 표시
  if (showGrouped) {
    return (
      <div className={`space-y-6 ${className}`}>
        {Object.entries(groupedTech).map(([category, techs], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="space-y-3"
          >
            {/* Category Title */}
            <h3 className="text-lg font-semibold text-dark-text flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {categoryLabels[category as TechnologyCategory] || category}
            </h3>

            {/* Technologies in this category */}
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: categoryIndex * 0.1 + index * 0.05 
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div
                    className={`
                      px-3 py-2 rounded-full text-sm font-medium border cursor-default
                      transition-all duration-200
                      ${getColorClasses(tech.color)}
                    `}
                    title={tech.icon || tech.name}
                  >
                    <span className="flex items-center gap-1">
                      {tech.icon && <span>{tech.icon}</span>}
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // 단순 나열 표시
  const displayTechnologies = maxDisplay 
    ? technologies.slice(0, maxDisplay) 
    : technologies;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayTechnologies.map((tech, index) => (
        <motion.div
          key={`${tech.name}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <div
            className={`
              px-3 py-2 rounded-full text-sm font-medium border cursor-default
              transition-all duration-200
              ${getColorClasses(tech.color)}
            `}
            title={`${tech.name} (${categoryLabels[tech.category] || tech.category})`}
          >
            <span className="flex items-center gap-1">
              {tech.icon && <span>{tech.icon}</span>}
              {tech.name}
            </span>
          </div>
        </motion.div>
      ))}
      
      {/* Show remaining count if maxDisplay is set */}
      {maxDisplay && technologies.length > maxDisplay && (
        <div className="px-3 py-2 rounded-full text-sm font-medium border border-dark-border text-dark-muted bg-dark-card">
          +{technologies.length - maxDisplay}
        </div>
      )}
    </div>
  );
};