import Image from "next/image";

const coreValues = [
  "Accuracy First",
  "Complete Transparency",
  "Patient-Focused Support",
  "Accountability & Compliance",
  "Reliable Communication",
  "Continuous Improvement",
];

export default function CoreValuesSection() {
  return (
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
              <div key={value} className="rounded-2xl bg-white px-5 py-4">
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
  );
}
