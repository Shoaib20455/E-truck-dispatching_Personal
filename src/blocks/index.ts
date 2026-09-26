import type { Block } from "payload";

import { FAQSectionBlock } from "./FAQSection";
import { RevenueCTABlock } from "./RevenueCTA";
import { ServiceGridWithImageBlock } from "./ServiceGridWithImage";
import { ServiceHeroBlock } from "./ServiceHero";
import { SimpleFeatureCardsBlock } from "./SimpleFeatureCards";

/**
 * Every block available to the Pages collection. Adding a block here also requires
 * a matching entry in the frontend registry (src/lib/page-blocks/registry.tsx).
 */
export const pageBlocks: Block[] = [
  ServiceHeroBlock,
  SimpleFeatureCardsBlock,
  ServiceGridWithImageBlock,
  FAQSectionBlock,
  RevenueCTABlock,
];

export {
  FAQSectionBlock,
  RevenueCTABlock,
  ServiceGridWithImageBlock,
  ServiceHeroBlock,
  SimpleFeatureCardsBlock,
};
