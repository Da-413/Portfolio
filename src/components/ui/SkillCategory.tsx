import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory as SkillCategoryType } from '@/types/skill';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

// 색상 변환 함수
const getBgColor = (textColor: string) => {
  const colorMap: { [key: string]: string } = {
    'text-blue-400': 'from-blue-400 to-blue-500',
    'text-purple-400': 'from-purple-400 to-purple-500',
    'text-green-400': 'from-green-400 to-green-500',
    'text-orange-400': 'from-orange-400 to-orange-500',
    'text-indigo-400': 'from-indigo-400 to-indigo-500',
    'text-gray-400': 'from-gray-400 to-gray-500',
    'text-cyan-400': 'from-cyan-400 to-cyan-500',
    'text-red-400': 'from-red-400 to-red-500',
  };
  return colorMap[textColor] || 'from-blue-400 to-blue-500';
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center mb-3">
        <div className="text-2xl mb-2">
          {category.icon}
        </div>
      </div>
      
      <h3 className={`text-lg font-semibold mb-3 text-center ${category.color}`}>
        {category.name}
      </h3>
      
      <p className="text-sm text-white/70 mb-4 text-center">
        {category.description}
      </p>
      
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="flex justify-between items-center">
            <span className="text-white text-sm">{skill.name}</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 bg-white/20 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${getBgColor(category.color)}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-xs text-white/60 w-8 text-right">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};