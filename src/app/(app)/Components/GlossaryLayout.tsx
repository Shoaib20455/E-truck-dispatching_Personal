import AuthorCard, { type AuthorCardProps } from "./AuthorCard";
import ConsultationCard, { type ConsultationCardProps } from "./ConsultationCard";
export type GlossarySectionData = {
  letter: string;
  terms: { term: string; definition: string }[];
};

type GlossaryLayoutProps = {
  title: string;
  sections: GlossarySectionData[];
  alphabetAriaLabel: string;
  tableOfContentsLabel: string;
  consultation: ConsultationCardProps;
  author: AuthorCardProps;
};

export default function GlossaryLayout({
  title,
  sections,
  alphabetAriaLabel,
  tableOfContentsLabel,
  consultation,
  author,
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
              aria-label={alphabetAriaLabel}
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
              {tableOfContentsLabel}
            </a>

            <div className="mt-5">
              <ConsultationCard {...consultation} />
            </div>

            <div className="mt-8">
              <AuthorCard {...author} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
