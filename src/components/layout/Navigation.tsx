import React from 'react';
import { motion } from 'framer-motion';
import { NavigationItem } from '@/types/common';

interface NavigationProps {
  items: NavigationItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
  currentSection?: number;
  onSectionChange?: (sectionIndex: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  isMobile = false, 
  onItemClick,
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
    '/': 0,
    '/about': 1,
    '/skills': 2,
    '/projects': 3,
    '/contact': 4
  };

  const handleClick = (href: string, index: number) => {
    // 풀페이지 스크롤 기능이 있는 경우 섹션 이동
    if (onSectionChange) {
      const sectionIndex = sectionMap[href] ?? index;
      onSectionChange(sectionIndex);
    } 
    // 일반적인 앵커 스크롤
    else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    // 페이지 라우팅 (Next.js Router 사용 시)
    else if (href.startsWith('/')) {
      // Next.js의 useRouter를 사용하는 경우
      // router.push(href);
      window.location.href = href;
    }
    // 외부 링크
    else if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener noreferrer');
    }
    
    onItemClick?.();
  };

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {items.map((item, index) => {
        const isActive = currentSection === (sectionMap[item.href] ?? index);
        
        return (
          <motion.a
            key={item.name}
            href={item.href}
            className={`
              transition-colors cursor-pointer font-medium
              ${isActive 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-white hover:text-blue-400'
              }
              ${isMobile ? 'py-2 px-4 rounded-lg hover:bg-white/10' : ''}
            `}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.href, index);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.name}
            {isActive && !isMobile && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                layoutId="activeIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.a>
        );
      })}
    </nav>
  );
};