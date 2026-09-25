type PrivacyPolicyUpdatesSectionProps = {
  heading: string;
  paragraphs: string[];
};

export default function PrivacyPolicyUpdatesSection({
  heading,
  paragraphs,
}: PrivacyPolicyUpdatesSectionProps) {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  );
}
