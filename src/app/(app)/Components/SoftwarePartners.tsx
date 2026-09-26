import Image from "next/image";

import { AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

export type SoftwarePartnerItem = {
  name: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type SoftwarePartnersProps = {
  partners: SoftwarePartnerItem[];
};

export default function SoftwarePartners({ partners }: SoftwarePartnersProps) {
  return (
    <AnimatedSection preset="fade" className="w-full bg-cyan-50">
      <div className="mx-auto max-w-[1520px] px-6 py-10 lg:px-0">
        <StaggerGroup
          stagger={0.05}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {partners.map((partner) => (
            <StaggerItem
              key={`${partner.name}-${partner.src}`}
              preset="logo"
              hover="soft"
              className="flex items-center justify-center rounded-[10px] bg-teal-500/10 px-7 py-4"
            >
              <Image
                src={partner.src}
                alt={partner.alt || partner.name}
                width={partner.width || 170}
                height={partner.height || 42}
                className="block h-[42px] w-auto object-contain"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
