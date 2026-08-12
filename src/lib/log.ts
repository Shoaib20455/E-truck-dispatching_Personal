import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

let logDirCreated = false;

function getLogFile(): string {
  if (process.env.LOG_FILE) return process.env.LOG_FILE;
  const dir = process.env.LOG_DIR ?? "logs";
  return join(dir, "server.log");
}

export function logLine(data: Record<string, unknown>): void {
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
