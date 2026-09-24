type StateConsultationCTAProps = {
  heading: string;
  description: string;
  backgroundImage: string;
  formHeading: string;
  buttonText: string;
  phones?: string[];
};

export default function StateConsultationCTA({
  heading, description, backgroundImage, formHeading, buttonText, phones = [],
}: StateConsultationCTAProps) {
  return (
    <section className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <div className="overflow-hidden rounded-[30px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${backgroundImage}")` }}>
          <div className="bg-teal-500/70 px-8 py-10 md:px-12 lg:px-16 lg:py-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div className="text-white">
                <h2 className="mb-6 font-inter text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">{heading}</h2>
                <p className="mb-7 font-manrope text-lg leading-8 md:text-xl">{description}</p>
                {phones.length > 0 && (
                  <div className="flex flex-col gap-4 sm:flex-row">
                    {phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-6 py-3 font-inter text-lg font-bold text-sky-500">
                        ☎ {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-[16px] bg-indigo-50/60 p-6 backdrop-blur-[2.5px] md:p-8 lg:p-10">
                <h3 className="mb-8 text-center font-inter text-2xl font-semibold text-heading md:text-3xl">{formHeading}</h3>
                <form>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Name" className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none" />
                    <input type="tel" placeholder="Phone Number" className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none" />
                    <input type="email" placeholder="Email" className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none" />
                    <input type="text" placeholder="Practice Name" className="w-full rounded-[10px] border border-neutral-600 bg-white px-5 py-3 font-manrope text-neutral-500 outline-none" />
                  </div>
                  <button type="submit" className="mt-5 w-full rounded-[36px] bg-sky-500 px-7 py-3 font-manrope text-base text-white">{buttonText}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
