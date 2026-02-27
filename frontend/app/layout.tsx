import './globals.css';
import type { Metadata } from 'next';
import { fetchNavigation } from '@/lib/fetchNavigation';
import Navbar from '@/components/Navbar';
import AnimatePresenceWrapper from '@/components/AnimatePresenceWrapper';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Hypai Labs',
  description: 'Hypai Labs — Connecting Industry & Global Talent.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let tabs: Awaited<ReturnType<typeof fetchNavigation>>['tabs'] = [];

  try {
    const config = await fetchNavigation();
    tabs = config.tabs;
  } catch (err) {
    console.error('Could not load navigation from backend:', err);
    // Fallback tabs so the site stays usable
    tabs = [
      { id: 'home',       label: 'Home',       href: '/home' },
      { id: 'about',      label: 'About',      href: '/about' },
      { id: 'business',   label: 'Business',   href: '/business' },
      { id: 'updates',    label: 'Updates',    href: '/updates' },
      { id: 'investment', label: 'Investment', href: '/investment' },
      { id: 'contact',    label: 'Contact',    href: '/contact' },
    ];
  }

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar tabs={tabs} />
          <AnimatePresenceWrapper>
            {children}
          </AnimatePresenceWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
