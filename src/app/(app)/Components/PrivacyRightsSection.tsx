import { AnimatedDiv } from "./animation/MotionElements";

type RightItem = { label: string; text: string };

type PrivacyRightsSectionProps = {
  heading: string;
  intro: string;
  rights: RightItem[];
};

export default function PrivacyRightsSection({
  heading,
  intro,
  rights,
}: PrivacyRightsSectionProps) {
  return (
    <AnimatedDiv preset="fade">
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>{intro}</p>
        {rights.map((item) => (
          <p key={item.label}><strong>{item.label}:</strong> {item.text}</p>
        ))}
      </div>
    </AnimatedDiv>
  );
}
