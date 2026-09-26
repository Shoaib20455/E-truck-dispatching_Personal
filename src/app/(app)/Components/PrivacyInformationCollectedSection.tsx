import { AnimatedDiv } from "./animation/MotionElements";

export type InformationGroup = {
  heading: string;
  items: string[];
};

type PrivacyInformationCollectedSectionProps = {
  heading: string;
  intro: string;
  groups: InformationGroup[];
  footerText?: string;
};

export default function PrivacyInformationCollectedSection({
  heading,
  intro,
  groups,
  footerText,
}: PrivacyInformationCollectedSectionProps) {
  return (
    <AnimatedDiv preset="fade">
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>{intro}</p>
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="mt-1 font-semibold text-heading">{group.heading}</p>
            {group.items.map((item) => <p key={item}>{item}</p>)}
          </div>
        ))}
        {footerText && <p className="mt-1 font-semibold text-heading">{footerText}</p>}
      </div>
    </AnimatedDiv>
  );
}
