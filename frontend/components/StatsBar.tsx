'use client';

import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

function StatItem({
  stat,
  index,
}: {
  stat: typeof translations.stats[number];
  index: number;
}) {
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

  const isLast = index === translations.stats.length - 1;

  return (
    <div className={`text-center px-4 py-8 md:px-6 md:py-10 ${!isLast ? 'border-r border-surface-300/40' : ''}`}>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
        {stat.prefix && <span className="text-gray-400">{stat.prefix}</span>}
        <span ref={ref}>0</span>
        <span className="text-brand-400">{stat.suffix}</span>
      </div>
      <div className="text-gray-500 text-xs uppercase tracking-[0.15em] font-medium">
        {tr(stat.label, lang)}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="border-t border-b border-surface-300/40 bg-surface-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {translations.stats.map((stat, i) => (
            <StatItem key={stat.label.en} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
