import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children?: React.ReactNode; // ← children을 선택적으로 변경
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  title?: string; // 툴팁용 추가
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  href,
  disabled = false,
  className = '',
  type = 'button',
  title,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    outline: 'border-2 border-dark-border hover:border-blue-500 text-dark-text hover:text-blue-400',
    ghost: 'text-dark-muted hover:text-dark-text hover:bg-dark-card',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Icon만 있고 children이 없는 경우 아이콘 버튼으로 처리
  const isIconOnly = Icon && !children;
  const iconOnlyClasses = isIconOnly ? 'p-2' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${iconOnlyClasses} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-4 h-4 ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-4 h-4 ${children ? 'ml-2' : ''}`} />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        title={title}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      title={title}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};
