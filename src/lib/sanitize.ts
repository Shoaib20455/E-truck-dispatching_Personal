const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char])
}

export function stripControlChars(value: string, keepNewlines = false): string {
  if (keepNewlines) {
    return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "")
  }
  return value.replace(/[\x00-\x1F\x7F]/g, "")
}

export function sanitizeField(
  value: string,
  options: { multiline?: boolean; escape?: boolean } = {},
): string {
  const { multiline = false, escape = true } = options
  let result = value.trim()
  result = stripControlChars(result, multiline)
  if (escape) result = escapeHtml(result)
  return result
}

export function hasNewlines(value: string): boolean {
  return /[\r\n]/.test(value)
}
