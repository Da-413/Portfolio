import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from '@/types/project';

interface MetricsDisplayProps {
  metrics: Metric[];
  className?: string;
}

export const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ 
  metrics, 
  className = '' 
}) => {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={`${metric.label}-${index}`}
          className="bg-dark-card p-6 rounded-xl border border-dark-border text-center hover:border-blue-500/30 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.1)'
          }}
        >
          {/* Metric Value */}
          <motion.div 
            className={`text-3xl font-bold mb-2 ${
              metric.color || 'text-blue-400'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            {metric.value}
          </motion.div>

          {/* Metric Label */}
          <div className="text-sm text-dark-muted font-medium mb-2">
            {metric.label}
          </div>

          {/* Metric Description (optional) */}
          {metric.description && (
            <div className="text-xs text-dark-muted/80 leading-relaxed">
              {metric.description}
            </div>
          )}

          {/* Decorative element */}
          <motion.div
            className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
          />
        </motion.div>
      ))}
    </div>
  );
};