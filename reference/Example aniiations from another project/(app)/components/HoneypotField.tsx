"use client";

import { HONEYPOT_FIELD } from "@/lib/honeypot";

export default function HoneypotField() {
  return (
    <input
      type="text"
      name={HONEYPOT_FIELD}
      value=""
      onChange={() => undefined}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}
