import Image from "next/image";

const aboutPoints = ["Our Story", "Our Mission", "Our Version"];

export default function AboutOverviewSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-[60px]">
          <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            About Avenue
            <br />
            Billing Services
          </h2>

          <div className="rounded-[20px] bg-accent/10 px-8 py-6 md:px-10">
            <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9">
              At Avenue Billing Services, we help healthcare organizations simplify revenue cycle operations with accuracy, transparency, and specialty-aligned billing support. Our certified medical billers, coders, and RCM specialists work as an extension of your team, ensuring cleaner claims, fewer denials, and predictable cash flow.
              <br />
              With deep experience across major payers, EMR systems, and compliance requirements, we manage the full billing workflow so providers can stay focused on delivering great patient care, not chasing paperwork
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[400px_300px_minmax(0,1fr)] lg:gap-10 xl:gap-[60px]">
          <Image
            src="/about us/3_rectangle_264.png"
            alt="Avenue Billing Services team reviewing billing data"
            width={399}
            height={384}
            className="h-auto w-full max-w-[400px] rounded-[20px] object-cover"
          />

          <div className="space-y-10 lg:pt-3">
            {aboutPoints.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl"
              >
                <span
                  aria-hidden="true"
                  className="flex size-5 shrink-0 items-center justify-center rounded-full border border-heading font-manrope text-xs font-semibold leading-none"
                >
                  ›
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9 lg:pt-3">
            Avenue Billing Services was founded with one purpose: to help healthcare providers overcome the complexity of medical billing and maintain stable financial performance. What began as a small team of billing experts has grown into a nationwide RCM partner serving multi-specialty groups, clinics, and independent practices. Our growth has been driven by one promise,to deliver accurate billing, transparent communication, and reliable results for every provider we support.
          </p>
        </div>
      </div>
    </section>
  );
}
