import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check karein ki kya user admin route access karne ki koshish kar raha hai
  const isAdminRoute = path.startsWith('/admin');
  const isLoginPage = path === '/admin/login';

  // Cookie se check karein ki admin authorized hai ya nahi
  const adminToken = request.cookies.get('admin_session')?.value;

  // Case 1: Agar admin route hai, login page nahi hai, aur token missing hai
  if (isAdminRoute && !isLoginPage && !adminToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Case 2: Agar admin pehle se login hai aur login page par jana chahta hai
  if (isLoginPage && adminToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Sirf admin paths par hi chalana hai
export const config = {
  matcher: ['/admin/:path*'],
};