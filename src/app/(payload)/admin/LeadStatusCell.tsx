"use client";

import { DefaultCell } from "@payloadcms/ui";
import type { DefaultCellComponentProps } from "payload";

export default function LeadStatusCell(props: DefaultCellComponentProps) {
  const status = props.rowData?.status;

  return (
    <span data-status={status}>
      <DefaultCell {...props} />
    </span>
  );
}
