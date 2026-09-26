import { AnimatedSection } from "./animation/MotionElements";

import Image from "next/image";

export type AuthorSocialLink = {
  label: string;
  mark: string;
  href: string;
};

export type AuthorCardProps = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  published: string;
  updated: string;
  publishedLabel: string;
  updatedLabel: string;
  socialLinks: AuthorSocialLink[];
};

export default function AuthorCard({
  name,
  role,
  image,
  imageAlt,
  published,
  updated,
  publishedLabel,
  updatedLabel,
  socialLinks,
}: AuthorCardProps) {
  return (
    <AnimatedSection preset="fade-up" className="rounded-[20px] bg-accent/10 p-7">
      <div className="flex items-center gap-5">
        <Image
          src={image}
          alt={imageAlt}
          width={70}
          height={70}
          className="size-[70px] rounded-full object-cover"
        />

        <div>
          <h2 className="font-inter text-2xl font-semibold leading-8 text-neutral-600 md:text-3xl">
            {name}
          </h2>
          <p className="mt-1 font-manrope text-xs font-medium leading-8 text-neutral-600">
            {role}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-1 font-manrope text-xs font-medium leading-6 text-neutral-500">
        <p>{publishedLabel}: {published}</p>
        <p>{updatedLabel}: {updated}</p>
      </div>

      <div className="mt-5 flex min-h-9 max-w-72 items-center justify-center gap-5 rounded-[10px] bg-primary-light px-4 text-white">
        {socialLinks.map((item) => (
          <a key={item.label} href={item.href} aria-label={item.label} className="text-xs font-bold">
            {item.mark}
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
}
