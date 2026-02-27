import { NavConfig } from '@/types/navigation';

export async function fetchNavigation(): Promise<NavConfig> {
  // Server-side: use absolute URL to backend directly (server-to-server)
  // Client-side: use relative URL which Next.js rewrites to backend
  const isServer = typeof window === 'undefined';
  const baseUrl = isServer
    ? (process.env.BACKEND_URL ?? 'http://localhost:4000')
    : '';

  const url = `${baseUrl}/api/navigation`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch navigation: ${res.status}`);
  }

  return res.json();
}
