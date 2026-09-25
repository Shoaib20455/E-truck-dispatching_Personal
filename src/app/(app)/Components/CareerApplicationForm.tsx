export type CareerDepartment = {
  label: string;
  value: string;
};

export type CareerCountry = {
  label: string;
  value: string;
};

export type CareerApplicationCopy = {
  nameLabel: string;
  firstNameHelper: string;
  lastNameHelper: string;
  emailLabel: string;
  addressLabel: string;
  addressLine1Helper: string;
  addressLine2Helper: string;
  cityHelper: string;
  stateHelper: string;
  postalCodeHelper: string;
  countryHelper: string;
  countryPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  departmentsHeading: string;
  uploadHeading: string;
  uploadHint: string;
  submitLabel: string;
};

type CareerApplicationFormProps = {
  copy: CareerApplicationCopy;
  departments: CareerDepartment[];
  countries: CareerCountry[];
};

export default function CareerApplicationForm({
  copy,
  departments,
  countries,
}: CareerApplicationFormProps) {
  const inputClass =
    "h-12 w-full border border-emerald-400 bg-transparent px-4 font-manrope text-sm text-heading outline-none transition-colors focus:border-sky-500";

  return (
    <section className="w-full bg-cyan-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1040px] px-6">
        <form className="w-full">
          <FieldLabel label={copy.nameLabel}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <HelperInput
                name="firstName"
                className={inputClass}
                helper={copy.firstNameHelper}
              />
              <HelperInput
                name="lastName"
                className={inputClass}
                helper={copy.lastNameHelper}
              />
            </div>
          </FieldLabel>

          <FieldLabel label={copy.emailLabel} className="mt-7">
            <input
              type="email"
              name="email"
              className={inputClass}
            />
          </FieldLabel>

          <FieldLabel label={copy.addressLabel} className="mt-7">
            <HelperInput
              name="addressLine1"
              className={inputClass}
              helper={copy.addressLine1Helper}
            />

            <div className="mt-5">
              <HelperInput
                name="addressLine2"
                className={inputClass}
                helper={copy.addressLine2Helper}
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <HelperInput
                name="city"
                className={inputClass}
                helper={copy.cityHelper}
              />
              <HelperInput
                name="state"
                className={inputClass}
                helper={copy.stateHelper}
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <HelperInput
                name="postalCode"
                className={inputClass}
                helper={copy.postalCodeHelper}
              />

              <div>
                <select
                  name="country"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    {copy.countryPlaceholder}
                  </option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 font-manrope text-xs text-neutral-400">
                  {copy.countryHelper}
                </p>
              </div>
            </div>
          </FieldLabel>

          <FieldLabel label={copy.phoneLabel} className="mt-7">
            <input
              type="tel"
              name="phone"
              placeholder={copy.phonePlaceholder}
              className={inputClass}
            />
          </FieldLabel>

          <fieldset className="mt-12">
            <legend className="font-inter text-xl font-semibold leading-8 text-heading md:text-2xl">
              {copy.departmentsHeading}
            </legend>

            <div className="mt-7 space-y-4">
              {departments.map((department) => (
                <label
                  key={department.value}
                  className="flex w-fit items-center gap-3 font-manrope text-base leading-6 text-neutral-600"
                >
                  <input
                    type="checkbox"
                    name="departments"
                    value={department.value}
                    className="size-4 border border-neutral-500 accent-sky-500"
                  />
                  <span>{department.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-14">
            <label className="font-inter text-xl font-semibold leading-8 text-heading md:text-2xl">
              {copy.uploadHeading}
            </label>

            <label className="mt-6 flex min-h-[110px] cursor-pointer items-center border border-dashed border-emerald-400 px-8 py-6">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="sr-only"
              />

              <span className="mr-4 flex size-7 shrink-0 items-center justify-center text-heading">
                <UploadIcon />
              </span>

              <span className="font-manrope text-sm text-neutral-400">
                {copy.uploadHint}
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-sky-500 px-8 py-3 font-manrope text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            {copy.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

function FieldLabel({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={"block " + className}>
      <span className="mb-2 block font-inter text-sm font-medium text-heading">
        {label}
      </span>
      {children}
    </label>
  );
}

function HelperInput({
  name,
  helper,
  className,
}: {
  name: string;
  helper: string;
  className: string;
}) {
  return (
    <div>
      <input
        type="text"
        name={name}
        className={className}
      />
      <p className="mt-2 font-manrope text-xs text-neutral-400">
        {helper}
      </p>
    </div>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
      <path
        d="M12 15V4m0 0L8 8m4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
