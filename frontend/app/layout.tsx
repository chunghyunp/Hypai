import './globals.css';
import type { Metadata } from 'next';
import { fetchNavigation } from '@/lib/fetchNavigation';
import Navbar from '@/components/Navbar';
import AnimatePresenceWrapper from '@/components/AnimatePresenceWrapper';

export const metadata: Metadata = {
  title: 'HYPAI',
  description: 'HYPAI — Bold experiences, built fast.',
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
      { id: 'tab-a', label: 'Home',    href: '/tab-a' },
      { id: 'tab-b', label: 'About',   href: '/tab-b' },
      { id: 'tab-c', label: 'Work',    href: '/tab-c' },
      { id: 'tab-d', label: 'Contact', href: '/tab-d' },
    ];
  }

  return (
    <html lang="en">
      <body>
        <Navbar tabs={tabs} />
        <AnimatePresenceWrapper>
          {children}
        </AnimatePresenceWrapper>
      </body>
    </html>
  );
}
