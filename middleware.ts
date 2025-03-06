import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoggedIn = request.cookies.get('admin-authenticated')?.value === 'true';

  // Block access to admin routes without login
  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}