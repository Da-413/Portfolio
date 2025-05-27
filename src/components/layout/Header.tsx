import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { navigationItems } from '@/data/personal';

interface HeaderProps {
  currentSection?: number;
  onSectionChange?: (sectionIndex: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentSection = 0, 
  onSectionChange 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-lg' 
          : 'bg-black/30 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            className="text-lg font-bold text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => onSectionChange?.(0)}
          >
            AI Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <Navigation 
              items={navigationItems} 
              currentSection={currentSection}
              onSectionChange={onSectionChange}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};