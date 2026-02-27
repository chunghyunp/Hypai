'use client';

import { motion } from 'framer-motion';
import { cardHoverVariants } from '@/lib/motionVariants';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`bg-gray-900/60 border border-gray-800 rounded-2xl p-7 cursor-default ${className}`}
    >
      {children}
    </motion.div>
  );
}
