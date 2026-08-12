import type { NextRequest } from "next/server";

export const UNRESOLVED_IP = "unresolved";

const IPV4_RE =
  /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

const IPV6_RE =
  /^((?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}|:(?:(?::[0-9a-fA-F]{1,4}){1,7}|:))$/;

function isValidIp(value: string): boolean {
  return IPV4_RE.test(value) || IPV6_RE.test(value);
}

function trustedHeader(value: string | null): string {
  const candidate = value?.trim() ?? "";
  if (candidate && isValidIp(candidate)) return candidate;
  return UNRESOLVED_IP;
}

export function getClientIp(request: NextRequest): string {
  const trustedProxy = process.env.TRUSTED_PROXY?.trim().toLowerCase();

  if (trustedProxy === "nginx") {
    return trustedHeader(request.headers.get("x-real-ip"));
  }

  if (trustedProxy === "cloudflare") {
    return trustedHeader(request.headers.get("cf-connecting-ip"));
  }

  if (process.env.NODE_ENV === "production") {
    return UNRESOLVED_IP;
  }

  return "unknown";
}
