import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";

export type ConsultationFieldCopy = {
  practiceNameLabel: string;
  practiceNamePlaceholder: string;
  specialtyLabel: string;
  specialtyPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  monthlyCollectionLabel: string;
  monthlyCollectionPlaceholder: string;
};

export type ConsultationCardProps = {
  id?: string;
  heading: string;
  specialties: string[];
  monthlyCollections: string[];
  copy: ConsultationFieldCopy;
  buttonText: string;
};

export default function ConsultationCard({
  id,
  heading,
  specialties,
  monthlyCollections,
  copy,
  buttonText,
}: ConsultationCardProps) {
  return (
    <AnimatedSection preset="fade-up" id={id} className="rounded-[20px] bg-accent/10 px-7 py-8">
      <AnimatedHeading
        text={heading}
        className="text-center font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl"
      />

      <form className="mt-6"><StaggerGroup stagger={0.055} className="space-y-4">
        <StaggerItem preset="fade-up"><Field label={copy.practiceNameLabel}>
          <input
            type="text"
            name="practiceName"
            placeholder={copy.practiceNamePlaceholder}
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.specialtyLabel}>
          <select
            name="specialty"
            defaultValue=""
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          >
            <option value="" disabled>{copy.specialtyPlaceholder}</option>
            {specialties.map((specialty) => <option key={specialty}>{specialty}</option>)}
          </select>
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.nameLabel}>
          <input
            type="text"
            name="name"
            placeholder={copy.namePlaceholder}
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.phoneLabel}>
          <input
            type="tel"
            name="phone"
            placeholder={copy.phonePlaceholder}
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-medium text-neutral-500 outline-none"
          />
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.emailLabel}>
          <input
            type="email"
            name="email"
            placeholder={copy.emailPlaceholder}
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.monthlyCollectionLabel}>
          <select
            name="monthlyCollection"
            defaultValue=""
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          >
            <option value="" disabled>{copy.monthlyCollectionPlaceholder}</option>
            {monthlyCollections.map((item) => <option key={item}>{item}</option>)}
          </select>
        </Field></StaggerItem>

        <StaggerItem preset="fade-up" hover="soft" className="pt-2 text-center">
          <button
            type="submit"
            className="rounded-[60px] bg-primary-light px-7 py-2.5 font-manrope text-sm font-medium leading-8 text-white"
          >
            {buttonText}
          </button>
        </StaggerItem>
      </StaggerGroup></form>
    </AnimatedSection>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-manrope text-xs font-medium leading-6 text-neutral-600">
        {label}
      </span>
      {children}
    </label>
  );
}
