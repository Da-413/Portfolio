import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'glass' | 'metric'
  hover?: boolean
  clickable?: boolean
  index?: number
}

interface CardHeaderProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: React.ReactNode
}

interface CardContentProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: React.ReactNode
}

interface CardFooterProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className = '', 
    children, 
    variant = 'default',
    hover = true,
    clickable = false,
    index = 0,
    ...props 
  }, ref) => {
    const baseStyles = 'rounded-xl border transition-all duration-300'
    
    const variantStyles = {
      default: 'bg-gray-900/50 border-gray-800/50 backdrop-blur-sm',
      elevated: 'bg-gray-900/80 border-gray-700/50 shadow-2xl backdrop-blur-md',
      glass: 'bg-white/5 border-white/10 backdrop-blur-lg',
      metric: 'bg-gradient-to-br from-gray-900/60 to-gray-800/60 border-gray-700/30'
    }
    
    const hoverStyles = hover ? 'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10' : ''
    const clickableStyles = clickable ? 'cursor-pointer hover:bg-gray-800/60' : ''

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={hover ? { y: -8 } : undefined}
        className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${clickableStyles} group p-6 ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={`flex flex-col space-y-2 pb-4 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={`text-gray-300 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={`flex items-center justify-between pt-4 mt-4 border-t border-gray-800/50 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
)

// 특별한 카드 타입들
interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red'
  trend?: 'up' | 'down' | 'stable'
  index?: number
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  color = 'blue',
  trend,
  index = 0 
}) => {
  const colorStyles = {
    blue: 'text-blue-400 border-blue-500/30',
    green: 'text-green-400 border-green-500/30',
    purple: 'text-purple-400 border-purple-500/30',
    orange: 'text-orange-400 border-orange-500/30',
    red: 'text-red-400 border-red-500/30'
  }

  const trendIcons = {
    up: '↗',
    down: '↘',
    stable: '→'
  }

  return (
    <Card variant="metric" index={index} className="text-center">
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
          {title}
        </h4>
        <div className={`text-2xl font-bold ${colorStyles[color].split(' ')[0]}`}>
          {value}
        </div>
        {subtitle && (
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
            {trend && <span>{trendIcons[trend]}</span>}
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </Card>
  )
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter, MetricCard }