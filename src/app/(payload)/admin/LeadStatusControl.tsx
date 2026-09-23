"use client";

import { useState } from "react";

type StatusValue = "new" | "in-progress" | "done" | "cancelled";

const statusOptions: { value: StatusValue; label: string }[] = [
  { value: "new", label: "New" },
  { value: "in-progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "cancelled", label: "Cancelled" },
];

interface LeadStatusControlProps {
  id: string;
  currentStatus: string;
}

export function LeadStatusControl({ id, currentStatus }: LeadStatusControlProps) {
  const [status, setStatus] = useState<StatusValue>(currentStatus as StatusValue);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (status === currentStatus) return;

    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch("/api/leads/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id, status }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to update status");
      }

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status");
      setStatus(currentStatus as StatusValue);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as StatusValue)}
        disabled={isSaving}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid var(--theme-elevation-150)",
          borderRadius: "var(--style-radius-s)",
          background: "var(--theme-input-bg)",
          color: "var(--theme-text)",
          fontSize: 14,
          minWidth: 160,
        }}
      >
        {statusOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <button
        onClick={handleSave}
        disabled={isSaving || status === currentStatus}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "var(--style-radius-s)",
          background: status === currentStatus ? "var(--theme-elevation-150)" : "var(--theme-color)",
          color: status === currentStatus ? "var(--theme-elevation-400)" : "var(--theme-on-color)",
          fontSize: 14,
          fontWeight: 500,
          cursor: status === currentStatus ? "not-allowed" : "pointer",
          opacity: status === currentStatus ? 0.6 : 1,
        }}
      >
        {isSaving ? "Saving…" : "Save"}
      </button>
      {error && <span style={{ color: "var(--theme-error)", fontSize: 14 }}>{error}</span>}
    </div>
  );
}