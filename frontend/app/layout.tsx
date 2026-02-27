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
      { id: 'tab-a', label: 'Home',       href: '/tab-a' },
      { id: 'tab-b', label: 'About',      href: '/tab-b' },
      { id: 'tab-c', label: 'Business',   href: '/tab-c' },
      { id: 'tab-e', label: 'Updates',    href: '/tab-e' },
      { id: 'tab-f', label: 'Investment', href: '/tab-f' },
      { id: 'tab-d', label: 'Contact',    href: '/tab-d' },
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
