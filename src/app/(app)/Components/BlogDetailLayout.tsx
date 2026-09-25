import Image from "next/image";

export type BlogArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

type BlogAuthor = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  published: string;
  updated: string;
};

type BlogDetailLayoutProps = {
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  sections: BlogArticleSection[];
  author: BlogAuthor;
};

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogDetailLayout({
  title,
  featuredImage,
  featuredImageAlt,
  sections,
  author,
}: BlogDetailLayoutProps) {
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
          <article id="article-content" className="min-w-0">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              width={986}
              height={640}
              priority
              className="aspect-[986/640] w-full rounded-[20px] object-cover"
            />

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
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
            <a
              href="#article-content"
              className="flex min-h-12 w-full items-center justify-center rounded-[60px] bg-primary-light px-7 py-2.5 text-center font-manrope text-sm font-medium leading-8 text-white"
            >
              Table of Content
            </a>

            <div className="mt-5 rounded-[20px] bg-accent/10 px-7 py-8">
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
                    <option value="" disabled>
                      Select Specialty
                    </option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                    <option>Primary Care</option>
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
                    <option value="" disabled>
                      Monthly Collection
                    </option>
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
            </div>

            <div className="mt-8 rounded-[20px] bg-accent/10 p-7">
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
                <a href="#" aria-label="LinkedIn" className="text-xs font-bold">
                  in
                </a>
                <a href="#" aria-label="Facebook" className="text-xs font-bold">
                  f
                </a>
                <a href="#" aria-label="Instagram" className="text-xs font-bold">
                  ◎
                </a>
                <a href="#" aria-label="X" className="text-xs font-bold">
                  𝕏
                </a>
                <a href="#" aria-label="YouTube" className="text-xs font-bold">
                  ▶
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
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
