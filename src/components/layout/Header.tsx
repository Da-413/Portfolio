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
      className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">AI Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex space-x-6">
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