import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-purple-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    outline: 'border border-dark-border text-dark-muted',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};