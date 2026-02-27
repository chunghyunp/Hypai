'use client';

import { motion } from 'framer-motion';
import { revealContainerVariants, pillarCardVariants } from '@/lib/motionVariants';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

export default function PillarCards() {
  const { lang } = useLanguage();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={revealContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {translations.pillars.map((f, i) => (
        <motion.div
          key={f.title.en}
          custom={i % 2 === 0 ? -1 : 1}
          variants={pillarCardVariants}
          className="border border-gray-800 rounded-2xl p-5 md:p-8 hover:border-brand-700/60 transition-colors duration-300 bg-gray-900/40"
        >
          <div className="text-4xl mb-4">{f.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{tr(f.title, lang)}</h3>
          <p className="text-gray-400 leading-relaxed">{tr(f.body, lang)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
