import React from 'react';
import { motion } from 'framer-motion';
import { NavigationItem } from '@/types/common';

interface NavigationProps {
  items: NavigationItem[];
  currentSection?: number;
  onSectionChange?: (sectionIndex: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  currentSection = 0,
  onSectionChange
}) => {
  // 섹션 매핑 (href를 섹션 인덱스로 변환)
  const sectionMap: { [key: string]: number } = {
    '#hero': 0,
    '#home': 0,
    '#about': 1,
    '#skills': 2,
    '#projects': 3,
    '#contact': 4,
  };

  return (
    <nav className="flex space-x-6">
      {items.map((item, index) => {
        const sectionIndex = sectionMap[item.href] ?? index;
        const isActive = currentSection === sectionIndex;
        
        return (
          <motion.button
            key={item.name}
            className={`
              transition-colors font-medium relative py-2
              ${isActive 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
              }
            `}
            value={item.name}
            onClick={() => {
              onSectionChange?.(sectionIndex);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.name}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                layoutId="activeIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </nav>
  );
};