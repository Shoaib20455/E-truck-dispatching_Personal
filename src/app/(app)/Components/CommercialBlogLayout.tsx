import Image from "next/image";

export type CommercialCompany = {
  name: string;
  logo: string;
  rating: string;
  bestFor: string;
};

export type CommercialArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

type CommercialAuthor = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  published: string;
  updated: string;
};

type FeaturedCompany = {
  name: string;
  logo: string;
  rating: string;
  intro: string;
  followUp: string;
  compliance: string;
  experience: string;
  services: string;
  location: string;
  reasons: {
    title: string;
    description: string;
  }[];
};

type CommercialBlogLayoutProps = {
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  specialties: string[];
  summary: string;
  introParagraphs: string[];
  companies: CommercialCompany[];
  featuredCompany: FeaturedCompany;
  articleSections: CommercialArticleSection[];
  recentPosts: string[];
  author: CommercialAuthor;
};

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function CommercialBlogLayout({
  title,
  featuredImage,
  featuredImageAlt,
  specialties,
  summary,
  introParagraphs,
  companies,
  featuredCompany,
  articleSections,
  recentPosts,
  author,
}: CommercialBlogLayoutProps) {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-sky-500/75 to-teal-500/75">
        <div className="mx-auto w-full max-w-[1520px] px-6 py-16 lg:px-8 lg:py-20 2xl:px-0">
          <h1 className="font-inter text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="w-full bg-cyan-50 py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-10 px-6 lg:px-8 xl:grid-cols-[minmax(0,986px)_minmax(320px,504px)] xl:gap-[30px] 2xl:px-0">
          <article className="min-w-0">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              width={986}
              height={640}
              priority
              className="aspect-[986/640] w-full rounded-[20px] object-cover"
            />

            <div className="mt-10 rounded-lg border-l-[5px] border-accent bg-accent/10 p-5">
              <p className="font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                <strong className="text-primary-light">Summary:</strong>{" "}
                {summary}
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {introParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-manrope text-base font-normal leading-7 text-neutral-500 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse border border-slate-300 bg-cyan-50">
                <thead>
                  <tr>
                    <th className="w-[32%] border-b-2 border-r border-slate-300 px-4 py-4 text-left font-inter text-xl font-semibold text-primary-light">
                      Company
                    </th>
                    <th className="w-[18%] border-b-2 border-r border-slate-300 px-4 py-4 text-left font-inter text-xl font-semibold text-primary-light">
                      Rating
                    </th>
                    <th className="border-b-2 border-slate-300 px-4 py-4 text-left font-inter text-xl font-semibold text-primary-light">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.name} className="align-middle">
                      <td className="border-b border-r border-slate-300 px-4 py-5">
                        <div className="flex items-center gap-4">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={45}
                            height={45}
                            className="size-11 rounded-sm object-contain"
                          />
                          <span className="font-inter text-base font-semibold leading-7 text-heading md:text-lg">
                            {company.name}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-r border-slate-300 px-4 py-5">
                        <StarRating rating={company.rating} />
                      </td>
                      <td className="border-b border-slate-300 px-4 py-5 font-manrope text-base leading-6 text-neutral-500 md:text-lg">
                        {company.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <section id="transcure" className="mt-14">
              <h2 className="font-inter text-2xl font-semibold leading-10 text-primary-light md:text-3xl">
                1. {featuredCompany.name}
              </h2>

              <Image
                src={featuredCompany.logo}
                alt={featuredCompany.name}
                width={150}
                height={150}
                className="mt-6 size-36 rounded-[5px] object-contain"
              />

              <div className="mt-4">
                <StarRating rating={featuredCompany.rating} />
              </div>

              <p className="mt-5 font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                {featuredCompany.intro}
              </p>

              <div className="mt-6 rounded-[10px] bg-gradient-to-b from-teal-500 to-teal-950 p-5">
                <h3 className="font-inter text-2xl font-semibold leading-tight text-white md:text-3xl">
                  Simplify Billing. Strengthen Compliance. Get Paid Faster
                </h3>
                <a
                  href="#consultation"
                  className="mt-4 inline-flex rounded-3xl bg-primary-light px-6 py-2 font-inter text-sm font-semibold leading-8 text-white"
                >
                  Book a Free Consultation
                </a>
              </div>

              <p className="mt-6 font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                {featuredCompany.followUp}
              </p>

              <p className="mt-5 font-manrope text-base leading-7 text-neutral-500 md:text-lg">
                {featuredCompany.compliance}
              </p>

              <div className="mt-7 overflow-hidden border border-slate-300">
                <div className="grid grid-cols-[minmax(150px,1fr)_minmax(0,2.05fr)]">
                  <div className="bg-accent px-4 py-3 font-inter text-xl font-semibold text-white">
                    Category
                  </div>
                  <div className="border-l border-slate-300 bg-accent px-4 py-3 font-inter text-xl font-semibold text-white">
                    Details
                  </div>

                  <DetailLabel>Experience</DetailLabel>
                  <DetailValue>{featuredCompany.experience}</DetailValue>

                  <DetailLabel>Services</DetailLabel>
                  <DetailValue>{featuredCompany.services}</DetailValue>

                  <DetailLabel>Location</DetailLabel>
                  <DetailValue>{featuredCompany.location}</DetailValue>
                </div>
              </div>

              <h3 className="mt-10 font-inter text-2xl font-semibold leading-8 text-heading md:text-3xl">
                Why Are They a Top Choice?
              </h3>

              <div className="mt-5 space-y-5">
                {featuredCompany.reasons.map((reason) => (
                  <p
                    key={reason.title}
                    className="font-manrope text-base leading-8 text-neutral-500 md:text-lg"
                  >
                    <strong>{reason.title}:</strong> {reason.description}
                  </p>
                ))}
              </div>
            </section>

            <div className="mt-14 space-y-10">
              {articleSections.map((section) => (
                <section key={section.title} id={sectionId(section.title)}>
                  <h2 className="font-inter text-2xl font-semibold leading-9 text-heading md:text-3xl">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 whitespace-pre-line font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-6 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.closingParagraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 whitespace-pre-line font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>

          <aside className="self-start">
            <section>
              <h2 className="font-inter text-2xl font-semibold leading-10 text-heading md:text-3xl">
                Specialties
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {specialties.map((specialty) => (
                  <a
                    key={specialty}
                    href="#"
                    className="rounded-3xl bg-accent/10 px-3 py-1.5 font-inter text-sm font-medium leading-6 text-primary-light outline outline-[3px] outline-offset-[-3px] outline-accent/10"
                  >
                    {specialty}
                  </a>
                ))}
              </div>
            </section>

            <a
              href="#transcure"
              className="mt-8 flex min-h-12 w-full items-center justify-center rounded-[60px] bg-primary-light px-7 py-2.5 text-center font-manrope text-sm font-medium leading-8 text-white"
            >
              Table of Content
            </a>

            <section className="mt-8 rounded-[20px] bg-accent/10 p-7">
              <h2 className="font-inter text-2xl font-semibold leading-10 text-neutral-600 md:text-3xl">
                Recent Posts
              </h2>
              <div className="mt-5 space-y-5">
                {recentPosts.map((post, index) => (
                  <a
                    key={post + index}
                    href="#"
                    className="flex items-start gap-3 font-inter text-base font-medium leading-6 text-neutral-600 md:text-lg"
                  >
                    <span className="text-xl font-black text-primary-light">›</span>
                    <span>{post}</span>
                  </a>
                ))}
              </div>
            </section>

            <AuthorCard author={author} />

            <ConsultationCard specialties={specialties} />
          </aside>
        </div>
      </section>
    </>
  );
}

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-slate-300 bg-white px-4 py-3 font-inter text-lg font-bold text-primary-light md:text-xl">
      {children}
    </div>
  );
}

function DetailValue({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l border-t border-slate-300 bg-white px-4 py-3 font-manrope text-base leading-7 text-neutral-500 md:text-lg">
      {children}
    </div>
  );
}

function StarRating({ rating }: { rating: string }) {
  const numericRating = Number(rating);
  const filled = Math.max(0, Math.min(5, Math.round(numericRating)));

  return (
    <div>
      <div className="flex gap-0.5 text-xl leading-5">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={index < filled ? "text-yellow-500" : "text-slate-300"}
          >
            ★
          </span>
        ))}
      </div>
      <div className="mt-1 font-inter text-base font-medium leading-7 text-heading md:text-lg">
        {rating}
      </div>
    </div>
  );
}

function AuthorCard({ author }: { author: CommercialAuthor }) {
  return (
    <section className="mt-8 rounded-[20px] bg-accent/10 p-7">
      <div className="flex items-center gap-5">
        <Image
          src={author.image}
          alt={author.imageAlt}
          width={70}
          height={70}
          className="size-[70px] rounded-full object-cover"
        />

        <div>
          <h2 className="font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl">
            {author.name}
          </h2>
          <p className="mt-1 font-manrope text-xs font-medium leading-8 text-neutral-600">
            {author.role}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-1 font-manrope text-xs font-medium leading-6 text-neutral-500">
        <p>Published: {author.published}</p>
        <p>Updated: {author.updated}</p>
      </div>

      <div className="mt-5 flex min-h-9 max-w-72 items-center justify-center gap-5 rounded-[10px] bg-primary-light px-4 text-white">
        <a href="#" aria-label="LinkedIn" className="text-xs font-bold">in</a>
        <a href="#" aria-label="Facebook" className="text-xs font-bold">f</a>
        <a href="#" aria-label="Instagram" className="text-xs font-bold">◎</a>
        <a href="#" aria-label="X" className="text-xs font-bold">𝕏</a>
        <a href="#" aria-label="YouTube" className="text-xs font-bold">▶</a>
      </div>
    </section>
  );
}

function ConsultationCard({ specialties }: { specialties: string[] }) {
  return (
    <section id="consultation" className="mt-8 rounded-[20px] bg-accent/10 px-7 py-8">
      <h2 className="text-center font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl">
        Schedule a Free Consultation
      </h2>

      <form className="mt-6 space-y-4">
        <Field label="Practice Name *">
          <input
            type="text"
            name="practiceName"
            placeholder="Full Name"
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field>

        <Field label="Select Your Specialty *">
          <select
            name="specialty"
            defaultValue=""
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          >
            <option value="" disabled>Select Specialty</option>
            {specialties.slice(0, 12).map((specialty) => (
              <option key={specialty}>{specialty}</option>
            ))}
          </select>
        </Field>

        <Field label="Name *">
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field>

        <Field label="Phone Number *">
          <input
            type="tel"
            name="phone"
            placeholder="(000) 000-0000"
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-medium text-neutral-500 outline-none"
          />
        </Field>

        <Field label="Email Address *">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          />
        </Field>

        <Field label="Monthly Collection *">
          <select
            name="monthlyCollection"
            defaultValue=""
            className="h-11 w-full rounded-[10px] bg-white px-3 font-manrope text-xs font-light text-neutral-500 outline-none"
          >
            <option value="" disabled>Monthly Collection</option>
            <option>Under $25,000</option>
            <option>$25,000 - $50,000</option>
            <option>$50,000 - $100,000</option>
            <option>$100,000+</option>
          </select>
        </Field>

        <div className="pt-2 text-center">
          <button
            type="submit"
            className="rounded-[60px] bg-primary-light px-7 py-2.5 font-manrope text-sm font-medium leading-8 text-white"
          >
            Book Consultation
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-manrope text-xs font-medium leading-6 text-neutral-600">
        {label}
      </span>
      {children}
    </label>
  );
}
