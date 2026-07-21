import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.match(/\.(.*)$/) 
  ) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = ["/en", "/pt"].some(
    (locale) => pathname.startsWith(`${locale}/`) || pathname === locale
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|logo.png|resume.pdf|curriculo.pdf).*)',
  ],
};
