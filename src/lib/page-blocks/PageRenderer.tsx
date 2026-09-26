import { Fragment } from "react";

import type { Page } from "@/payload-types";

import { renderPageBlock, type PageBlock } from "./registry";

type PageRendererProps = {
  blocks?: Page["blocks"];
};

/** Renders a Payload page's blocks in the order they were arranged in the admin. */
export default function PageRenderer({ blocks }: PageRendererProps) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block: PageBlock, index) => (
        <Fragment key={block.id ?? `${block.blockType}-${index}`}>{renderPageBlock(block)}</Fragment>
      ))}
    </>
  );
}
