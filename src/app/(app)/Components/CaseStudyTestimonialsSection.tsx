const testimonials = [
  ["Dr. Ahmed Raza", "Orthopedic Surgeon", "They reduced our billing backlog and helped us recover thousands in unpaid claims. Their team really knows the healthcare system."],
  ["Dr. Sarah Khan", "Family Physician", "This team has completely streamlined my billing process. I can now focus on patient care while they handle claims quickly and accurately. Excellent service!"],
  ["Dr. Imran Malik", "Cardiologist", "They are professional, efficient, and knowledgeable. Our collections increased by nearly 35% in just a few months. Truly a great experience!"],
  ["Dr. Ayesha Qureshi", "Dermatologist", "Their understanding of medical coding and compliance is exceptional. Every claim is handled perfectly, saving us time and avoiding errors."],
  ["Dr. Maria Yousaf", "Pediatrician", "They are detail-oriented and professional. Our practice has seen a noticeable difference in revenue and efficiency since partnering with them."],
];

export default function CaseStudyTestimonialsSection() {
  return (
    <section className="w-full bg-cyan-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1920px]">
        <h2 className="mx-auto max-w-[760px] px-6 text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl">
          Client Experiences With Our Billing Team
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 px-6 md:grid-cols-2 xl:grid-cols-5 xl:px-0">
          {testimonials.map(([name, role, quote]) => (
            <article key={name} className="rounded-[10px] bg-white px-7 py-10 text-center">
              <h3 className="font-manrope text-xl font-semibold leading-6 text-heading">{name}</h3>
              <p className="mt-2 font-manrope text-lg leading-6 text-neutral-500">{role}</p>
              <div className="mt-4 text-xl tracking-[2px] text-amber-400">★★★★★</div>
              <p className="mt-5 font-manrope text-base leading-6 text-neutral-500 md:text-lg">“{quote}”</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="size-3 rounded-full border border-black bg-primary-light" />
          <span className="size-3 rounded-full border border-black bg-white" />
          <span className="size-3 rounded-full border border-black bg-white" />
        </div>
      </div>
    </section>
  );
}
