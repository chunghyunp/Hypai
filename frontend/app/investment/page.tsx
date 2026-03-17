'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import HoverCard from '@/components/HoverCard';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

function sectorTagClass(tag: string) {
  switch (tag) {
    case 'pink':    return 'text-pink-400';
    case 'violet':  return 'text-violet-400';
    case 'cyan':    return 'text-cyan-400';
    case 'emerald': return 'text-emerald-400';
    case 'rose':    return 'text-rose-400';
    case 'orange':  return 'text-amber-400';
    default:        return 'text-brand-400';
  }
}

export default function TabF() {
  const { lang } = useLanguage();
  const T = translations.investment;

  return (
    <PageTransition>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-10 md:pb-16">
        <ScrollReveal>
          <RevealItem>
            <span className="inline-block text-brand-400 font-semibold tracking-[0.15em] uppercase text-xs mb-4">
              {tr(T.badge, lang)}
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {tr(T.heading1, lang)}<br />
              <span className="text-brand-400">{tr(T.heading2, lang)}</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              {tr(T.sub, lang)}
            </p>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Portfolio grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-28">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {T.portfolio.map((p) => (
              <RevealItem key={p.company}>
                <HoverCard className="border border-surface-300/60 h-full">
                  <div className="mb-3">
                    <span className={`text-xs font-semibold tracking-[0.1em] uppercase ${sectorTagClass(p.tag)}`}>
                      {tr(p.sector, lang)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.company}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4">{tr(p.description, lang)}</p>
                  <p className="text-gray-300 text-sm border-t border-surface-300/40 pt-4">
                    <span className="text-brand-400 mr-1">→</span> {tr(p.highlight, lang)}
                  </p>
                </HoverCard>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
