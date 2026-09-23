import type { PostgresAdapter } from "@payloadcms/db-postgres";
import { sql } from "@payloadcms/db-postgres/drizzle";
import { DefaultTemplate } from "@payloadcms/next/templates";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { canAccessAdmin, type AdminViewServerProps, type PayloadRequest } from "payload";

type PageCountRow = { pagePath: string; count: number };

async function getPageCounts(payload: PayloadRequest["payload"]): Promise<PageCountRow[]> {
  try {
    const db = payload.db as unknown as PostgresAdapter;
    const result = await db.drizzle.execute(sql`
      SELECT "page_path" AS "pagePath", count(*)::int AS "count"
      FROM "leads"
      WHERE "page_path" IS NOT NULL AND "page_path" <> ''
      GROUP BY "page_path"
      ORDER BY "count" DESC, "page_path" ASC
    `);

    return (result.rows as PageCountRow[]) ?? [];
  } catch (error) {
    console.error("Failed to load queries-by-page counts:", error);
    return [];
  }
}

function QueriesByPageTable({
  rows,
  adminRoute,
}: {
  rows: PageCountRow[];
  adminRoute: string;
}) {
  const cellStyle: React.CSSProperties = {
    padding: "0.75rem 0.5rem",
    color: "var(--theme-text)",
    fontSize: 14,
  };

  const linkStyle: React.CSSProperties = {
    color: "var(--theme-color)",
    textDecoration: "none",
  };

  const leadsListHref = (pagePath: string) =>
    `${adminRoute}/collections/leads?where[pagePath][equals]=${encodeURIComponent(pagePath)}`;

  return (
    <section
      aria-label="Queries by page"
      style={{
        margin: "0 2rem 2rem",
        padding: "1.5rem 2rem",
        border: "1px solid var(--theme-elevation-150)",
        borderRadius: "var(--style-radius-m)",
        background: "var(--theme-input-bg)",
        boxShadow: "var(--theme-shadow-sm)",
      }}
    >
      <h2
        style={{
          margin: "0 0 0.75rem",
          fontSize: "1.25rem",
          lineHeight: "1.25",
          color: "var(--theme-text)",
        }}
      >
        Queries by Page
      </h2>

      {rows.length === 0 ? (
        <p style={{ margin: 0, color: "var(--theme-elevation-400)" }}>
          No submissions yet. They will appear here once the website forms start receiving queries.
        </p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th style={{ ...cellStyle, color: "var(--theme-elevation-400)" }}>Page</th>
              <th style={{ ...cellStyle, width: 120, color: "var(--theme-elevation-400)" }}>
                Queries
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => {
              const href = leadsListHref(row.pagePath);

              return (
                <tr
                  key={row.pagePath}
                  style={{ borderTop: "1px solid var(--theme-elevation-150)" }}
                >
                  <td style={cellStyle}>
                    <Link href={href} style={linkStyle}>
                      {row.pagePath}
                    </Link>
                  </td>

                  <td style={{ ...cellStyle, width: 120 }}>
                    <Link href={href} style={linkStyle}>
                      {row.count}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default async function QueriesByPage(props: AdminViewServerProps) {
  const { initPageResult, payload } = props;
  const req = initPageResult.req;
  const adminRoute = payload.config.routes.admin;

  if (!req.user) {
    redirect(`${adminRoute}/login`);
  }

  try {
    await canAccessAdmin({ req });
  } catch {
    redirect(`${adminRoute}/login`);
  }

  const pageCounts = await getPageCounts(payload);
  const visibleEntities = initPageResult.visibleEntities ?? { collections: [], globals: [] };

  return (
    <DefaultTemplate
      collectionSlug={undefined}
      docID={undefined}
      documentSubViewType={undefined}
      globalSlug={undefined}
      i18n={req.i18n}
      locale={initPageResult.locale}
      params={props.params}
      payload={payload}
      permissions={initPageResult.permissions}
      req={req}
      searchParams={props.searchParams}
      user={req.user}
      viewActions={props.viewActions}
      viewType={props.viewType}
      visibleEntities={visibleEntities}
    >
      <QueriesByPageTable rows={pageCounts} adminRoute={adminRoute} />
    </DefaultTemplate>
  );
}