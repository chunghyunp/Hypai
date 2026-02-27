'use client';

import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

// Border logic for a 2-col (mobile) → 4-col (desktop) grid of 4 items:
// Mobile:  item 0 = top-left, item 1 = top-right, item 2 = bottom-left, item 3 = bottom-right
// Desktop: all in one row
const borderClass = (i: number) => {
  const right  = i % 2 === 0 ? 'border-r' : '';           // left col → right border (mobile)
  const bottom = i < 2 ? 'border-b md:border-b-0' : '';   // top row  → bottom border (mobile only)
  const mdRight = i < 3 ? 'md:border-r' : '';             // all but last → right border (desktop)
  return [right, bottom, mdRight, 'border-gray-800'].filter(Boolean).join(' ');
};

function StatItem({
  stat,
  borderCls,
}: {
  stat: typeof translations.stats[number];
  borderCls: string;
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

  return (
    <div className={`text-center px-3 py-6 md:px-6 md:py-8 ${borderCls}`}>
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
        <div className="grid grid-cols-2 md:grid-cols-4">
          {translations.stats.map((stat, i) => (
            <StatItem key={stat.label.en} stat={stat} borderCls={borderClass(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
