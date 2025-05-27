import { useState, useEffect, useRef } from 'react';

interface UseFullPageScrollProps {
  sectionsLength: number;
}

export const useFullPageScroll = ({ sectionsLength }: UseFullPageScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 섹션 이동 함수
  const goToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sectionsLength) return;
    setIsScrolling(true);
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // 풀페이지 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSection < sectionsLength - 1) {
        goToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        goToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          if (currentSection < sectionsLength - 1) {
            goToSection(currentSection + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSection > 0) {
            goToSection(currentSection - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          goToSection(0);
          break;
        case 'End':
          e.preventDefault();
          goToSection(sectionsLength - 1);
          break;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sectionsLength]);

  return {
    currentSection,
    isScrolling,
    containerRef,
    goToSection
  };
};