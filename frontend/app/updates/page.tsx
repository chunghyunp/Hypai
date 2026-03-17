'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

type ArticleType = 'Press Release' | 'Partnership' | 'Project Update';

function typeBadgeClass(type: ArticleType): string {
  switch (type) {
    case 'Press Release':  return 'bg-brand-500/10 border-brand-500/20 text-brand-300';
    case 'Partnership':    return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300';
    case 'Project Update': return 'bg-violet-500/10 border-violet-500/20 text-violet-300';
  }
}

export default function TabE() {
  const { lang } = useLanguage();
  const T = translations.updates;

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-10 md:pb-16">
        <ScrollReveal>
          <RevealItem>
            <span className="inline-block text-brand-400 font-semibold tracking-[0.15em] uppercase text-xs mb-4">
              {tr(T.badge, lang)}
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {tr(T.heading1, lang)}{' '}
              <span className="text-brand-400">{tr(T.heading2, lang)}</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-lg text-gray-400 leading-relaxed">{tr(T.sub, lang)}</p>
          </RevealItem>
        </ScrollReveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-28 space-y-5 md:space-y-6">
        <ScrollReveal>
          {T.articles.map((article) => (
            <RevealItem key={article.title.en}>
              <div className="border border-surface-300/60 rounded-2xl p-6 md:p-8 bg-surface-100/60 hover:border-surface-400/60 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-500 text-sm">{tr(article.date, lang)}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-md border ${typeBadgeClass(article.type)}`}>
                    {tr(T.types[article.type], lang)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                  {tr(article.title, lang)}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm mb-5">{tr(article.excerpt, lang)}</p>
                <a
                  href="#"
                  className="text-brand-400 font-semibold hover:text-brand-300 transition-colors duration-200 text-sm"
                >
                  {tr(T.readMore, lang)}
                </a>
              </div>
            </RevealItem>
          ))}
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
