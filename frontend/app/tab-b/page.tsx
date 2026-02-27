import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import ParallaxSection from '@/components/ParallaxSection';

const pillars = [
  {
    title: 'Governments & Public Institutions',
    body: 'We work alongside governments and public agencies to plan, manage, and execute national infrastructure projects through Public-Private Partnerships (PPP).',
  },
  {
    title: 'Global Distribution',
    body: 'Our integrated SCM unifies OEM manufacturing, trade, and distribution across 14+ overseas branches spanning Asia, Europe, and the Middle East.',
  },
  {
    title: 'Technology & Innovation',
    body: 'From Fintech and Blockchain to AI-powered biometrics, we build next-generation digital ecosystems for a fast-moving world.',
  },
  {
    title: 'Investment & Growth',
    body: 'With over KRW 10 trillion in secured investment and 50+ transactions, we actively create cross-industry synergies across our portfolio.',
  },
];

const departments = [
  'Distribution & Trade',
  'Blockchain',
  'Construction & Infrastructure',
  'Finance',
  'Content & Culture',
  'Design & Marketing',
  'HR & General Affairs',
];

const branches = ['US', 'UK', 'Turkey', 'China', 'Hong Kong', 'Singapore', 'Philippines', 'Japan'];

export default function TabB() {
  return (
    <PageTransition>
      {/* Hero */}
      <ParallaxSection className="min-h-[60vh] flex items-center bg-gradient-to-br from-gray-950 via-brand-950/60 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-28 w-full">
          <ScrollReveal>
            <RevealItem>
              <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Company Overview
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                A global enterprise<br />
                <span className="text-brand-400">built on connection.</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                HYPAI Co., Ltd. was founded in 2016 in Seoul, Korea. Through partnerships with
                governments, public institutions, and investors, we connect technology, opportunities,
                and talent to drive sustainable growth worldwide.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Operational Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <ScrollReveal>
          <RevealItem>
            <h2 className="text-4xl font-bold text-white mb-16 text-center">How We Operate</h2>
          </RevealItem>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <RevealItem key={p.title}>
                <div className="border border-gray-800 rounded-2xl p-8 hover:border-brand-700/60 transition-colors duration-300 bg-gray-900/40">
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Leadership & Teams */}
      <section className="bg-gray-900/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <ScrollReveal>
            <RevealItem>
              <h2 className="text-4xl font-bold text-white mb-16 text-center">Leadership & Teams</h2>
            </RevealItem>

            {/* Founder card */}
            <div className="flex justify-center mb-16">
              <RevealItem>
                <div className="text-center bg-gray-900/60 border border-brand-700/40 rounded-2xl px-16 py-10">
                  <div className="text-6xl mb-4">👔</div>
                  <div className="font-semibold text-white text-xl">Jay Yoon</div>
                  <div className="text-brand-400 mt-1">Founder &amp; CEO</div>
                  <div className="text-sm text-gray-500 mt-1">Est. March 15, 2016</div>
                </div>
              </RevealItem>
            </div>

            {/* Department badges */}
            <RevealItem>
              <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">Specialized Teams</p>
              <div className="flex flex-wrap justify-center gap-3">
                {departments.map((dept) => (
                  <span
                    key={dept}
                    className="bg-gray-800 border border-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Branches */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                14+ Overseas Branches
              </h2>
              <p className="text-gray-400 text-lg">
                A truly global footprint spanning four continents.
              </p>
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
    </PageTransition>
  );
}
