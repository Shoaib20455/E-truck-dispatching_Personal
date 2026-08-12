import type { NextRequest } from "next/server";

export interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  limited: boolean;
  retryAfterSeconds: number;
}

const store = new Map<string, number[]>();

const SWEEP_INTERVAL_MS = 60 * 1000;
let lastSweep = Date.now();

function sweepStaleEntries(now: number): void {
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;

  for (const [key, timestamps] of store) {
    if (timestamps.length === 0) {
      store.delete(key);
      continue;
    }
    const oldest = Math.min(...timestamps);
    if (now - oldest > SWEEP_INTERVAL_MS * 10) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(key: string, options: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const windowStart = now - options.windowMs;
  const timestamps = (store.get(key) ?? []).filter((t) => t > windowStart);

  sweepStaleEntries(now);

  if (timestamps.length >= options.limit) {
    store.set(key, timestamps);
    const oldest = timestamps.length > 0 ? Math.min(...timestamps) : now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + options.windowMs - now) / 1000));
    return { limited: true, retryAfterSeconds };
  }

  timestamps.push(now);
  store.set(key, timestamps);
  return { limited: false, retryAfterSeconds: 0 };
}

export function getRateLimitKey(request: NextRequest, base: string): string {
  if (process.env.NODE_ENV === "production") return base;
  const testKey = request.headers.get("x-rate-limit-test");
  return testKey ? `${base}:test:${testKey}` : base;
}
