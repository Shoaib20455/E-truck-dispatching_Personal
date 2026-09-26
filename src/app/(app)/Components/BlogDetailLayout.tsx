import { AnimatedDiv, AnimatedSection, StaggerGroup, StaggerItem } from "./animation/MotionElements";
import Image from "next/image";
import type { ReactNode } from "react";
import AuthorCard, { type AuthorCardProps } from "./AuthorCard";
import ConsultationCard, { type ConsultationCardProps } from "./ConsultationCard";

export type BlogArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  closingParagraphs?: string[];
};

type BlogDetailLayoutProps = {
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  sections?: BlogArticleSection[];
  content?: ReactNode;
  tableOfContentsLabel: string;
  consultation: ConsultationCardProps;
  author: AuthorCardProps;
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
  content,
  tableOfContentsLabel,
  consultation,
  author,
}: BlogDetailLayoutProps) {
  const hasBody = Boolean(sections?.length || content);

  return (
    <>
      <AnimatedSection preset="fade" trigger="mount" className="w-full bg-gradient-to-r from-sky-500/75 to-teal-500/75">
        <div className="mx-auto w-full max-w-[1520px] px-6 py-16 lg:px-8 lg:py-20 2xl:px-0">
          <h1 className="font-inter text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-10 px-6 lg:px-8 xl:grid-cols-[minmax(0,986px)_minmax(320px,504px)] xl:gap-[30px] 2xl:px-0">
          <article id="article-content" className="min-w-0">
            <AnimatedDiv preset="scale">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              width={986}
              height={640}
              priority
              className="aspect-[986/640] w-full rounded-[20px] object-cover"
            />
            </AnimatedDiv>

            {hasBody && (
              <StaggerGroup stagger={0.06} className="mt-12 space-y-10">
                {sections?.map((section) => (
                  <StaggerItem key={section.title} preset="fade-up"><section id={sectionId(section.title)}>
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
                        {section.bullets.map((item) => <li key={item}>{item}</li>)}
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
                  </section></StaggerItem>
                ))}

                {content && <StaggerItem preset="fade-up">{content}</StaggerItem>}
              </StaggerGroup>
            )}
          </article>

          <AnimatedDiv preset="slide-right" className="self-start">
            <a
              href="#article-content"
              className="flex min-h-12 w-full items-center justify-center rounded-[60px] bg-primary-light px-7 py-2.5 text-center font-manrope text-sm font-medium leading-8 text-white"
            >
              {tableOfContentsLabel}
            </a>

            <div className="mt-5">
              <ConsultationCard {...consultation} />
            </div>

            <div className="mt-8">
              <AuthorCard {...author} />
            </div>
          </AnimatedDiv>
        </div>
      </AnimatedSection>
    </>
  );
}
