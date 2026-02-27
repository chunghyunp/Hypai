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
      <div className={`flex gap-4 whitespace-nowrap ${cls}`} style={{ width: 'max-content' }}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="bg-gray-800/70 border border-gray-700 text-gray-300 text-sm font-medium px-5 py-2 rounded-full"
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

      <section className="max-w-7xl mx-auto px-6 py-24">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
      <section className="py-16 border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
            {tr(T.partnerLabel, lang)}
          </p>
        </div>
        <div className="space-y-4">
          <MarqueeRow names={row1Names} direction="left" />
          <MarqueeRow names={row2Names} direction="right" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="border-t border-brand-800/40"
        style={{
          backgroundImage: 'radial-gradient(circle, #1534d5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-28">
          <ScrollReveal>
            <RevealItem>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {tr(T.ctaHeading, lang)}
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                  {tr(T.ctaSub, lang)}
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-brand-500 hover:bg-brand-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors duration-200"
                >
                  {tr(T.ctaButton, lang)}
                </a>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
