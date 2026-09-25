type PrivacyDataUseSectionProps = {
  heading: string;
  intro: string;
  items: string[];
  footerText?: string;
};

export default function PrivacyDataUseSection({
  heading,
  intro,
  items,
  footerText,
}: PrivacyDataUseSectionProps) {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <div className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        <p>{intro}</p>
        {items.map((item) => <p key={item}>{item}</p>)}
        {footerText && <p className="font-semibold text-heading">{footerText}</p>}
      </div>
    </div>
  );
}
