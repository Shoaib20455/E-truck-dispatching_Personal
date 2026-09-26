import AppLink from "./navigation/AppLink";
import { AnimatedSection } from "./animation/MotionElements";

type ArticleItem = {
  date: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

type CaseStudyArticlesProps = {
  heading: string;
  featuredArticle: ArticleItem;
  sideArticles: ArticleItem[];
};

export default function CaseStudyArticles({
  heading,
  featuredArticle,
  sideArticles,
}: CaseStudyArticlesProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50 py-14 lg:py-20">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-8 2xl:px-0">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="font-inter text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        {/* ARTICLES */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* FEATURED ARTICLE */}
          <article className="overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)]">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              className="aspect-[16/7] w-full object-cover"
            />

            <div className="p-6 md:p-8">
              <div className="mb-3 font-manrope text-sm font-normal text-neutral-500">
                ♧ {featuredArticle.date}
              </div>

              <h3 className="mb-5 font-inter text-2xl font-semibold leading-tight text-heading md:text-3xl">
                {featuredArticle.href ? (
                  <AppLink href={featuredArticle.href}>{featuredArticle.title}</AppLink>
                ) : (
                  featuredArticle.title
                )}
              </h3>

              <p className="font-manrope text-lg font-normal leading-8 text-neutral-500">
                {featuredArticle.description}
              </p>
            </div>
          </article>

          {/* SIDE ARTICLES */}
          <div className="space-y-8">
            {sideArticles.map((article) => (
              <article
                key={`${article.date}-${article.title}`}
                className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)] sm:grid-cols-[0.7fr_1.3fr]"
              >
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="h-full min-h-52 w-full object-cover"
                />

                <div className="p-6">
                  <div className="mb-3 font-manrope text-sm font-normal text-neutral-500">
                    ♧ {article.date}
                  </div>

                  <h3 className="mb-4 font-inter text-xl font-semibold leading-tight text-heading md:text-2xl">
                    {article.href ? (
                      <AppLink href={article.href}>{article.title}</AppLink>
                    ) : (
                      article.title
                    )}
                  </h3>

                  <p className="font-manrope text-base font-normal leading-7 text-neutral-500">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}