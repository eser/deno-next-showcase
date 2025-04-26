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
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
