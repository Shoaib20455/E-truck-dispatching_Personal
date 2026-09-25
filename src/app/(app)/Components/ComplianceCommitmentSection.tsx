import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

type ComplianceCommitmentSectionProps = {
  heading: string;
  subtitle?: ReactNode;
  items: string[];
  footerText?: string;
};

export default function ComplianceCommitmentSection({
  heading,
  subtitle,
  items,
  footerText,
}: ComplianceCommitmentSectionProps) {
  return (
    <section className="w-full bg-cyan-50 pb-12 pt-8 lg:pb-16 lg:pt-10">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <SectionHeading title={heading} subtitle={subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {items.map((item) => (
            <div key={item} className="flex justify-center py-7">
              <div className="flex size-[220px] rotate-45 items-center justify-center rounded-2xl border border-primary-light bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.07)] md:size-[245px]">
                <div className="-rotate-45 px-7 text-center">
                  <div className="mb-4 text-4xl text-primary-light">✓</div>
                  <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {footerText && (
          <p className="mt-8 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}
