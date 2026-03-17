'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import ParallaxSection from '@/components/ParallaxSection';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';
import { DownloadIcon } from '@/components/icons';

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
    case 'infra':      return 'bg-violet-500/10 border-violet-500/20 text-violet-300';
    case 'finance':    return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300';
    case 'realestate': return 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300';
    case 'distrib':    return 'bg-amber-500/10 border-amber-500/20 text-amber-300';
  }
}

export default function TabB() {
  const { lang } = useLanguage();
  const T = translations.about;

  return (
    <PageTransition>
      {/* Hero */}
      <ParallaxSection className="min-h-[60vh] flex items-center bg-surface-0">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 w-full">
          <ScrollReveal>
            <RevealItem>
              <span className="inline-block text-brand-400 font-semibold tracking-[0.15em] uppercase text-xs mb-4">
                {tr(T.badge, lang)}
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                {tr(T.heroLine1, lang)}<br />
                <span className="text-brand-400">{tr(T.heroLine2, lang)}</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                {tr(T.heroPara, lang)}
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Company Introduction Download */}
      <section className="border-t border-surface-300/40 bg-surface-50/60">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Company Introduction
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Download our official company introduction for a full overview of Hypai Labs.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/docs/HYPAI_CI_EN.pdf"
                download
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
              >
                <DownloadIcon size={16} />
                Download (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <ScrollReveal>
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16 text-center">
              {tr(T.howWeOperate, lang)}
            </h2>
          </RevealItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {T.pillars.map((p) => (
              <RevealItem key={p.title.en}>
                <div className="border border-surface-300/60 rounded-2xl p-6 md:p-8 hover:border-brand-600/40 transition-colors duration-200 bg-surface-100/60">
                  <h3 className="text-xl font-bold text-white mb-3">{tr(p.title, lang)}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{tr(p.body, lang)}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Teams */}
      <section className="bg-surface-50/60 border-t border-surface-300/40">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <ScrollReveal>
            <RevealItem>
              <p className="text-center text-gray-500 text-xs uppercase tracking-[0.2em] mb-6">
                {tr(T.teamsLabel, lang)}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {T.departments.map((dept) => (
                  <span
                    key={dept.en}
                    className="bg-surface-200 border border-surface-300/60 text-gray-300 text-sm font-medium px-4 py-2 rounded-lg"
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {tr(T.branchesHeading, lang)}
              </h2>
              <p className="text-gray-400 text-lg">{tr(T.branchesSub, lang)}</p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="flex flex-wrap justify-center gap-3">
              {branches.map((country) => (
                <div
                  key={country}
                  className="bg-brand-500/10 border border-brand-500/20 text-brand-300 font-semibold px-5 py-2.5 rounded-lg text-sm"
                >
                  {country}
                </div>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Partner Companies */}
      <section className="bg-surface-50/40 border-t border-surface-300/40">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-28">
          <ScrollReveal>
            <RevealItem>
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block text-brand-400 font-semibold tracking-[0.15em] uppercase text-xs mb-4">
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
                    <div className="border border-surface-300/60 rounded-2xl p-6 bg-surface-100/60 hover:border-surface-400/60 transition-colors duration-200 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${badgeCls} font-bold text-xs`}>
                          {p.abbr}
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-sm mb-3 leading-snug">{p.name}</h3>
                      <span className={`inline-block text-xs font-medium px-3 py-1 rounded-md border ${badgeCls}`}>
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
