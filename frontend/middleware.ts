import { NextRequest, NextResponse } from 'next/server';

const PUBLIC = ['/login', '/api/login', '/api/logout'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow Next.js internals and public auth routes
  if (PUBLIC.some((p) => pathname.startsWith(p)) || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  const secret = process.env.PREVIEW_SECRET ?? '';
  const cookie = request.cookies.get('hl_auth');

  if (!secret || cookie?.value !== secret) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
