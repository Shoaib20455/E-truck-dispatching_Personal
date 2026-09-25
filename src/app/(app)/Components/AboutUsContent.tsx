import Image from "next/image";

const leadershipItems = [
  "25+ years of combined RCM experience",
  "Certified professional coders (CPC) & billing specialists",
  "Identify hidden revenue leaks instantly",
  "Dedicated client success managers for every practice",
];

const complianceItems = [
  "Secure data handling & encrypted access",
  "Regular internal audits",
  "Accurate documentation alignment",
  "Strict privacy protection for every patient record",
];

const approachItems = [
  {
    title: "Understand Your Practice Needs",
    description:
      "We study your specialty, workflow, payer mix, denial trends, and claim patterns.",
  },
  {
    title: "Build a Custom Billing Strategy",
    description:
      "A dedicated biller + coder team manages your claims, coding accuracy, and follow-ups.",
  },
  {
    title: "Optimize & Improve Continuously",
    description:
      "You receive monthly reporting, revenue insights, denial root-cause analysis, and constant performance refinement.",
  },
];

const chooseUsItems = [
  {
    title: "Increase Revenue",
    description:
      "Our strategies boost reimbursements and minimize missed charges.",
  },
  {
    title: "Streamlined RCM Workflow",
    description:
      "Faster approvals and clean claims on the first submission.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Support for solo practices, group clinics, and multi-location organizations.",
  },
  {
    title: "Reduced Errors & Denials",
    description:
      "Accurate coding and payer-aligned claim formatting.",
  },
  {
    title: "Improved Efficiency",
    description: "We handle the billing; you focus on clinical care.",
  },
  {
    title: "Advanced Technology",
    description: "Modern RCM tools integrated with your existing EMR/EHR.",
  },
];

const workWithUsItems = [
  "Lower denials & rejections",
  "98% clean claim acceptance",
  "HIPAA-compliant processes",
  "Faster reimbursements & A/R recovery",
  "Dedicated biller for your practice",
  "Accurate coding & real-time reporting",
];

const coreValues = [
  "Accuracy First",
  "Complete Transparency",
  "Patient-Focused Support",
  "Accountability & Compliance",
  "Reliable Communication",
  "Continuous Improvement",
];

export default function AboutUsContent() {
  return (
    <>
      <section className="w-full bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-16">
            <div>
              <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
                About Avenue
                <br />
                Billing Services
              </h2>
            </div>

            <div className="rounded-[20px] bg-accent/10 px-7 py-6 md:px-10">
              <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9">
                At Avenue Billing Services, we help healthcare organizations simplify revenue cycle operations with accuracy, transparency, and specialty-aligned billing support. Our certified medical billers, coders, and RCM specialists work as an extension of your team, ensuring cleaner claims, fewer denials, and predictable cash flow.
                <br />
                With deep experience across major payers, EMR systems, and compliance requirements, we manage the full billing workflow so providers can stay focused on delivering great patient care, not chasing paperwork
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[400px_320px_minmax(0,1fr)] lg:gap-12">
            <Image
              src="/about us/3_rectangle_264.png"
              alt="Avenue Billing Services team reviewing billing data"
              width={399}
              height={384}
              className="h-auto w-full max-w-[400px] rounded-[20px] object-cover"
            />

            <div className="space-y-10 pt-2">
              {["Our Story", "Our Mission", "Our Version"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl"
                >
                  <span className="relative size-4 shrink-0 rounded-full border border-heading">
                    <span className="absolute -right-2 -bottom-2 block h-3 w-1.5 rotate-180 bg-black" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg md:leading-9">
              Avenue Billing Services was founded with one purpose: to help healthcare providers overcome the complexity of medical billing and maintain stable financial performance. What began as a small team of billing experts has grown into a nationwide RCM partner serving multi-specialty groups, clinics, and independent practices. Our growth has been driven by one promise,to deliver accurate billing, transparent communication, and reliable results for every provider we support.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-accent/10 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <h2 className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
            Our Core Values
          </h2>

          <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:gap-20">
            <div className="mx-auto w-full max-w-[560px]">
              <div
                className="relative mx-auto aspect-square w-[78%] overflow-hidden bg-primary-light p-[8px]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 88% 12%, 100% 50%, 88% 88%, 50% 100%, 12% 88%, 0% 50%, 12% 12%)",
                }}
              >
                <div
                  className="h-full w-full overflow-hidden bg-sky-100 p-5"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 88% 12%, 100% 50%, 88% 88%, 50% 100%, 12% 88%, 0% 50%, 12% 12%)",
                  }}
                >
                  <Image
                    src="/about us/4_rectangle_422.png"
                    alt="Healthcare billing professional"
                    width={561}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {coreValues.map((value, index) => (
                <div
                  key={value}
                  className="rounded-2xl bg-white px-5 py-4"
                >
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="font-inter text-xl font-semibold leading-8 text-heading md:text-2xl">
                      {value}
                    </h3>
                    <span className="font-inter text-2xl font-normal text-primary-light">
                      {index === 0 ? "−" : "+"}
                    </span>
                  </div>

                  {index === 0 && (
                    <p className="mt-3 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                      Every claim is coded, checked, and validated with precision.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <SectionHeading
            title="Leadership & Expertise"
            subtitle="Our team brings together"
          />

          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {leadershipItems.map((item) => (
              <div key={item} className="flex flex-col items-center text-center">
                <div
                  className="flex aspect-[1.08/1] w-full max-w-[320px] flex-col items-center justify-center bg-white px-8 py-10 shadow-[0px_10px_18px_rgba(0,0,0,0.10)] outline outline-1 outline-primary-light"
                  style={{
                    clipPath:
                      "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                  }}
                >
                  <span className="mb-5 flex size-16 items-center justify-center rounded-full border-2 border-primary-light text-3xl text-primary-light">
                    ✓
                  </span>
                  <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg md:leading-8">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
            We operate with the mindset of a partner, not a vendor.
          </p>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-10 lg:py-16">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <SectionHeading
            title="Compliance Commitment"
            subtitle={
              <>
                Compliance is the backbone of our billing operations.
                <br />
                We follow all national and state regulations including HIPAA, CMS, AMA, OIG, and payer-specific rules.
                <br />
                <strong className="text-heading">Our workflows include</strong>
              </>
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-16 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {complianceItems.map((item) => (
              <div key={item} className="flex justify-center py-8">
                <div className="relative flex size-[230px] rotate-45 items-center justify-center rounded-2xl border border-primary-light bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.07)] md:size-[250px]">
                  <div className="-rotate-45 px-7 text-center">
                    <div className="mb-4 text-4xl text-primary-light">✓</div>
                    <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
            Your practice stays protected, compliant, and audit-ready.
          </p>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <SectionHeading title="Our Approach" />

          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {approachItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-dashed border-primary-light bg-indigo-50 px-10 py-14 text-center"
              >
                <h3 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl md:leading-10">
                  {item.title}
                </h3>
                <p className="mx-auto mt-5 max-w-sm font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-10 lg:py-16">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <SectionHeading title="Why Choose Us" />

          <div className="mt-12 overflow-hidden rounded-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {chooseUsItems.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    "min-h-[240px] px-10 py-12 text-center " +
                    ([0, 2, 4].includes(index) ? "bg-accent/10" : "bg-white")
                  }
                >
                  <h3 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl md:leading-10">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-6 max-w-sm font-manrope text-base leading-8 text-neutral-500 md:text-lg">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <SectionHeading
            title="Why Work With Us?"
            subtitle="Partnering with Avenue means"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workWithUsItems.map((item) => (
              <div
                key={item}
                className="rounded-[74px] border border-dashed border-primary-light bg-white px-8 py-6 text-center font-manrope text-base font-normal leading-8 text-neutral-500 shadow-[0px_10px_20px_rgba(0,0,0,0.05)] md:text-lg"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-manrope text-base font-bold leading-8 text-heading md:text-lg">
            We don’t just manage billing, improve your financial outcomes.
          </p>
        </div>
      </section>

      <section className="w-full bg-cyan-50 pb-14 pt-10 lg:pb-20">
        <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <div
            className="relative overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/about us/6_rectangle_627.png")' }}
          >
            <div className="absolute inset-0 bg-teal-500/85" />

            <div className="relative grid min-h-[400px] grid-cols-1 items-center gap-8 px-8 py-12 md:px-12 lg:grid-cols-[minmax(0,1fr)_500px] lg:px-16 lg:py-16">
              <div className="relative z-10 max-w-[650px] text-white">
                <h2 className="font-inter text-3xl font-semibold leading-10 md:text-4xl">
                  Ready to work with a reliable billing partner?
                </h2>

                <p className="mt-6 max-w-[560px] font-manrope text-base font-normal leading-8 md:text-lg">
                  Get a free consultation and see how Avenue Billing Services can strengthen your revenue cycle.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#"
                    className="rounded-[44px] bg-white px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-neutral-600"
                  >
                    Request a Free Consultation
                  </a>
                  <a
                    href="#"
                    className="rounded-[44px] bg-primary-light px-7 py-2.5 text-center font-manrope text-base font-normal leading-8 text-white"
                  >
                    Talk to a Billing Expert
                  </a>
                </div>
              </div>

              <div className="relative hidden h-full min-h-[330px] lg:block">
                <Image
                  src="/Services Location/13_1.png"
                  alt="Medical billing healthcare professional"
                  width={466}
                  height={587}
                  className="absolute bottom-[-64px] right-2 h-auto w-[430px] max-w-none object-contain xl:w-[466px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <h2 className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <div className="mx-auto mt-5 max-w-3xl font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
          {subtitle}
        </div>
      )}
    </div>
  );
}
