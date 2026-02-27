'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { navUnderlineVariants } from '@/lib/motionVariants';
import type { NavTab } from '@/types/navigation';

interface NavLinkProps {
  tab: NavTab;
  isActive: boolean;
}

export default function NavLink({ tab, isActive }: NavLinkProps) {
  return (
    <Link href={tab.href} className="relative group px-1 py-2">
      {/* Active sliding pill */}
      {isActive && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute inset-0 bg-brand-500/15 rounded-lg"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      <span
        className={`relative z-10 text-sm font-semibold transition-colors duration-200 ${
          isActive ? 'text-brand-400' : 'text-gray-400 group-hover:text-white'
        }`}
      >
        {tab.label}
      </span>

      {/* Hover underline */}
      <motion.span
        variants={navUnderlineVariants}
        initial="rest"
        whileHover="hover"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-400 rounded-full origin-left"
      />
    </Link>
  );
}
