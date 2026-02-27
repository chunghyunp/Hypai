import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import HoverCard from '@/components/HoverCard';
import PageTransition from '@/components/PageTransition';

const projects = [
  {
    tag: 'Infrastructure',
    title: 'Philippines Nuclear Power Plant',
    description:
      'G2G initiative applying Korean nuclear technology and PM expertise to support the Philippines\u2019 energy transition roadmap.',
    color: 'from-violet-600/20 to-brand-600/20',
    border: 'border-violet-700/30',
  },
  {
    tag: 'Infrastructure',
    title: 'Manila Waterfront City',
    description:
      '~USD 3B JV-based coastal mixed-use new city development on 318 hectares in Manila Bay. Phase 2 entry scheduled for 2025.',
    color: 'from-cyan-600/20 to-brand-600/20',
    border: 'border-cyan-700/30',
  },
  {
    tag: 'Infrastructure',
    title: 'Addis Tomorrow SEZ, Ethiopia',
    description:
      'PPP-based Special Economic Zone (~450,000 m\u00b2) integrating residential, commercial, and industrial functions. Phase 1 completion Q1 2026.',
    color: 'from-emerald-600/20 to-brand-600/20',
    border: 'border-emerald-700/30',
  },
  {
    tag: 'Infrastructure',
    title: 'Imam Khomeini Airport, Iran',
    description:
      '~USD 30B aviation and logistics hub project linking Europe and Asia, with 55M annual passenger capacity.',
    color: 'from-orange-600/20 to-brand-600/20',
    border: 'border-orange-700/30',
  },
  {
    tag: 'Manufacturing & Distribution',
    title: 'Global Distribution Network',
    description:
      'USD 100M+ annual revenues across 8,000+ channels in Taiwan (7-Eleven, Watsons), China (JD.com), Japan (Don Quijote), and Hong Kong.',
    color: 'from-pink-600/20 to-brand-600/20',
    border: 'border-pink-700/30',
  },
  {
    tag: 'Digital Technology',
    title: 'Fintech \u00b7 Blockchain \u00b7 AI',
    description:
      'VASP-based EZPG payment system, AI biometric Facial DNA, and blockchain incubator Web3Labs \u2014 building next-generation digital infrastructure.',
    color: 'from-red-600/20 to-brand-600/20',
    border: 'border-red-700/30',
  },
];

export default function TabC() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <ScrollReveal>
          <RevealItem>
            <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
              Our Business
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Four pillars.<br />
              <span className="text-brand-400">One vision.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              HYPAI operates across four core business areas, pursuing revenue diversification
              and sustainable long-term growth through global partnerships.
            </p>
          </RevealItem>
        </ScrollReveal>
      </section>

      {/* Business highlights grid */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <RevealItem key={p.title}>
                <HoverCard className={`bg-gradient-to-br ${p.color} border ${p.border} h-full`}>
                  <div className="mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-400">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.description}</p>
                </HoverCard>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
