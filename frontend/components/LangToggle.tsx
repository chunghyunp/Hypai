'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <motion.button
      onClick={toggle}
      className="text-sm font-semibold px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 hover:border-brand-500 hover:text-white transition-colors duration-200 whitespace-nowrap"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {lang === 'en' ? '한국어' : 'English'}
    </motion.button>
  );
}
