import HeroSection from '@/components/HeroSection';
import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import HoverCard from '@/components/HoverCard';
import PageTransition from '@/components/PageTransition';

const features = [
  {
    icon: '🏗️',
    title: 'Project Development & Infrastructure',
    body: 'PPP-based large-scale projects including nuclear power, land reclamation, and special economic zones across Southeast Asia, Africa, and the Middle East.',
  },
  {
    icon: '🌏',
    title: 'Manufacturing & Global Distribution',
    body: 'Integrated SCM across OEM manufacturing, trade, and global distribution — generating over USD 100M in annual exports across 8,000+ channels in Asia.',
  },
  {
    icon: '💻',
    title: 'Digital Technology',
    body: 'Fintech, Blockchain, and AI solutions including VASP-based payment systems (EZPG), AI biometric authentication (Facial DNA), and blockchain incubation (Web3Labs).',
  },
  {
    icon: '💼',
    title: 'Investment Portfolio',
    body: 'Over KRW 10 trillion in investment secured across 50+ transactions spanning entertainment, real estate, healthcare, and manufacturing.',
  },
  {
    icon: '🌐',
    title: 'Global Presence',
    body: '14+ overseas branches in the US, UK, Turkey, China, Hong Kong, Singapore, the Philippines, and Japan.',
  },
  {
    icon: '🤝',
    title: 'Strategic Partners',
    body: 'Long-term partnerships with world-class organizations including CCCC (ENR Top 5), CITIC Group (Fortune 500), and Sinosure.',
  },
];

export default function TabA() {
  return (
    <PageTransition>
      <HeroSection
        headline="Connecting Technology Industry & Talent"
        subheadline="HYPAI is a global integrated enterprise spanning infrastructure, manufacturing, digital technology, and investment — driving sustainable growth worldwide."
        ctaLabel="Explore Our Business"
        ctaHref="/tab-c"
      />

      <section className="max-w-7xl mx-auto px-6 py-28">
        <ScrollReveal>
          <RevealItem>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Four core businesses.{' '}
                <span className="text-brand-400">One global vision.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                From large-scale infrastructure to cutting-edge digital technology,
                HYPAI drives sustainable growth through diversified global operations.
              </p>
            </div>
          </RevealItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <RevealItem key={f.title}>
                <HoverCard>
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{f.body}</p>
                </HoverCard>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-brand-900/30 border-t border-brand-800/40">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <ScrollReveal>
            <RevealItem>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Interested in partnering with HYPAI?
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                  Whether you represent a government, financial institution, or private enterprise —
                  we&apos;d love to explore the opportunity.
                </p>
                <a
                  href="/tab-d"
                  className="inline-block bg-brand-500 hover:bg-brand-400 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
