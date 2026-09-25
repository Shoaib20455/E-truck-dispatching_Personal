import ContactConsultationForm from "./ContactConsultationForm";
import ContactInformationPanel from "./ContactInformationPanel";

export default function ContactDetailsSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <h2 className="mx-auto max-w-[660px] text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl md:leading-[1.15]">
          We will contact you within
          <br />
          one business day
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <ContactInformationPanel />
          <ContactConsultationForm />
        </div>
      </div>
    </section>
  );
}
