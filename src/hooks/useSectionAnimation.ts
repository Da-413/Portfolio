import { useState, useEffect } from 'react';

export const useSectionAnimation = (currentSection: number, sectionIndex: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (currentSection === sectionIndex) {
      setIsVisible(true);
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    } else {
      setIsVisible(false);
    }
  }, [currentSection, sectionIndex, hasAnimated]);

  return {
    isVisible,
    hasAnimated,
    shouldAnimate: isVisible && !hasAnimated
  };
};