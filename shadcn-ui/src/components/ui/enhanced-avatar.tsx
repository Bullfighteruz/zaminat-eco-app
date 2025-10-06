import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedAvatarProps {
  emoji: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  glowColor?: 'green' | 'blue' | 'purple' | 'yellow' | 'red' | 'none';
  showCrown?: boolean;
  className?: string;
  profileFrame?: string; // Add profile frame support
}

const sizeClasses = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-12 h-12 text-xl',
  lg: 'w-16 h-16 text-2xl',
  xl: 'w-20 h-20 text-3xl',
  '2xl': 'w-24 h-24 text-4xl'
};

const glowColors = {
  green: 'shadow-green-400/50',
  blue: 'shadow-blue-400/50',
  purple: 'shadow-purple-400/50',
  yellow: 'shadow-yellow-400/50',
  red: 'shadow-red-400/50',
  none: ''
};

// Profile frame gradients
const frameGradients = {
  default: 'from-gray-300 to-gray-400',
  eco_champion: 'from-green-400 via-emerald-500 to-teal-500',
  climate_warrior: 'from-red-500 via-orange-500 to-yellow-500',
  recycling_master: 'from-blue-400 via-cyan-500 to-teal-500',
  legendary_eco_star: 'from-yellow-400 via-orange-500 to-red-500',
  innovation_master: 'from-cyan-400 via-blue-500 to-purple-600',
  nature_guardian: 'from-pink-500 via-purple-500 to-indigo-600'
};

export const EnhancedAvatar: React.FC<EnhancedAvatarProps> = ({
  emoji,
  size = 'md',
  glowColor = 'none',
  showCrown = false,
  className,
  profileFrame = 'default'
}) => {
  const frameGradient = frameGradients[profileFrame as keyof typeof frameGradients] || frameGradients.default;
  
  return (
    <div className="relative inline-block">
      {/* Profile Frame */}
      {profileFrame && profileFrame !== 'default' && (
        <motion.div 
          className={cn(
            "absolute inset-0 rounded-full p-1",
            `bg-gradient-to-r ${frameGradient}`
          )}
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-white rounded-full" />
        </motion.div>
      )}
      
      {/* Avatar Container */}
      <motion.div
        className={cn(
          'relative flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-lg transition-all duration-300',
          sizeClasses[size],
          glowColor !== 'none' && `shadow-lg ${glowColors[glowColor]}`,
          className
        )}
        whileHover={{ 
          scale: 1.05,
          boxShadow: glowColor !== 'none' ? '0 0 20px rgba(34, 197, 94, 0.4)' : undefined
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{
          zIndex: 10,
          position: 'relative'
        }}
      >
        {/* Glow Effect */}
        {glowColor !== 'none' && (
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full blur-md opacity-50',
              `bg-${glowColor}-400`
            )}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        {/* Emoji */}
        <span className="relative z-10 select-none">{emoji}</span>
        
        {/* Crown for special users */}
        {showCrown && (
          <motion.div
            className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1 shadow-md border border-yellow-300"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Crown className="h-2 w-2 text-yellow-800" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};