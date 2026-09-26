import { AnimatedDiv } from "./animation/MotionElements";

import Image from "next/image";
import AuthorCard, { type AuthorCardProps } from "./AuthorCard";
import ConsultationCard, { type ConsultationCardProps } from "./ConsultationCard";

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

export type CommercialSpecialtyLink = {
  label: string;
  href: string;
};

export type CommercialRecentPost = {
  title: string;
  href: string;
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

type CommercialBlogLabels = {
  summaryLabel: string;
  companyTableHeaders: [string, string, string];
  featuredCtaTitle: string;
  featuredCtaButtonLabel: string;
  featuredCtaHref: string;
  detailHeaders: {
    category: string;
    details: string;
    experience: string;
    services: string;
    location: string;
  };
  topChoiceHeading: string;
  specialtiesHeading: string;
  tableOfContentsLabel: string;
  recentPostsHeading: string;
};

type CommercialBlogLayoutProps = {
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  specialties: CommercialSpecialtyLink[];
  summary: string;
  introParagraphs: string[];
  companies: CommercialCompany[];
  featuredCompany: FeaturedCompany;
  articleSections: CommercialArticleSection[];
  recentPosts: CommercialRecentPost[];
  labels: CommercialBlogLabels;
  consultation: ConsultationCardProps;
  author: AuthorCardProps;
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
  labels,
  consultation,
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
                <strong className="text-primary-light">{labels.summaryLabel}:</strong>{" "}
                {summary}
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph} className="font-manrope text-base font-normal leading-7 text-neutral-500 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse border border-slate-300 bg-cyan-50">
                <thead>
                  <tr>
                    {labels.companyTableHeaders.map((header, index) => (
                      <th
                        key={header}
                        className={
                          (index === 0 ? "w-[32%] " : index === 1 ? "w-[18%] " : "") +
                          "border-b-2 " +
                          (index < 2 ? "border-r " : "") +
                          "border-slate-300 px-4 py-4 text-left font-inter text-xl font-semibold text-primary-light"
                        }
                      >
                        {header}
                      </th>
                    ))}
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

            <section id="featured-company" className="mt-14">
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
                  {labels.featuredCtaTitle}
                </h3>
                <a
                  href={labels.featuredCtaHref}
                  className="mt-4 inline-flex rounded-3xl bg-primary-light px-6 py-2 font-inter text-sm font-semibold leading-8 text-white"
                >
                  {labels.featuredCtaButtonLabel}
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
                    {labels.detailHeaders.category}
                  </div>
                  <div className="border-l border-slate-300 bg-accent px-4 py-3 font-inter text-xl font-semibold text-white">
                    {labels.detailHeaders.details}
                  </div>

                  <DetailLabel>{labels.detailHeaders.experience}</DetailLabel>
                  <DetailValue>{featuredCompany.experience}</DetailValue>

                  <DetailLabel>{labels.detailHeaders.services}</DetailLabel>
                  <DetailValue>{featuredCompany.services}</DetailValue>

                  <DetailLabel>{labels.detailHeaders.location}</DetailLabel>
                  <DetailValue>{featuredCompany.location}</DetailValue>
                </div>
              </div>

              <h3 className="mt-10 font-inter text-2xl font-semibold leading-8 text-heading md:text-3xl">
                {labels.topChoiceHeading}
              </h3>

              <div className="mt-5 space-y-5">
                {featuredCompany.reasons.map((reason) => (
                  <p key={reason.title} className="font-manrope text-base leading-8 text-neutral-500 md:text-lg">
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
                    <p key={paragraph} className="mt-4 whitespace-pre-line font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-6 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}

                  {section.closingParagraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 whitespace-pre-line font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
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
                {labels.specialtiesHeading}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {specialties.map((specialty) => (
                  <a
                    key={specialty.label}
                    href={specialty.href}
                    className="rounded-3xl bg-accent/10 px-3 py-1.5 font-inter text-sm font-medium leading-6 text-primary-light outline outline-[3px] outline-offset-[-3px] outline-accent/10"
                  >
                    {specialty.label}
                  </a>
                ))}
              </div>
            </section>

            <a
              href="#featured-company"
              className="mt-8 flex min-h-12 w-full items-center justify-center rounded-[60px] bg-primary-light px-7 py-2.5 text-center font-manrope text-sm font-medium leading-8 text-white"
            >
              {labels.tableOfContentsLabel}
            </a>

            <section className="mt-8 rounded-[20px] bg-accent/10 p-7">
              <h2 className="font-inter text-2xl font-semibold leading-10 text-neutral-600 md:text-3xl">
                {labels.recentPostsHeading}
              </h2>
              <div className="mt-5 space-y-5">
                {recentPosts.map((post) => (
                  <a
                    key={post.title}
                    href={post.href}
                    className="flex items-start gap-3 font-inter text-base font-medium leading-6 text-neutral-600 md:text-lg"
                  >
                    <span className="text-xl font-black text-primary-light">›</span>
                    <span>{post.title}</span>
                  </a>
                ))}
              </div>
            </section>

            <div className="mt-8">
              <AuthorCard {...author} />
            </div>

            <div className="mt-8">
              <ConsultationCard {...consultation} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedDiv preset="fade-up" className="border-t border-slate-300 bg-white px-4 py-3 font-inter text-lg font-bold text-primary-light md:text-xl">
      {children}
    </AnimatedDiv>
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
          <span key={index} className={index < filled ? "text-yellow-500" : "text-slate-300"}>
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
