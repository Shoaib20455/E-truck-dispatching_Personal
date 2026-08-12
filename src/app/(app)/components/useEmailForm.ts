"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const STATUS_MESSAGES: Record<Exclude<FormStatus, "idle">, string> = {
  sending: "Sending...",
  success: "Thanks! Your request has been sent. We'll be in touch soon.",
  error: "Something went wrong. Please try again or email us directly.",
};

export function useEmailForm(source: string) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "idle" ? "" : STATUS_MESSAGES[status];

  return {
    status,
    message,
    handleSubmit,
    isSending: status === "sending",
  };
}
