'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  heroHeadingVariants,
  heroSubVariants,
  heroCTAVariants,
} from '@/lib/motionVariants';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
}: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-surface-0"
    >
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,theme(colors.brand.950/50)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,theme(colors.brand.950/20)_0%,transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 md:pb-20 w-full"
      >
        <motion.div
          variants={heroHeadingVariants}
          initial="initial"
          animate="animate"
          className="overflow-hidden"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            {headline.split(' ').map((word, i) => (
              <span
                key={i}
                className={i % 2 === 1 ? 'text-brand-400' : 'text-white'}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          variants={heroSubVariants}
          initial="initial"
          animate="animate"
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          {subheadline}
        </motion.p>

        <motion.div
          variants={heroCTAVariants}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-4"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3 md:px-8 md:py-3.5 rounded-lg text-base transition-colors duration-200"
          >
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/business"
            className="inline-block border border-surface-400 hover:border-brand-500 text-gray-300 hover:text-white font-semibold px-6 py-3 md:px-8 md:py-3.5 rounded-lg text-base transition-colors duration-200"
          >
            See our work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 text-gray-600 text-xs"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="uppercase tracking-[0.2em] text-[10px]">Scroll</span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <motion.rect
            x="5" y="4" width="2" height="5" rx="1" fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
