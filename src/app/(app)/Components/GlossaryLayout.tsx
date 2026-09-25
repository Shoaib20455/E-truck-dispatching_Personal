import Image from "next/image";
import type { GlossarySection } from "../glossary/GlossaryData";

type GlossaryLayoutProps = {
  title: string;
  sections: GlossarySection[];
};

const specialties = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Primary Care",
  "Neurology",
  "Orthopedics",
];

export default function GlossaryLayout({
  title,
  sections,
}: GlossaryLayoutProps) {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-sky-500/75 to-teal-500/75">
        <div className="mx-auto w-full max-w-[1520px] px-6 py-16 lg:px-8 lg:py-20 2xl:px-0">
          <h1 className="font-inter text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-10 px-6 lg:px-8 xl:grid-cols-[minmax(0,1005px)_minmax(320px,504px)] xl:gap-[11px] 2xl:px-0">
          <div className="min-w-0">
            <nav
              aria-label="Glossary alphabet"
              className="grid grid-cols-7 overflow-hidden border-l border-t border-zinc-700 sm:grid-cols-13 xl:grid-cols-[repeat(26,minmax(0,1fr))]"
            >
              {sections.map((section) => (
                <a
                  key={section.letter}
                  href={`#glossary-${section.letter.toLowerCase()}`}
                  className="flex min-h-10 items-center justify-center border-b border-r border-zinc-700 p-2 font-inter text-base font-bold leading-6 text-primary-light underline transition-colors hover:bg-primary-light hover:text-white"
                >
                  {section.letter}
                </a>
              ))}
            </nav>

            <div className="mt-4">
              {sections.map((section) => (
                <section
                  key={section.letter}
                  id={`glossary-${section.letter.toLowerCase()}`}
                  className="scroll-mt-28 pt-5"
                >
                  <h2 className="font-inter text-5xl font-bold leading-none text-heading md:text-6xl">
                    {section.letter}
                  </h2>

                  <div className="mt-4">
                    {section.terms.map((item) => (
                      <article key={item.term} className="py-4">
                        <h3 className="font-inter text-xl font-bold leading-8 text-heading md:text-2xl">
                          {item.term}
                        </h3>

                        <p className="mt-2 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                          {item.definition}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="self-start xl:pl-0">
            <a
              href="#glossary-a"
              className="flex min-h-12 w-full items-center justify-center rounded-[60px] bg-primary-light px-7 py-2.5 text-center font-manrope text-sm font-medium leading-8 text-white"
            >
              Table of Content
            </a>

            <section className="mt-5 rounded-[20px] bg-accent/10 px-7 py-8">
              <h2 className="text-center font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl">
                Schedule a Free Consultation
              </h2>

              <form className="mt-6 space-y-4">
                <Field label="Practice Name *">
                  <input
                    type="text"
                    name="practiceName"
                    placeholder="Full Name"
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
                  />
                </Field>

                <Field label="Select Your Specialty *">
                  <select
                    name="specialty"
                    defaultValue=""
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
                  >
                    <option value="" disabled>
                      Select Specialty
                    </option>
                    {specialties.map((specialty) => (
                      <option key={specialty}>{specialty}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Name *">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
                  />
                </Field>

                <Field label="Phone Number *">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(000) 000-0000"
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-medium text-neutral-500 outline-none"
                  />
                </Field>

                <Field label="Email Address *">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
                  />
                </Field>

                <Field label="Monthly Collection *">
                  <select
                    name="monthlyCollection"
                    defaultValue=""
                    className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
                  >
                    <option value="" disabled>
                      Monthly Collection
                    </option>
                    <option>Under $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </Field>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="rounded-[60px] bg-primary-light px-7 py-2.5 font-manrope text-sm font-medium leading-8 text-white"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </section>

            <section className="mt-8 rounded-[20px] bg-accent/10 p-7">
              <div className="flex items-center gap-5">
                <Image
                  src="/blog detail( basically slug)/11_ellipse_198.png"
                  alt="Danish Gujjar"
                  width={70}
                  height={70}
                  className="size-[70px] rounded-full object-cover"
                />

                <div>
                  <h2 className="font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl">
                    Danish Gujjar
                  </h2>
                  <p className="mt-1 font-manrope text-xs font-medium leading-8 text-neutral-600">
                    Seo sapecialits
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-1 font-manrope text-xs font-medium leading-6 text-neutral-500">
                <p>Published: January 3, 2026</p>
                <p>Updated: April 28, 2026</p>
              </div>

              <div className="mt-5 flex min-h-9 max-w-72 items-center justify-center gap-5 rounded-[10px] bg-primary-light px-4 text-white">
                <a href="#" aria-label="LinkedIn" className="text-xs font-bold">
                  in
                </a>
                <a href="#" aria-label="Facebook" className="text-xs font-bold">
                  f
                </a>
                <a href="#" aria-label="Instagram" className="text-xs font-bold">
                  ◎
                </a>
                <a href="#" aria-label="X" className="text-xs font-bold">
                  𝕏
                </a>
                <a href="#" aria-label="YouTube" className="text-xs font-bold">
                  ▶
                </a>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-manrope text-xs font-medium leading-6 text-neutral-600">
        {label}
      </span>
      {children}
    </label>
  );
}
