type ContactConsultationFormProps = {
  heading: string;
  specialties: string[];
  states: string[];
  privacyLabel: string;
  privacyLinkLabel: string;
  privacyHref: string;
  buttonText: string;
};

export default function ContactConsultationForm({
  heading,
  specialties,
  states,
  privacyLabel,
  privacyLinkLabel,
  privacyHref,
  buttonText,
}: ContactConsultationFormProps) {
  return (
    <div className="bg-accent/10 px-7 py-8 md:px-10 md:py-10">
      <h2 className="text-center font-inter text-3xl font-semibold leading-9 text-heading md:text-4xl">
        {heading}
      </h2>

      <form className="mt-7">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <Field label="Practice Name *">
            <input type="text" name="practiceName" placeholder="Full Name" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label="Select Your Specialty *">
            <select name="specialty" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>Select Specialty</option>
              {specialties.map((specialty) => <option key={specialty}>{specialty}</option>)}
            </select>
          </Field>

          <Field label="Name *">
            <input type="text" name="name" placeholder="Enter Full Name" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label="Phone Number *">
            <input type="tel" name="phone" placeholder="(000) 000-0000" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-medium text-neutral-500 outline-none" />
          </Field>

          <Field label="Email Address *">
            <input type="email" name="email" placeholder="Your Email Address" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label="Monthly Collection *">
            <select name="monthlyCollection" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>Monthly Collection</option>
              <option>Under $25,000</option>
              <option>$25,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000+</option>
            </select>
          </Field>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Date *">
            <input type="date" name="date" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label="Time*">
            <input type="time" name="time" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label="Select Your State *">
            <select name="state" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>Select State</option>
              {states.map((state) => <option key={state}>{state}</option>)}
            </select>
          </Field>
        </div>

        <Field label="How Can We Help You?" className="mt-4">
          <textarea name="message" placeholder="Message" rows={5} className="min-h-32 w-full resize-y rounded-[10px] bg-white px-3 py-2 font-manrope text-xs font-light leading-6 text-neutral-500 outline-none" />
        </Field>

        <label className="mt-5 flex items-start gap-3">
          <input type="checkbox" name="consent" defaultChecked className="mt-1 size-3 accent-sky-500" />
          <span className="font-manrope text-xs font-medium leading-6 text-heading">
            {privacyLabel}{" "}
            <a href={privacyHref} className="text-primary-light underline">
              {privacyLinkLabel}
            </a>
            .
          </span>
        </label>

        <div className="mt-6 text-center">
          <button type="submit" className="rounded-[37px] bg-primary-light px-7 py-2.5 font-manrope text-sm font-medium leading-8 text-white">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={"block " + className}>
      <span className="mb-1 block font-manrope text-xs font-medium leading-6 text-heading">{label}</span>
      {children}
    </label>
  );
}
