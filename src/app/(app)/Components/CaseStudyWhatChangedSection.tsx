import Image from "next/image";

export default function CaseStudyWhatChangedSection() {
  return (
    <section className="w-full bg-cyan-50 py-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:px-8 2xl:px-0">
        <div>
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            What Changed
          </h2>

          <div className="mt-6 space-y-4 font-manrope text-base leading-8 text-neutral-500 md:text-lg">
            <p>
              Before Avenue, the billing process was mostly reactive. The team fixed problems after payers rejected claims.
            </p>
            <p>After Avenue, the process became preventive.</p>
            <p>
              Claims were reviewed before submission. Denials were worked within 48 hours. A/R was prioritized by age and recovery value. Payments were checked more carefully. Leadership received clearer reporting every month.
            </p>
            <p>That shift gave the practice more control over collections.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[20px] border border-sky-700/30 bg-accent/10 p-8">
            <h3 className="font-inter text-2xl font-semibold leading-8 text-stone-900">
              Medical Billing for Small Practices
            </h3>
            <p className="mt-2 font-inter text-lg leading-6 text-gray-700">
              Learn how we help independent clinics thrive in a landscape dominated by hospital systems.
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 font-inter text-base font-bold leading-6 text-sky-700">
              View Small Practice Solutions <span>→</span>
            </a>
          </div>

          <Image
            src="/case study detail/4_rectangle_1929.png"
            alt="Doctor reacting positively to improved billing performance"
            width={744}
            height={308}
            className="h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
