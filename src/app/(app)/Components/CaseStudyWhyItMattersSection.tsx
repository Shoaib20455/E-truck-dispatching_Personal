import Image from "next/image";

export default function CaseStudyWhyItMattersSection() {
  return (
    <section className="w-full bg-cyan-50 pb-20 pt-12 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 2xl:px-0">
        <Image
          src="/case study detail/10_rectangle_723.png"
          alt="Doctor reviewing billing documents"
          width={672}
          height={665}
          className="h-auto w-full rounded-[20px] object-cover"
        />

        <div>
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            Why This Case Study Matters
          </h2>

          <div className="mt-6 space-y-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
            <p>A busy practice can still lose revenue.</p>
            <p>
              More visits do not always mean better collections. If claims are delayed, denials are ignored, payments are not reviewed, and A/R keeps aging, revenue quietly slips away.
            </p>
            <p>
              Avenue Billing Services helped this practice move from scattered billing follow-up to a structured revenue cycle system.
            </p>
            <p>
              Cleaner claims.<br />
              Faster denial action.<br />
              Lower A/R.<br />
              Better reporting.<br />
              More control over cash flow.
            </p>
          </div>

          <h3 className="mt-7 font-inter text-xl font-semibold leading-9 text-heading">
            Services Used
          </h3>
          <p className="mt-3 font-manrope text-base leading-9 text-neutral-500 md:text-lg">
            Avenue Billing Services supported the practice with medical billing, claim scrubbing, denial management, A/R follow-up, eligibility checks, payment posting, patient billing support, coding review, and monthly revenue reporting.
          </p>
        </div>
      </div>
    </section>
  );
}
