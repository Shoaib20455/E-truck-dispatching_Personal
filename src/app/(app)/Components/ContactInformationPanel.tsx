const contactCards = [
  {
    title: "Address",
    lines: ["4309 Schubert,", "Colleyville", "Texas, TX 76034"],
    icon: "location",
  },
  {
    title: "Phone Number",
    lines: ["(737) 787 2147"],
    icon: "phone",
  },
  {
    title: "Business Hours",
    lines: ["Monday – Friday:", "08.00 – 17.00", "Saturday: 09.00 –", "12.00"],
    icon: "clock",
  },
];

export default function ContactInformationPanel() {
  return (
    <div className="min-w-0">
      <h2 className="font-inter text-3xl font-semibold leading-10 text-heading md:text-4xl">
        Contact Us For Further Information
      </h2>

      <p className="mt-6 max-w-[510px] font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
        Have questions or need more details? Reach out to us for personalized assistance and additional information. We’re here to help you with all your medical billing needs and provide expert support.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contactCards.map((card) => (
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
        <SocialLink label="LinkedIn" mark="in" />
        <SocialLink label="Facebook" mark="f" />
        <SocialLink label="X" mark="𝕏" />
        <SocialLink label="Instagram" mark="◎" />
        <SocialLink label="YouTube" mark="▶" />
      </div>
    </div>
  );
}

function SocialLink({ label, mark }: { label: string; mark: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-sm bg-white font-inter text-xl font-bold text-primary-light"
    >
      {mark}
    </a>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
        <path
          d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7v5l3.5 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7">
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
