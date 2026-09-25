export type ContactCard = {
  title: string;
  lines: string[];
  icon: "location" | "phone" | "clock";
};

export type SocialLinkItem = {
  label: string;
  mark: string;
  href: string;
};

type ContactInformationPanelProps = {
  heading: string;
  description: string;
  cards: ContactCard[];
  socialLinks: SocialLinkItem[];
};

export default function ContactInformationPanel({
  heading,
  description,
  cards,
  socialLinks,
}: ContactInformationPanelProps) {
  return (
    <div className="min-w-0">
      <h2 className="font-inter text-3xl font-semibold leading-10 text-heading md:text-4xl">
        {heading}
      </h2>

      <p className="mt-6 max-w-[510px] font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        {description}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex min-h-[145px] flex-col items-center rounded-[20px] bg-primary-light px-4 py-4 text-center text-white shadow-[0px_10px_20px_rgba(0,0,0,0.10)]"
          >
            <span className="flex size-8 items-center justify-center">
              <ContactIcon type={card.icon} />
            </span>

            <h3 className="mt-2 font-inter text-lg font-semibold leading-5">
              {card.title}
            </h3>

            <div className="mt-1 font-manrope text-sm font-normal leading-5">
              {card.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 flex min-h-20 items-center justify-around rounded-[10px] bg-primary-light px-6">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex size-11 items-center justify-center rounded-sm bg-white font-inter text-xl font-bold text-primary-light"
          >
            {item.mark}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactIcon({ type }: { type: ContactCard["icon"] }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
        <path d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
