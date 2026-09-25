type Measure = { label: string; text: string };

type PrivacyHIPAASectionProps = {
  heading: string;
  intro: string;
  measuresHeading: string;
  measures: Measure[];
};

export default function PrivacyHIPAASection({
  heading,
  intro,
  measuresHeading,
  measures,
}: PrivacyHIPAASectionProps) {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 space-y-1 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>{intro}</p>
        <p className="font-semibold text-heading">{measuresHeading}</p>
        {measures.map((item) => (
          <p key={item.label}><strong>{item.label}:</strong> {item.text}</p>
        ))}
      </div>
    </div>
  );
}
