'use client';

import { motion } from 'framer-motion';
import { revealContainerVariants, revealItemVariants } from '@/lib/motionVariants';

export function RevealItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={revealItemVariants}>
      {children}
    </motion.div>
  );
}

export default function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={revealContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
