import React from 'react'
import { motion } from 'framer-motion'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'spinner' | 'dots' | 'pulse' | 'data' | 'neural'
  text?: string
  fullScreen?: boolean
  className?: string
}

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: boolean
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const renderSpinner = () => (
    <div
      className={`${sizeStyles[size]} animate-spin rounded-full border-2 border-gray-600 border-t-blue-400`}
    />
  )

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`rounded-full bg-blue-400 ${
            size === 'sm' ? 'w-2 h-2' : 
            size === 'md' ? 'w-3 h-3' : 
            size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <motion.div
      className={`${sizeStyles[size]} rounded-full bg-gradient-to-r from-blue-400 to-purple-400`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
    />
  )

  // 데이터 처리 시각화
  const renderData = () => (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className={`bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm ${
            size === 'sm' ? 'w-1' : 
            size === 'md' ? 'w-1.5' : 
            size === 'lg' ? 'w-2' : 'w-3'
          }`}
          style={{
            height: size === 'sm' ? `${8 + i * 2}px` : 
                   size === 'md' ? `${12 + i * 3}px` : 
                   size === 'lg' ? `${16 + i * 4}px` : `${20 + i * 5}px`
          }}
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  )

  // 신경망 스타일
  const renderNeural = () => {
    const nodeSize = size === 'sm' ? 'w-2 h-2' : 
                   size === 'md' ? 'w-3 h-3' : 
                   size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'
    
    return (
      <div className="relative">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`${nodeSize} rounded-full bg-blue-400`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 40 20"
        >
          <motion.path
            d="M10 5 L30 15"
            stroke="#60a5fa"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </svg>
      </div>
    )
  }

  const renderLoadingContent = () => {
    switch (variant) {
      case 'spinner':
        return renderSpinner()
      case 'dots':
        return renderDots()
      case 'pulse':
        return renderPulse()
      case 'data':
        return renderData()
      case 'neural':
        return renderNeural()
      default:
        return renderSpinner()
    }
  }

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoadingContent()}
      {text && (
        <motion.p 
          className={`font-medium text-gray-300 ${textSizeStyles[size]}`}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

// 스켈레톤 로딩 (다크 테마)
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = '100%',
  height = '1rem',
  rounded = false
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 ${
        rounded ? 'rounded-full' : 'rounded'
      } ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0']
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  )
}

// 프로젝트 카드 스켈레톤
const ProjectCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 space-y-4 ${className}`}>
    <div className="flex justify-between items-start">
      <Skeleton height="1.5rem" width="60%" />
      <div className="flex space-x-2">
        <Skeleton height="2rem" width="2rem" rounded />
        <Skeleton height="2rem" width="2rem" rounded />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton height="1rem" />
      <Skeleton height="1rem" />
      <Skeleton height="1rem" width="80%" />
    </div>
    <div className="flex flex-wrap gap-2">
      <Skeleton height="1.5rem" width="4rem" rounded />
      <Skeleton height="1.5rem" width="3rem" rounded />
      <Skeleton height="1.5rem" width="5rem" rounded />
    </div>
    <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="text-center space-y-1">
        <Skeleton height="1.5rem" width="3rem" className="mx-auto" />
        <Skeleton height="0.75rem" width="4rem" className="mx-auto" />
      </div>
      <div className="text-center space-y-1">
        <Skeleton height="1.5rem" width="2rem" className="mx-auto" />
        <Skeleton height="0.75rem" width="3rem" className="mx-auto" />
      </div>
    </div>
  </div>
)

// 메트릭 리스트 스켈레톤
const MetricListSkeleton: React.FC<{ 
  items?: number
  className?: string 
}> = ({ items = 4, className = '' }) => (
  <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-4 text-center space-y-2">
        <Skeleton height="0.75rem" width="80%" className="mx-auto" />
        <Skeleton height="2rem" width="60%" className="mx-auto" />
        <Skeleton height="0.625rem" width="50%" className="mx-auto" />
      </div>
    ))}
  </div>
)

export { Loading, Skeleton, ProjectCardSkeleton, MetricListSkeleton }