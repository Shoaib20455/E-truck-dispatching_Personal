import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPayload } from "payload";

import configPromise from "@payload-config";
import { getClientIp } from "@/lib/client-ip";
import { HONEYPOT_FIELD } from "@/lib/honeypot";
import { logLine } from "@/lib/log";
import { hasNewlines } from "@/lib/sanitize";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type RateEntry = {
  count: number;
  resetAt: number;
};

const ipHits = new Map<string, RateEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  if (ipHits.size > 1000) {
    for (const [key, entry] of ipHits) {
      if (entry.resetAt <= now) ipHits.delete(key);
    }
  }

  const entry = ipHits.get(ip);
  if (!entry || entry.resetAt <= now) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function findField(fields: Record<string, string>, matchers: string[]): string {
  for (const key of Object.keys(fields)) {
    if (matchers.some((matcher) => key.toLowerCase().includes(matcher))) {
      const value = fields[key]?.trim();
      if (value) return value;
    }
  }
  return "";
}

function formatLabel(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim();
}

const MAX_PAGE_PATH_LENGTH = 500;

type SubmissionType =
  | "contact-form"
  | "lead-capture"
  | "state-picker"
  | "service-picker"
  | "schedule-call";

function deriveSubmissionType(source: string): SubmissionType {
  const value = source.toLowerCase();
  if (value === "schedule call") return "schedule-call";
  if (value === "state coverage request") return "state-picker";
  if (value === "service picker request") return "service-picker";
  if (value.endsWith("lead")) return "lead-capture";
  return "contact-form";
}

async function persistLead(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
  pagePath?: string;
}): Promise<{ ok: boolean; id?: number | string }> {
  try {
    const payload = await getPayload({ config: configPromise });
    const doc = await payload.create({
      collection: "leads",
      overrideAccess: true,
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
        pagePath: data.pagePath || "",
        sourcePage: data.source,
        submissionType: deriveSubmissionType(data.source),
        status: "new",
      },
    });
    return { ok: true, id: doc.id };
  } catch (error) {
    const errorName = error instanceof Error ? error.name : "UnknownError";
    const safeCode =
      error && typeof error === "object" && "code" in error
        ? String((error as { code?: unknown }).code ?? "").trim()
        : "";
    logLine({
      event: "lead-persist-failed",
      endpoint: "/api/send-email",
      source: data.source,
      pagePath: data.pagePath,
      error: errorName,
      ...(safeCode ? { code: safeCode } : {}),
    });
    return { ok: false };
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    if (body[HONEYPOT_FIELD]) {
      return NextResponse.json({ success: true });
    }

    const source = String(body.source ?? "Website Inquiry").trim().slice(0, 100);
    const pagePath =
      typeof body.pagePath === "string" ? body.pagePath.trim() : "";

    if (hasNewlines(pagePath) || pagePath.length > MAX_PAGE_PATH_LENGTH) {
      return NextResponse.json(
        { error: "Invalid characters in submission." },
        { status: 400 },
      );
    }

    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(body)) {
      if (key === "source" || key === "pagePath" || key === HONEYPOT_FIELD) {
        continue;
      }
      const text =
        typeof value === "string" ? value.trim() : String(value ?? "").trim();
      if (text) fields[key] = text;
    }

    const email = findField(fields, ["email"]);
    const name = findField(fields, ["name"]);
    const message = findField(fields, ["message", "comment", "inquiry"]);
    const phone = findField(fields, ["phone", "mobile"]);

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Name and a valid email address are required." },
        { status: 400 },
      );
    }

    const persisted = await persistLead({
      name,
      email,
      phone,
      message,
      source,
      pagePath,
    });
    if (persisted.ok) {
      logLine({
        event: "lead-persisted",
        endpoint: "/api/send-email",
        id: persisted.id,
        source,
        pagePath,
      });
    }

    const recipient =
      process.env.CONTACT_EMAIL || "info@boxtruckdispatchservices.us";

    const rows = Object.entries(fields)
      .filter(([key]) => !["message", "comment", "inquiry"].includes(key))
      .map(([key, value]) => {
        const label = formatLabel(key);
        return `<tr><td style="padding:8px;font-weight:bold;text-transform:capitalize;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px">${escapeHtml(value)}</td></tr>`;
      })
      .join("");

    const messageRow = message
      ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">${escapeHtml(message)}</td></tr>`
      : "";

    const safeSource = source.replace(/[<>\n\r]/g, " ").slice(0, 100);
    const safeSubject = `${safeSource} — ${name}`
      .replace(/[<>\n\r]/g, " ")
      .slice(0, 150);

    try {
      const transporter = getTransporter();

      await transporter.sendMail({
        from: `"${safeSource}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipient,
        subject: safeSubject,
        html: `
        <h2>${escapeHtml(source)}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          ${rows}
          ${messageRow}
        </table>
      `,
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      const errorName = error instanceof Error ? error.name : "UnknownError";
      const safeCode =
        error && typeof error === "object" && "code" in error
          ? String((error as { code?: unknown }).code ?? "").trim()
          : "";
      logLine({
        event: persisted.ok ? "email-send-failed-lead-saved" : "email-send-failed",
        endpoint: "/api/send-email",
        source,
        pagePath,
        error: errorName,
        ...(safeCode ? { code: safeCode } : {}),
      });

      if (persisted.ok) {
        return NextResponse.json({ success: true });
      }

      return NextResponse.json(
        { error: "Something went wrong while sending your message. Please try again." },
        { status: 500 },
      );
    }
  } catch (error) {
    const errorName = error instanceof Error ? error.name : "UnknownError";
    const safeCode =
      error && typeof error === "object" && "code" in error
        ? String((error as { code?: unknown }).code ?? "").trim()
        : "";
    logLine({
      event: "send-email-error",
      endpoint: "/api/send-email",
      error: errorName,
      ...(safeCode ? { code: safeCode } : {}),
    });
    return NextResponse.json(
      { error: "Failed to send the email. Please try again later." },
      { status: 500 },
    );
  }
}
