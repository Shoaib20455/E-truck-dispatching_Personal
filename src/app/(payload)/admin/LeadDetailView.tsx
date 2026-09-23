import Link from "next/link";
import React from "react";
import type { Data, DocumentViewServerProps } from "payload";

import { LeadStatusControl } from "./LeadStatusControl";

const statusLabels: Record<string, string> = {
  new: "New",
  "in-progress": "In Progress",
  done: "Done",
  cancelled: "Cancelled",
};

type LeadData = Data & {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  pagePath?: string | null;
  sourcePage?: string | null;
  submissionType?: string | null;
  status: string;
  handledBy?: string | null;
  handledAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function getSubmissionTypeLabel(type?: string | null): string {
  const labels: Record<string, string> = {
    "contact-form": "Contact Form",
    "lead-capture": "Lead Capture",
    "state-picker": "State Picker",
    "service-picker": "Service Picker",
    "schedule-call": "Schedule Call",
  };

  return type ? labels[type] ?? type : "—";
}

export default async function LeadDetailView(
  props: DocumentViewServerProps,
) {
  const { initPageResult } = props;
  const docID = initPageResult.docID;

  if (!docID || !initPageResult.req.user) {
    return null;
  }

  const lead = (await initPageResult.req.payload.findByID({
    collection: "leads",
    id: docID,
    overrideAccess: false,
    user: initPageResult.req.user,
  })) as LeadData | null;

  if (!lead) {
    return null;
  }

  const adminRoute = initPageResult.req.payload.config.routes.admin;
  const backHref = lead.pagePath
    ? `${adminRoute}/collections/leads?where[pagePath][equals]=${encodeURIComponent(lead.pagePath)}`
    : `${adminRoute}/collections/leads`;

  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const linkStyle: React.CSSProperties = {
    color: "var(--theme-color)",
    textDecoration: "none",
    fontSize: 14,
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href={backHref} style={linkStyle}>
          Back to Queries
        </Link>
      </div>

      <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.75rem", color: "var(--theme-text)" }}>
        Inquiry Details
      </h1>

      <p style={{ margin: "0 0 2rem", color: "var(--theme-elevation-400)" }}>
        Submitted: {formatDate(lead.createdAt)}
      </p>

      <div style={{ display: "grid", gap: "1.25rem", maxWidth: "600px" }}>
        <DetailRow label="Name" value={lead.name} />
        <DetailRow label="Email" value={lead.email} />
        {lead.phone && <DetailRow label="Phone" value={lead.phone} />}
        {lead.message && <DetailRow label="Message" value={lead.message} multiline />}
        <DetailRow label="Page" value={lead.pagePath ?? "—"} />
        <DetailRow label="Source" value={lead.sourcePage ?? "—"} />
        <DetailRow
          label="Submission Type"
          value={getSubmissionTypeLabel(lead.submissionType)}
        />
        <DetailRow label="Submitted" value={formatDate(lead.createdAt)} />
      </div>

      <div
        style={{
          marginTop: "2.5rem",
          padding: "1.5rem",
          border: "1px solid var(--theme-elevation-150)",
          borderRadius: "var(--style-radius-m)",
          background: "var(--theme-input-bg)",
        }}
      >
        <h2 style={{ margin: "0 0 1rem", fontSize: "1.125rem", color: "var(--theme-text)" }}>
          Query Status
        </h2>

        <p style={{ margin: "0 0 1rem", color: "var(--theme-elevation-400)" }}>
          Current: <strong>{statusLabels[lead.status] ?? lead.status}</strong>
        </p>

        <LeadStatusControl id={String(lead.id)} currentStatus={lead.status} />

        {(lead.handledBy || lead.handledAt) && (
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--theme-elevation-150)",
            }}
          >
            {lead.handledBy && <DetailRow label="Handled By" value={lead.handledBy} />}
            {lead.handledAt && (
              <DetailRow label="Handled At" value={formatDate(lead.handledAt)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: "0.5rem 1rem",
        alignItems: "start",
      }}
    >
      <span style={{ color: "var(--theme-elevation-400)", fontSize: 14, fontWeight: 500 }}>
        {label}
      </span>

      <span
        style={{
          color: "var(--theme-text)",
          fontSize: 14,
          lineHeight: 1.5,
          wordBreak: "break-word",
          whiteSpace: multiline ? "pre-wrap" : "normal",
        }}
      >
        {value}
      </span>
    </div>
  );
}