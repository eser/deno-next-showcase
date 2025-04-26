import { type NextRequest, NextResponse } from "next/server";
import { localeMatchFromRequest } from "./lib/locale-matcher.ts";

const supportedLocales = [
  "@(en)?(-*)",
  "@(tr)?(-*)",
];

const fallbackLocale = "en";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const hasNextJsCookie = req.cookies.has("SITE_LOCALE");

  if (!hasNextJsCookie) {
    const locale = localeMatchFromRequest(req, supportedLocales, fallbackLocale);

    response.cookies.set("SITE_LOCALE", locale);
    console.log(`Setting visitor's locale to ${locale}`);
  }

  return response;
}

export const config = {
  runtime: "nodejs",
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
