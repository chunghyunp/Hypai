import { Variants } from 'framer-motion';

// Page enter/exit
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// Navbar slide-in from top
export const navbarVariants: Variants = {
  initial: { y: -80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Hero heading — expo-out with skewY
export const heroHeadingVariants: Variants = {
  initial: { opacity: 0, y: 60, skewY: 6 },
  animate: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const heroSubVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

export const heroCTAVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

// Scroll-reveal stagger container
export const revealContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Scroll-reveal individual item
export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Card hover lift
export const cardHoverVariants: Variants = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 48px rgba(0,0,0,0.18)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Nav underline
export const navUnderlineVariants: Variants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

// Floating orb
export const orbVariants: Variants = {
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    scale: [1, 1.08, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const orbVariantsSlow: Variants = {
  animate: {
    y: [0, 20, 0],
    x: [0, -20, 0],
    scale: [1, 0.93, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
