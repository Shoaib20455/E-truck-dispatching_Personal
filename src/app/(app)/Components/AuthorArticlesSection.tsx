import { AnimatedHeading, AnimatedSection, StaggerGroup, StaggerArticle } from "./animation/MotionElements";

import Image from "next/image";

export type AuthorArticleItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

type AuthorArticlesSectionProps = {
  heading: string;
  articles: AuthorArticleItem[];
};

export default function AuthorArticlesSection({
  heading,
  articles,
}: AuthorArticlesSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 pb-20 pt-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        <AnimatedHeading
          text={heading}
          className="text-center font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
        />

        <StaggerGroup stagger={0.08} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <StaggerArticle
              key={article.title + index}
              preset="card"
              hover="premium"
              className="overflow-hidden rounded-[30px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
            >
              {article.href ? (
                <a href={article.href} className="block overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={486}
                    height={278}
                    className="aspect-[486/278] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>
              ) : (
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={486}
                  height={278}
                  className="aspect-[486/278] w-full object-cover"
                />
              )}

              <div className="px-7 py-6">
                <h3 className="font-inter text-2xl font-semibold leading-8 text-heading md:text-3xl">
                  {article.href ? (
                    <a
                      href={article.href}
                      className="transition-colors hover:text-primary-light"
                    >
                      {article.title}
                    </a>
                  ) : (
                    article.title
                  )}
                </h3>

                <p className="mt-4 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
                  {article.description}
                </p>
              </div>
            </StaggerArticle>
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  );
}
