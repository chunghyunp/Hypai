'use client';

import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

function StatItem({ stat }: { stat: typeof translations.stats[number] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true });
  const { lang } = useLanguage();

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, stat.target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = Math.round(v).toString();
        }
      },
    });
    return controls.stop;
  }, [inView, motionValue, stat.target]);

  return (
    <div className="text-center px-3 py-6 md:px-6 md:py-8">
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span ref={ref}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
        {tr(stat.label, lang)}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-t border-b border-gray-800 bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 divide-y md:divide-y-0">
          {translations.stats.map((stat) => (
            <StatItem key={stat.label.en} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
