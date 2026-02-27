import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';

const channels = [
  { icon: '✉️', label: 'Email',       value: 'master@hypaikorea.com',                        href: 'mailto:master@hypaikorea.com' },
  { icon: '📍', label: 'Head Office', value: '2F, 88-1 Nonhyeon-dong, Gangnam-gu, Seoul, Korea', href: '#' },
  { icon: '🌐', label: 'Website',     value: 'hypaikorea.com',                               href: '#' },
];

export default function TabD() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left — copy */}
            <ScrollReveal>
              <RevealItem>
                <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
                  Get in touch
                </span>
              </RevealItem>
              <RevealItem>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Let&apos;s build<br />
                  <span className="text-brand-400">something global.</span>
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                  Interested in a partnership, investment opportunity, or project collaboration?
                  Reach out to the HYPAI team.
                </p>
              </RevealItem>

              <div className="space-y-6">
                {channels.map((ch) => (
                  <RevealItem key={ch.label}>
                    <a
                      href={ch.href}
                      className="flex items-center gap-4 group"
                    >
                      <span className="text-2xl">{ch.icon}</span>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{ch.label}</div>
                        <div className="text-white font-medium group-hover:text-brand-400 transition-colors duration-200">
                          {ch.value}
                        </div>
                      </div>
                    </a>
                  </RevealItem>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal>
              <RevealItem>
                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-8">Send a message</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="What&apos;s this about?"
                        className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us more..."
                        className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-4 rounded-xl text-lg transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </RevealItem>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
