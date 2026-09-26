import { AnimatedDiv, AnimatedHeading, AnimatedSection, HoverIcon, StaggerGroup, StaggerItem } from "./animation/MotionElements";

import Image from "next/image";

export type AuthorStat = {
  label: string;
  value: string;
};

export type AuthorSocial = {
  label: string;
  mark: string;
  href: string;
};

type AuthorProfileSectionProps = {
  portrait: string;
  portraitAlt: string;
  eyebrow: string;
  name: string;
  shortBio: string;
  aboutHeading: string;
  aboutText: string;
  stats: AuthorStat[];
  socialLinks: AuthorSocial[];
};

export default function AuthorProfileSection({
  portrait,
  portraitAlt,
  eyebrow,
  name,
  shortBio,
  aboutHeading,
  aboutText,
  stats,
  socialLinks,
}: AuthorProfileSectionProps) {
  return (
    <AnimatedSection preset="fade-up" className="w-full bg-cyan-50">
      <div className="relative bg-gradient-to-r from-sky-500/70 to-teal-500/70">
        <div className="mx-auto min-h-[245px] w-full max-w-[1520px] px-6 lg:px-8 2xl:px-0">
          <div className="relative flex min-h-[245px] items-end pb-0">
            <AnimatedDiv preset="hero-left" className="absolute -bottom-[72px] left-0 size-[220px] sm:size-[250px] lg:size-[280px]">
              <Image
                src={portrait}
                alt={portraitAlt}
                width={280}
                height={280}
                priority
                className="size-full rounded-full object-cover"
              />
            </AnimatedDiv>

            <div className="ml-auto w-full max-w-[1197px] translate-y-[42px] rounded-[20px] bg-white px-6 py-5 shadow-[0px_10px_20px_rgba(0,0,0,0.10)] md:px-8">
              <StaggerGroup stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
                {stats.map((stat, index) => (
                  <StaggerItem key={stat.label} preset="stat" className={
                      "px-4 py-3 " +
                      (index > 0 ? "xl:border-l xl:border-neutral-300" : "")
                    }
                  >
                    <div className="font-inter text-lg font-semibold leading-8 text-sky-500 md:text-xl">
                      {stat.label}
                    </div>
                    <div className="mt-3 whitespace-pre-line font-manrope text-sm font-bold leading-6 text-heading md:text-base">
                      {stat.value}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-12 px-6 pb-16 pt-32 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-24 lg:px-8 lg:pt-40 2xl:px-0">
        <AnimatedDiv preset="slide-left">
          <div className="font-inter text-sm font-black uppercase tracking-[0.2em] text-heading md:text-base">
            {eyebrow}
          </div>

          <AnimatedHeading
            text={name}
            level={1}
            className="mt-4 font-inter text-5xl font-semibold leading-tight text-sky-500 md:text-6xl"
          />

          <p className="mt-8 max-w-[520px] font-manrope text-base font-medium leading-8 text-neutral-500 md:text-lg">
            {shortBio}
          </p>

          <StaggerGroup stagger={0.06} className="mt-8 flex flex-wrap gap-6">
            {socialLinks.map((social) => (
              <StaggerItem key={social.label} preset="logo" hover="soft">
              <a
                href={social.href}
                aria-label={social.label}
                className="flex size-12 items-center justify-center rounded-md bg-teal-500 font-inter text-xl font-bold text-white"
              >
                {social.mark}
              </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </AnimatedDiv>

        <AnimatedDiv preset="slide-right">
          <AnimatedHeading text={aboutHeading}
            className="font-inter text-4xl font-semibold leading-tight text-heading md:text-5xl"
          />

          <p className="mt-6 font-manrope text-base font-normal leading-8 text-neutral-500 md:text-lg">
            {aboutText}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
