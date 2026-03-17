'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { NavTab } from '@/types/navigation';

interface NavLinkProps {
  tab: NavTab;
  isActive: boolean;
}

export default function NavLink({ tab, isActive }: NavLinkProps) {
  return (
    <Link href={tab.href} className="relative group px-3 py-2">
      {/* Active indicator */}
      {isActive && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute inset-0 bg-brand-500/10 rounded-lg"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      <span
        className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-brand-400' : 'text-gray-400 group-hover:text-white'
        }`}
      >
        {tab.label}
      </span>

      {/* Hover underline */}
      {!isActive && (
        <span className="absolute bottom-1 left-3 right-3 h-px bg-brand-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
      )}
    </Link>
  );
}
