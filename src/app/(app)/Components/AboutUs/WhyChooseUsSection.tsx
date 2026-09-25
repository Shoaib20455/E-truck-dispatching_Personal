import SectionHeading from "./SectionHeading";

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

export default function WhyChooseUsSection() {
  return (
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
  );
}
