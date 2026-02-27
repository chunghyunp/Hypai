'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import ParallaxSection from '@/components/ParallaxSection';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

const branches = ['US', 'UK', 'Turkey', 'China', 'Hong Kong', 'Singapore', 'Philippines', 'Japan'];

type Sector = 'infra' | 'finance' | 'realestate' | 'distrib';

const partners: {
  abbr: string;
  name: string;
  area: keyof typeof translations.about.partnerAreas;
  sector: Sector;
}[] = [
  { abbr: 'CCCC',  name: 'China Communications Construction Company', area: 'Infrastructure & Construction',         sector: 'infra' },
  { abbr: 'GTC',   name: 'Genertec (China General Technology Group)', area: 'Infrastructure & Industrial',           sector: 'infra' },
  { abbr: 'CHW',   name: 'Chuwa Bussan Co., Ltd.',                    area: 'Equipment Trading & Infrastructure',    sector: 'infra' },
  { abbr: 'DLT',   name: 'DELTA Construction Group',                  area: 'Construction & Infrastructure',         sector: 'infra' },
  { abbr: 'CITIC', name: 'CITIC Group',                               area: 'Finance, Real Estate & Investment',     sector: 'finance' },
  { abbr: 'SNS',   name: 'Sinosure',                                  area: 'Export Credit & Risk Insurance',        sector: 'finance' },
  { abbr: 'CC',    name: 'C Capital',                                 area: 'Private Equity & Digital Assets',       sector: 'finance' },
  { abbr: 'AGG',   name: 'Alliance Global Group',                     area: 'Real Estate, Tourism & F&B',            sector: 'realestate' },
  { abbr: 'WLX',   name: 'Wellex Group',                              area: 'Real Estate & Urban Development',       sector: 'realestate' },
  { abbr: 'SWH',   name: 'Sunwah Group',                              area: 'Real Estate & Diversified Investments', sector: 'realestate' },
  { abbr: 'PTH',   name: 'Phu Thai Holdings Group',                   area: 'Consumer Goods Distribution & Trade',  sector: 'distrib' },
];

function sectorColors(sector: Sector) {
  switch (sector) {
    case 'infra':      return 'bg-violet-900/50 border-violet-700/40 text-violet-300';
    case 'finance':    return 'bg-emerald-900/50 border-emerald-700/40 text-emerald-300';
    case 'realestate': return 'bg-cyan-900/50 border-cyan-700/40 text-cyan-300';
    case 'distrib':    return 'bg-orange-900/50 border-orange-700/40 text-orange-300';
  }
}

export default function TabB() {
  const { lang } = useLanguage();
  const T = translations.about;

  return (
    <PageTransition>
      {/* Hero */}
      <ParallaxSection className="min-h-[60vh] flex items-center bg-gradient-to-br from-gray-950 via-brand-950/60 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 w-full">
          <ScrollReveal>
            <RevealItem>
              <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
                {tr(T.badge, lang)}
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                {tr(T.heroLine1, lang)}<br />
                <span className="text-brand-400">{tr(T.heroLine2, lang)}</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                {tr(T.heroPara, lang)}
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Operational Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-28">
        <ScrollReveal>
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16 text-center">
              {tr(T.howWeOperate, lang)}
            </h2>
          </RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {T.pillars.map((p) => (
              <RevealItem key={p.title.en}>
                <div className="border border-gray-800 rounded-2xl p-5 md:p-8 hover:border-brand-700/60 transition-colors duration-300 bg-gray-900/40">
                  <h3 className="text-2xl font-bold text-white mb-3">{tr(p.title, lang)}</h3>
                  <p className="text-gray-400 leading-relaxed">{tr(p.body, lang)}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Teams */}
      <section className="bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <ScrollReveal>
            <RevealItem>
              <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">
                {tr(T.teamsLabel, lang)}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {T.departments.map((dept) => (
                  <span
                    key={dept.en}
                    className="bg-gray-800 border border-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {tr(dept, lang)}
                  </span>
                ))}
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Branches */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-28">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {tr(T.branchesHeading, lang)}
              </h2>
              <p className="text-gray-400 text-lg">{tr(T.branchesSub, lang)}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-wrap justify-center gap-4">
              {branches.map((country) => (
                <div
                  key={country}
                  className="bg-brand-900/30 border border-brand-800/50 text-brand-300 font-semibold px-6 py-3 rounded-full text-sm"
                >
                  {country}
                </div>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Partner Companies */}
      <section className="bg-gray-900/40 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <ScrollReveal>
            <RevealItem>
              <div className="text-center mb-10 md:mb-16">
                <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
                  {tr(T.partnerBadge, lang)}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tr(T.partnerHeading, lang)}</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{tr(T.partnerSub, lang)}</p>
              </div>
            </RevealItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {partners.map((p) => {
                const badgeCls = sectorColors(p.sector);
                const areaLabel = tr(T.partnerAreas[p.area], lang);
                return (
                  <RevealItem key={p.abbr}>
                    <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900/50 hover:border-gray-700 transition-colors duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${badgeCls} font-bold text-sm`}>
                          {p.abbr}
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-base mb-3 leading-snug">{p.name}</h3>
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${badgeCls}`}>
                        {areaLabel}
                      </span>
                    </div>
                  </RevealItem>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
