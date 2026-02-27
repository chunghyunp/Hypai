'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  heroHeadingVariants,
  heroSubVariants,
  heroCTAVariants,
  orbVariants,
  orbVariantsSlow,
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,theme(colors.brand.900/40)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,theme(colors.violet.900/30)_0%,transparent_60%)]" />

      {/* Floating orbs */}
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-brand-600/20 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={orbVariantsSlow}
        animate="animate"
        className="absolute bottom-32 left-[10%] w-96 h-96 rounded-full bg-violet-600/15 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={orbVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none"
        style={{ translateX: '-50%', translateY: '-50%' }}
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none tracking-tight mb-6">
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
          className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-8 md:mb-10"
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
            className="inline-block bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg transition-colors duration-200"
          >
            {ctaLabel} →
          </Link>
          <Link
            href="/business"
            className="inline-block border border-gray-700 hover:border-brand-500 text-gray-300 hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg transition-colors duration-200"
          >
            See our work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 text-gray-600 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <motion.rect
            x="5" y="4" width="2" height="5" rx="1" fill="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
