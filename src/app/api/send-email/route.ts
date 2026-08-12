import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { getClientIp } from "@/lib/client-ip";
import { HONEYPOT_FIELD } from "@/lib/honeypot";

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

    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(body)) {
      if (key === "source" || key === HONEYPOT_FIELD) continue;
      const text =
        typeof value === "string" ? value.trim() : String(value ?? "").trim();
      if (text) fields[key] = text;
    }

    const email = findField(fields, ["email"]);
    const name = findField(fields, ["name"]);
    const message = findField(fields, ["message", "comment", "inquiry"]);

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Name and a valid email address are required." },
        { status: 400 },
      );
    }

    const transporter = getTransporter();
    const recipient = process.env.CONTACT_EMAIL || "info@boxtruckdispatchservices.us";

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
    const safeSubject = `${safeSource} — ${name}`.replace(/[<>\n\r]/g, " ").slice(0, 150);

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
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("send-email error:", errorMessage);
    return NextResponse.json(
      { error: "Failed to send the email. Please try again later." },
      { status: 500 },
    );
  }
}
