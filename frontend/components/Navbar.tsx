'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { navbarVariants } from '@/lib/motionVariants';
import NavLink from './NavLink';
import type { NavTab } from '@/types/navigation';

interface NavbarProps {
  tabs: NavTab[];
}

export default function Navbar({ tabs }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-surface-0/85 backdrop-blur-xl border-b border-surface-300/40"
      >
        {/* Logo */}
        <motion.a
          href="/home"
          className="shrink-0"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <Image
            src="/hypailogo.png"
            alt="Hypai Labs"
            width={96}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              tab={tab}
              isActive={pathname === tab.href || pathname.startsWith(tab.href + '/')}
            />
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href="/contact"
            className="hidden lg:inline-block bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Get in touch
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface-0/95 backdrop-blur-xl border-b border-surface-300/40 md:hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    pathname === tab.href
                      ? 'text-white bg-surface-200'
                      : 'text-gray-400 hover:text-white hover:bg-surface-200/50'
                  }`}
                >
                  {tab.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
