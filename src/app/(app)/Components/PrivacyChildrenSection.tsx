type PrivacyChildrenSectionProps = {
  heading: string;
  text: string;
};

export default function PrivacyChildrenSection({
  heading,
  text,
}: PrivacyChildrenSectionProps) {
  return (
    <div>
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">{heading}</h2>
      <p className="mt-5 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">{text}</p>
    </div>
  );
}
