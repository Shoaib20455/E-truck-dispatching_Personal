import Image from "next/image";
import Link from "next/link";

const specialties = [
  { label: "Cardiology", href: "/specialties/cardiology" },
  { label: "Endocrinology", href: "/specialties/endocrinology" },
  { label: "Ophthalmology", href: "/specialties/ophthalmology" },
  { label: "Neurology", href: "/specialties/neurology" },
  { label: "Orthopedics", href: "/specialties/orthopedics" },
];

const services = [
  { label: "Medical Billing", href: "/services/medical-billing" },
  {
    label: "Medical Drug & Rehabilitation Billing",
    href: "/services/drug-rehabilitation-billing",
  },
  { label: "Medical Scribing", href: "/services/medical-scribing" },
  {
    label: "Medical Credentialing",
    href: "/services/medical-credentialing",
  },
  {
    label: "AR & Denial Management",
    href: "/services/ar-denial-management",
  },
];

const quickLinks = [
  { label: "States We Serve", href: "/states" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "FAQs", href: "/faqs" },
];

const news = [
  {
    title: "Outsourcing NEMT Billing vs. In-House: Which Option Saves You More?",
    date: "October 20, 2025",
    href: "#",
  },
  {
    title:
      "Top NEMT Claim Denial Reasons and Proven Strategies to Maximize Reimbursements",
    date: "October 27, 2025",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-accent/10">
      <div className="mx-auto w-full max-w-[1520px] px-6 py-12 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[287px_1fr_1.35fr_1fr] lg:gap-20">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/Home/1_rectangle_40.png"
                alt="Avenue Billing Services"
                width={207}
                height={60}
                className="h-auto w-52"
              />
            </Link>

            <div className="mt-4 w-full rounded-[10px] bg-primary-light px-6 py-4">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 h-6 w-5 shrink-0 rounded-md border border-white"
                />

                <address className="not-italic font-manrope text-sm font-normal leading-5 text-white">
                  4309 Schubert, Colleyville Texas, TX 76034
                </address>
              </div>

              <div className="mt-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="size-4 shrink-0 rounded-full border border-white"
                />

                <a
                  href="tel:+17377872147"
                  className="font-manrope text-sm font-normal leading-6 text-white"
                >
                  (737) 787 2147
                </a>
              </div>
            </div>

            <div className="mt-3 flex w-full items-center justify-between rounded-[10px] bg-primary-light px-6 py-2">
              <a
                href="#"
                aria-label="Facebook"
                className="size-6 bg-white"
              />
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-6 bg-white"
              />
              <a
                href="#"
                aria-label="Instagram"
                className="size-6 bg-white"
              />
              <a
                href="#"
                aria-label="X"
                className="size-6 bg-white"
              />
              <a
                href="#"
                aria-label="YouTube"
                className="h-4 w-6 bg-white"
              />
            </div>
          </div>

          <FooterLinks title="Specialties" links={specialties} />
          <FooterLinks title="Services" links={services} />
          <FooterLinks title="Quick link" links={quickLinks} />
        </div>

        <div className="my-8 h-0.5 w-full bg-neutral-500/25" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[287px_320px_320px_330px] lg:justify-between">
          <div>
            <h2 className="font-inter text-lg font-semibold leading-6 text-heading">
              Subscribe To Review And Update
            </h2>

            <form className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="min-h-12 w-full rounded-[10px] border border-neutral-500 bg-bg-blue px-5 font-manrope text-lg font-normal leading-6 text-text outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="min-h-12 w-full rounded-[10px] border border-neutral-500 bg-bg-blue px-5 font-manrope text-lg font-normal leading-6 text-text outline-none"
              />

              <button
                type="submit"
                className="min-h-12 w-full rounded-[10px] border border-neutral-500 bg-primary-light font-manrope text-base font-normal leading-8 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-inter text-lg font-semibold leading-6 text-heading">
              News & Events
            </h2>

            <div className="mt-6 space-y-4">
              {news.map((item) => (
                <article key={item.title}>
                  <Link
                    href={item.href}
                    className="font-manrope text-base font-normal leading-6 text-text"
                  >
                    {item.title}
                  </Link>

                  <div className="mt-2 font-manrope text-xs font-normal leading-6 text-text">
                    {item.date}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="font-inter text-4xl font-semibold leading-[1.45] text-heading lg:text-5xl">
              Our claim acceptance rate is
            </div>

            <div className="mt-2 font-inter text-6xl font-semibold leading-none text-heading lg:text-7xl">
              99%
            </div>
          </div>

          <div>
            <Image
              src="/footer/map.webp"
              alt="Avenue Billing Services location map"
              width={330}
              height={215}
              className="h-auto w-full rounded-[10px]"
            />
          </div>
        </div>

        <div className="mt-10 h-0.5 w-full bg-neutral-500/25" />

        <div className="py-7 text-center font-manrope text-lg font-normal leading-6 text-text">
          © 2025 I-Medical Billing. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-inter text-lg font-semibold leading-6 text-heading">
        {title}
      </h2>

      <nav className="mt-3 flex flex-col gap-2" aria-label={title}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-manrope text-base font-normal leading-8 text-text transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}