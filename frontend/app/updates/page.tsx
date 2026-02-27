'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

type ArticleType = 'Press Release' | 'Partnership' | 'Project Update';

function typeBadgeClass(type: ArticleType): string {
  switch (type) {
    case 'Press Release':  return 'bg-brand-900/60 border-brand-700/40 text-brand-300';
    case 'Partnership':    return 'bg-emerald-900/60 border-emerald-700/40 text-emerald-300';
    case 'Project Update': return 'bg-violet-900/60 border-violet-700/40 text-violet-300';
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
            <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
              {tr(T.badge, lang)}
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {tr(T.heading1, lang)}{' '}
              <span className="text-brand-400">{tr(T.heading2, lang)}</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-gray-400 leading-relaxed">{tr(T.sub, lang)}</p>
          </RevealItem>
        </ScrollReveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 md:pb-28 space-y-6 md:space-y-8">
        <ScrollReveal>
          {T.articles.map((article) => (
            <RevealItem key={article.title.en}>
              <div className="border border-gray-800 rounded-2xl p-5 md:p-8 bg-gray-900/40 hover:border-gray-700 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-500 text-sm">{tr(article.date, lang)}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeBadgeClass(article.type)}`}>
                    {tr(T.types[article.type], lang)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                  {tr(article.title, lang)}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">{tr(article.excerpt, lang)}</p>
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
