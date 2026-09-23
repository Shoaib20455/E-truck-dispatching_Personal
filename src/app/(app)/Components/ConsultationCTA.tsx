type ConsultationCTAProps = {
  heading: string;
  description: string;
  backgroundImage: string;

  formHeading: string;

  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  practicePlaceholder: string;

  buttonText: string;
};

export default function ConsultationCTA({
  heading,
  description,
  backgroundImage,
  formHeading,
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  practicePlaceholder,
  buttonText,
}: ConsultationCTAProps) {
  return (
    <section className="w-full bg-cyan-50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div
          className="w-full overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        >
          <div className="w-full bg-gradient-to-b from-teal-500/90 to-teal-950/95 px-8 py-12 md:px-12 lg:px-20 lg:py-16">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              
              {/* LEFT CONTENT */}
              <div className="text-white">
                <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  {heading}
                </h2>

                <p className="max-w-xl font-manrope text-lg font-normal leading-8 md:text-xl lg:text-2xl">
                  {description}
                </p>
              </div>

              {/* FORM */}
              <div className="bg-indigo-50/50 p-6 backdrop-blur-[2.5px] md:p-8 lg:p-10">
                <h3 className="mb-8 text-center font-inter text-2xl font-semibold leading-8 text-heading md:text-3xl">
                  {formHeading}
                </h3>

                <form>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder={namePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-base font-normal text-neutral-500 outline-none"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder={phonePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-base font-normal text-neutral-500 outline-none"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder={emailPlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-base font-normal text-neutral-500 outline-none"
                    />

                    <input
                      type="text"
                      name="practice"
                      placeholder={practicePlaceholder}
                      className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-base font-normal text-neutral-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-full rounded-[36px] bg-sky-500 px-7 py-3 font-manrope text-base font-normal text-white"
                  >
                    {buttonText}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}