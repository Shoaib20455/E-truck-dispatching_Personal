import { NextResponse, type NextRequest } from "next/server";

import { getClientIp } from "@/lib/client-ip";
import { checkRateLimit, getRateLimitKey } from "@/lib/rate-limit";

const GENERAL_LIMIT = 300;
const GENERAL_WINDOW_MS = 60 * 1000;

const AUTH_LIMIT = 20;
const AUTH_WINDOW_MS = 60 * 1000;

const AUTH_PATHS = new Set([
  "/api/users/login",
  "/api/users/forgot-password",
  "/api/users/reset-password",
]);

const EXEMPT_PATHS = new Set(["/api/healthz"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (EXEMPT_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const isAuthPath = AUTH_PATHS.has(pathname);
  const ip = getClientIp(request);
  const key = getRateLimitKey(request, isAuthPath ? `auth:${ip}` : `api:${ip}`);
  const result = checkRateLimit(
    key,
    isAuthPath
      ? { limit: AUTH_LIMIT, windowMs: AUTH_WINDOW_MS }
      : { limit: GENERAL_LIMIT, windowMs: GENERAL_WINDOW_MS },
  );

  if (result.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(result.retryAfterSeconds) },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/graphql:path*"],
};
