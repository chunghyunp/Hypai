'use client';

import ScrollReveal, { RevealItem } from '@/components/ScrollReveal';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { translations, tr } from '@/lib/translations';

export default function TabD() {
  const { lang } = useLanguage();
  const T = translations.contact;

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left — copy */}
            <ScrollReveal>
              <RevealItem>
                <span className="inline-block text-brand-400 font-semibold tracking-widest uppercase text-sm mb-4">
                  {tr(T.badge, lang)}
                </span>
              </RevealItem>
              <RevealItem>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  {tr(T.heading1, lang)}<br />
                  <span className="text-brand-400">{tr(T.heading2, lang)}</span>
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                  {tr(T.para, lang)}
                </p>
              </RevealItem>

              <div className="space-y-6">
                {T.channels.map((ch) => (
                  <RevealItem key={ch.label.en}>
                    <a href={ch.href} className="flex items-center gap-4 group">
                      <span className="text-2xl">{ch.icon}</span>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {tr(ch.label, lang)}
                        </div>
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
                  <h2 className="text-2xl font-bold text-white mb-8">{tr(T.formTitle, lang)}</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                          {tr(T.labelName, lang)}
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder={tr(T.placeholderName, lang)}
                          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
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
                          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
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
                        className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
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
                        className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-4 rounded-xl text-lg transition-colors duration-200"
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
