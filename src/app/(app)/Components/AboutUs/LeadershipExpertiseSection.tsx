import SectionHeading from "./SectionHeading";

const leadershipItems = [
  "25+ years of combined RCM experience",
  "Certified professional coders (CPC) & billing specialists",
  "Identify hidden revenue leaks instantly",
  "Dedicated client success managers for every practice",
];

export default function LeadershipExpertiseSection() {
  return (
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
  );
}
