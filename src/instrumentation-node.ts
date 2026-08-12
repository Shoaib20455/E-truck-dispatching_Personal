import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

let logDirCreated = false;

function getLogFile(): string {
  if (process.env.LOG_FILE) return process.env.LOG_FILE;
  const dir = process.env.LOG_DIR ?? "logs";
  return join(dir, "server.log");
}

function logLine(data: Record<string, unknown>): void {
  try {
    const line = `${new Date().toISOString()} ${JSON.stringify(data)}\n`;
    process.stdout.write(line);

    const file = getLogFile();
    if (!logDirCreated) {
      mkdirSync(dirname(file), { recursive: true });
      logDirCreated = true;
    }
    appendFileSync(file, line);
  } catch {
    // Logging must never crash the server.
  }
}

export function register(): void {
  logLine({ event: "server-start", pid: process.pid, nodeEnv: process.env.NODE_ENV ?? "unknown" });
}

export function onRequestError(
  error: unknown,
  request: { path: string; method: string },
  context: { routePath: string; routeType: string; routerKind: string },
): void {
  const message =
    error instanceof Error ? (error.stack ?? error.message) : typeof error === "string" ? error : JSON.stringify(error);

  logLine({
    event: "request-error",
    method: request?.method,
    path: request?.path,
    route: context?.routePath,
    routeType: context?.routeType,
    routerKind: context?.routerKind,
    message,
  });
}
