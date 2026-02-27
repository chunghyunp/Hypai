'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { navbarVariants } from '@/lib/motionVariants';
import NavLink from './NavLink';
import type { NavTab } from '@/types/navigation';

interface NavbarProps {
  tabs: NavTab[];
}

export default function Navbar({ tabs }: NavbarProps) {
  const pathname = usePathname();

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/60"
    >
      {/* Logo */}
      <motion.a
        href="/tab-a"
        className="font-black text-xl tracking-tight text-white"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        HYP<span className="text-brand-400">AI</span>
      </motion.a>

      {/* Nav links */}
      <div className="flex items-center gap-1 md:gap-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            tab={tab}
            isActive={pathname === tab.href || pathname.startsWith(tab.href + '/')}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="/tab-d"
        className="hidden md:inline-block bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        Get in touch
      </motion.a>
    </motion.nav>
  );
}
