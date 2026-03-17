'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';
import { MailIcon, MapPinIcon, LinkIcon } from '@/components/icons';

const contactIcons: Record<string, (props: { className?: string; size?: number }) => JSX.Element> = {
  'mail': MailIcon,
  'map-pin': MapPinIcon,
  'link': LinkIcon,
};

export default function TabD() {
  const { lang } = useLanguage();
  const T = translations.contact;

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — copy */}
            <ScrollReveal>
              <RevealItem>
                <span className="inline-block text-brand-400 font-semibold tracking-[0.15em] uppercase text-xs mb-4">
                  {tr(T.badge, lang)}
                </span>
              </RevealItem>
              <RevealItem>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {tr(T.heading1, lang)}<br />
                  <span className="text-brand-400">{tr(T.heading2, lang)}</span>
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="text-lg text-gray-400 leading-relaxed mb-12">
                  {tr(T.para, lang)}
                </p>
              </RevealItem>

              <div className="space-y-6">
                {T.channels.map((ch) => {
                  const IconComp = contactIcons[ch.icon];
                  return (
                    <RevealItem key={ch.label.en}>
                      <a href={ch.href} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                          {IconComp && <IconComp className="text-brand-400" size={18} />}
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-[0.1em]">
                            {tr(ch.label, lang)}
                          </div>
                          <div className="text-white font-medium text-sm group-hover:text-brand-400 transition-colors duration-200">
                            {ch.value}
                          </div>
                        </div>
                      </a>
                    </RevealItem>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal>
              <RevealItem>
                <div className="bg-surface-100/80 border border-surface-300/60 rounded-2xl p-6 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-8">{tr(T.formTitle, lang)}</h2>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                          {tr(T.labelName, lang)}
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder={tr(T.placeholderName, lang)}
                          className="w-full bg-surface-200 border border-surface-300/60 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
                          {tr(T.labelEmail, lang)}
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder={tr(T.placeholderEmail, lang)}
                          className="w-full bg-surface-200 border border-surface-300/60 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="subject">
                        {tr(T.labelSubject, lang)}
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder={tr(T.placeholderSubject, lang)}
                        className="w-full bg-surface-200 border border-surface-300/60 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="message">
                        {tr(T.labelMessage, lang)}
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder={tr(T.placeholderMsg, lang)}
                        className="w-full bg-surface-200 border border-surface-300/60 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow duration-200 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3.5 rounded-lg text-base transition-colors duration-200"
                    >
                      {tr(T.sendButton, lang)}
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
