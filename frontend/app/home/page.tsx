'use client';

import HeroSection from '@/components/HeroSection';
import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import StatsBar from '@/components/StatsBar';
import PillarCards from '@/components/PillarCards';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

const row1Names = [
  'CCCC', 'CITIC Group', 'Sinosure', 'Alliance Global', 'Wellex Group',
  'Genertec', 'Sunwah Group', 'Phu Thai Holdings',
];

const row2Names = [
  'C Capital', 'DELTA Construction', 'Chuwa Bussan', 'SatTube TV',
  'Muzik Creative Label', 'Concrete Communication', 'Phu Thai Group JV',
];

function MarqueeRow({ names, direction }: { names: string[]; direction: 'left' | 'right' }) {
  const doubled = [...names, ...names];
  const cls = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex gap-3 whitespace-nowrap ${cls}`} style={{ width: 'max-content' }}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="bg-surface-100 border border-surface-300/60 text-gray-400 text-sm font-medium px-5 py-2.5 rounded-lg"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TabA() {
  const { lang } = useLanguage();
  const T = translations.home;

  return (
    <PageTransition>
      <HeroSection
        headline={tr(T.heroHeadline, lang)}
        subheadline={tr(T.heroSub, lang)}
        ctaLabel={tr(T.heroCTA, lang)}
        ctaHref="/business"
      />

      <StatsBar />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {tr(T.sectionHeading1, lang)}{' '}
                <span className="text-brand-400">{tr(T.sectionHeading2, lang)}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {tr(T.sectionSub, lang)}
              </p>
            </div>
          </RevealItem>
        </ScrollReveal>
        <PillarCards />
      </section>

      {/* Partner Marquee */}
      <section className="py-16 border-t border-surface-300/40">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">
            {tr(T.partnerLabel, lang)}
          </p>
        </div>
        <div className="space-y-3">
          <MarqueeRow names={row1Names} direction="left" />
          <MarqueeRow names={row2Names} direction="right" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-surface-300/40 bg-surface-50/40">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <ScrollReveal>
            <RevealItem>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  {tr(T.ctaHeading, lang)}
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
                  {tr(T.ctaSub, lang)}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors duration-200"
                >
                  {tr(T.ctaButton, lang)}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="mt-6">
                  <a
                    href="/docs/HYPAI_CI_EN.pdf"
                    download
                    className="text-brand-400 hover:text-brand-300 text-sm font-medium underline underline-offset-4 transition-colors duration-200"
                  >
                    Download Company Introduction (PDF)
                  </a>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
