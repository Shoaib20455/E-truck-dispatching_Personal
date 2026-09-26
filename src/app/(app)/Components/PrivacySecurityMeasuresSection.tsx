import { AnimatedDiv } from "./animation/MotionElements";

export type SecurityGroup = {
  heading: string;
  items: string[];
};

type PrivacySecurityMeasuresSectionProps = {
  heading: string;
  groups: SecurityGroup[];
};

export default function PrivacySecurityMeasuresSection({
  heading,
  groups,
}: PrivacySecurityMeasuresSectionProps) {
  return (
    <AnimatedDiv preset="fade">
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="mt-1 font-semibold text-heading">{group.heading}</p>
            {group.items.map((item) => <p key={item}>{item}</p>)}
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
}
