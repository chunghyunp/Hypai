'use client';

import { motion } from 'framer-motion';
import { revealContainerVariants, pillarCardVariants } from '@/lib/motionVariants';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';
import { pillarIcons } from './icons';

export default function PillarCards() {
  const { lang } = useLanguage();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={revealContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {translations.pillars.map((f, i) => {
        const IconComponent = pillarIcons[f.icon];
        return (
          <motion.div
            key={f.title.en}
            custom={i % 2 === 0 ? -1 : 1}
            variants={pillarCardVariants}
            className="group border border-surface-300/60 rounded-2xl p-6 md:p-8 hover:border-brand-600/40 transition-colors duration-200 bg-surface-100/60"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:bg-brand-500/15 transition-colors duration-200">
              {IconComponent && <IconComponent className="text-brand-400" size={20} />}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{tr(f.title, lang)}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{tr(f.body, lang)}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
