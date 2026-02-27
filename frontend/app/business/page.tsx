'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import HoverCard from '@/components/HoverCard';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

export default function TabC() {
  const { lang } = useLanguage();
  const T = translations.business;

  return (
    <PageTransition>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-10 md:pb-16">
        <ScrollReveal>
          <RevealItem>
            <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
              {tr(T.badge, lang)}
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {tr(T.heading1, lang)}<br />
              <span className="text-brand-400">{tr(T.heading2, lang)}</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              {tr(T.sub, lang)}
            </p>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Business highlights grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-28">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {T.projects.map((p) => (
              <RevealItem key={p.title}>
                <HoverCard className={`bg-gradient-to-br ${p.color} border ${p.border} h-full`}>
                  <div className="mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-400">
                      {tr(T.tags[p.tag], lang)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{tr(p.description, lang)}</p>
                </HoverCard>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
