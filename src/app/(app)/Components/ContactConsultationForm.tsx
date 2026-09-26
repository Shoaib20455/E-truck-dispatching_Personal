import AppLink from "./navigation/AppLink";
import { AnimatedDiv, AnimatedHeading, StaggerGroup, StaggerItem } from "./animation/MotionElements";

export type ContactFormCopy = {
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
  dateLabel: string;
  timeLabel: string;
  stateLabel: string;
  statePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
};

type ContactConsultationFormProps = {
  heading: string;
  specialties: string[];
  states: string[];
  monthlyCollections: string[];
  copy: ContactFormCopy;
  privacyLabel: string;
  privacyLinkLabel: string;
  privacyHref: string;
  buttonText: string;
};

export default function ContactConsultationForm({
  heading,
  specialties,
  states,
  monthlyCollections,
  copy,
  privacyLabel,
  privacyLinkLabel,
  privacyHref,
  buttonText,
}: ContactConsultationFormProps) {
  return (
    <AnimatedDiv preset="fade-up" className="bg-accent/10 px-7 py-8 md:px-10 md:py-10">
      <AnimatedHeading
        text={heading}
        className="text-center font-inter text-3xl font-semibold leading-9 text-heading md:text-4xl"
      />

      <form className="mt-7">
        <StaggerGroup stagger={0.07} className="space-y-4">
        <StaggerItem preset="fade-up"><div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <Field label={copy.practiceNameLabel}>
            <input type="text" name="practiceName" placeholder={copy.practiceNamePlaceholder} className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.specialtyLabel}>
            <select name="specialty" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>{copy.specialtyPlaceholder}</option>
              {specialties.map((specialty) => <option key={specialty}>{specialty}</option>)}
            </select>
          </Field>

          <Field label={copy.nameLabel}>
            <input type="text" name="name" placeholder={copy.namePlaceholder} className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.phoneLabel}>
            <input type="tel" name="phone" placeholder={copy.phonePlaceholder} className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-medium text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.emailLabel}>
            <input type="email" name="email" placeholder={copy.emailPlaceholder} className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.monthlyCollectionLabel}>
            <select name="monthlyCollection" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>{copy.monthlyCollectionPlaceholder}</option>
              {monthlyCollections.map((item) => <option key={item}>{item}</option>)}
            </select>
          </Field>
        </div></StaggerItem>

        <StaggerItem preset="fade-up"><div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label={copy.dateLabel}>
            <input type="date" name="date" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.timeLabel}>
            <input type="time" name="time" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none" />
          </Field>

          <Field label={copy.stateLabel}>
            <select name="state" defaultValue="" className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none">
              <option value="" disabled>{copy.statePlaceholder}</option>
              {states.map((state) => <option key={state}>{state}</option>)}
            </select>
          </Field>
        </div></StaggerItem>

        <StaggerItem preset="fade-up"><Field label={copy.messageLabel}>
          <textarea name="message" placeholder={copy.messagePlaceholder} rows={5} className="min-h-32 w-full resize-y rounded-[10px] bg-white px-3 py-2 font-manrope text-xs font-light leading-6 text-neutral-500 outline-none" />
        </Field></StaggerItem>

        <StaggerItem preset="fade-up"><label className="flex items-start gap-3">
          <input type="checkbox" name="consent" defaultChecked className="mt-1 size-3 accent-sky-500" />
          <span className="font-manrope text-xs font-medium leading-6 text-heading">
            {privacyLabel}{" "}
            <AppLink href={privacyHref} className="text-primary-light underline">
              {privacyLinkLabel}
            </AppLink>
            .
          </span>
        </label></StaggerItem>

        <StaggerItem preset="fade-up" hover="soft" className="text-center">
          <button type="submit" className="rounded-[37px] bg-primary-light px-7 py-2.5 font-manrope text-sm font-medium leading-8 text-white">
            {buttonText}
          </button>
        </StaggerItem>
        </StaggerGroup>
      </form>
    </AnimatedDiv>
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
