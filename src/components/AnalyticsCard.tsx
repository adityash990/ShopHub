import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color,
  index
}) => {
  const getGradient = (color: string) => {
    switch (color) {
      case 'text-green-600':
        return 'from-emerald-500 to-green-500';
      case 'text-blue-600':
        return 'from-blue-500 to-indigo-500';
      case 'text-purple-600':
        return 'from-purple-500 to-violet-500';
      case 'text-orange-600':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div 
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 10 }}
          className={`p-3 rounded-xl bg-gradient-to-r ${getGradient(color)} shadow-lg`}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {change}
        </motion.span>
      </div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        className="text-3xl font-bold text-gray-900 mb-1"
      >
        {value}
      </motion.h3>
      <p className="text-gray-600 font-medium">{title}</p>
    </motion.div>
  );
};