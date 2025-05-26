import React from 'react';
import { Header } from './Header';

interface FullPageLayoutProps {
  children: React.ReactNode;
  currentSection?: number;
  onSectionChange?: (sectionIndex: number) => void;
}

export const FullPageLayout: React.FC<FullPageLayoutProps> = ({ 
  children, 
  currentSection = 0, 
  onSectionChange 
}) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-dark-bg text-dark-text">
      <Header 
        currentSection={currentSection}
        onSectionChange={onSectionChange}
      />
      <main className="h-full w-full">
        {children}
      </main>
      {/* Footer는 Contact 섹션에서 대체하므로 제거 */}
    </div>
  );
};