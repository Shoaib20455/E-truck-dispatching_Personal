import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Truck Types", "/truck_types"],
  ["Services", "/services"],
  ["States", "/states"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
] as const;

const services = [
  ["Accounting", "/accounting"],
  ["Dedicated Truck Dispatching", "/dedicated-truck-dispatching"],
  ["Document Management", "/document-management-revised"],
  ["Driver Recruiting", "/driver-recruiting"],
  ["Factoring", "/factoring"],
  ["Lease on Company", "/lease_on_company"],
  ["Load Booking", "/load_booking"],
  ["MC Setup", "/mc_setup"],
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 3H11c-2.2 0-3.5 1.5-3.5 3.8V9H5v3h2.5v7H11v-7h2.5l.5-3H11V7c0-.7.3-1 1-1h1.5V3Z",
  },
  {
    label: "X",
    href: "#",
    path: "M4 3h3.6l3.1 4.3L14.4 3H17l-5.1 6.2L18 18h-3.6l-3.7-5.2L6.3 18H3.7l5.8-7.1L4 3Zm2 2 9.4 11h.6L6.7 5H6Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4 8h3v10H4V8Zm1.5-5A1.7 1.7 0 1 1 5.5 6.4 1.7 1.7 0 0 1 5.5 3ZM9 8h3v1.4c.8-1.1 1.8-1.7 3.2-1.7 2.5 0 3.8 1.6 3.8 4.7V18h-3v-5c0-1.6-.5-2.5-1.8-2.5-1.4 0-2.2 1-2.2 2.8V18H9V8Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 3h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm3.5 2.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM15 6.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z",
  },
] as const;

function Logo() {
  return (
    <Link
      href="/"
      aria-label="E Truck Dispatching home"
      className="inline-flex items-center gap-2 text-white"
    >
      <Image
        src="/Logo.png"
        alt="E Truck Dispatching logo"
        width={70}
        height={50}
        className="h-8 w-auto shrink-0"
      />

      <Image
        src="/Dispatching.png"
        alt="DISPATCHING"
        width={250}
        height={50}
        className="h-4 w-auto shrink-0"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer dir="ltr" className="overflow-x-hidden bg-[#161616] text-[#d6d6d6]">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1440px] grid-cols-1 gap-9 pb-10 pt-8 text-left sm:w-[calc(100%-64px)] md:grid-cols-2 lg:grid-cols-[1.55fr_.75fr_1.25fr_1.1fr] lg:gap-16 lg:pb-4 lg:pt-[29px]">
        {/* Company information */}
        <div className="min-w-[230px]">
          <Logo />

          <p className="mt-3.5 max-w-[260px] text-base leading-7 text-[#d1d1d1] sm:text-lg lg:max-w-[218px]">
            MNA Transport offers reliable and profit-driven truck dispatching
            services across the United States. We help owner-operators and
            fleets secure high-paying loads, reduce deadhead miles, and
            streamline operations for maximum efficiency.
          </p>

          <nav
            aria-label="MNA Transport social media"
            className="mt-3.5"
          >
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`${social.label} profile`}
                    className="grid h-7 w-7 shrink-0 place-items-center bg-[#1b1b1b] text-[#d75509] transition-colors hover:bg-[#d75509] hover:text-white lg:h-6 lg:w-6"
                  >
                    <svg
                      viewBox="0 0 21 21"
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-current"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer navigation */}
        <FooterLinks
          title="Quick Links"
          titleId="footer-quick-links-title"
          links={quickLinks}
        />

        <FooterLinks
          title="Our Services"
          titleId="footer-services-title"
          links={services}
        />

        {/* Contact information */}
        <section
          aria-labelledby="footer-contact-title"
          className="min-w-0"
        >
          <p
            id="footer-contact-title"
            className="mb-3 text-base font-bold leading-7 text-[#df5708] sm:text-lg"
          >
            Get In Touch
          </p>

          <address className="text-base leading-7 text-[#e0e0e0] not-italic sm:text-lg">
            <div className="min-w-0">
              <ContactLabel icon="phone" text="Phone" />

              <a
                className="block break-words transition-colors hover:text-[#df5708]"
                href="tel:+12164005753"
              >
                +1 (216) 400–5753
              </a>

              <a
                className="block break-words transition-colors hover:text-[#df5708]"
                href="tel:+14432514244"
              >
                +1 (443) 251–4244
              </a>
            </div>

            <div className="min-w-0">
              <ContactLabel icon="email" text="Email" />

              <a
                className="block break-words transition-colors hover:text-[#df5708]"
                href="mailto:dispatch@mnatransport.com"
              >
                dispatch@mnatransport.com
              </a>
            </div>

            <div className="min-w-0">
              <ContactLabel icon="pin" text="Location" />

              <p className="max-w-[220px] break-words lg:max-w-[150px]">
                521 Valcour Rd, Catonsville,
                <br />
                MD 21228
              </p>
            </div>
          </address>
        </section>
      </div>

      {/* Copyright and legal links */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-[50px] w-[calc(100%-40px)] max-w-[1440px] flex-col items-start justify-between gap-4 py-4 text-left text-base leading-7 sm:w-[calc(100%-64px)] sm:text-lg md:flex-row md:items-center">
          <p className="max-w-full break-words">
            © 2026 MNA Transport. Designed &amp; Developed by{" "}
            <span className="font-bold text-white">BitBlazeTec</span>
          </p>

          <nav aria-label="Legal information">
            <ul className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 md:justify-end">
              <li>
                <Link
                  href="/privacy-policy"
                  className="whitespace-nowrap transition-colors hover:text-[#df5708]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="whitespace-nowrap transition-colors hover:text-[#df5708]"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="whitespace-nowrap transition-colors hover:text-[#df5708]"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  titleId,
  links,
}: {
  title: string;
  titleId: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <nav aria-labelledby={titleId} className="min-w-0">
      <p
        id={titleId}
        className="mb-3 text-base font-bold leading-7 text-[#df5708] sm:text-lg"
      >
        {title}
      </p>

      <ul className="text-base leading-7 sm:text-lg">
        {links.map(([label, href]) => (
          <li key={label} className="min-w-0">
            <Link
              href={href}
              className="break-words transition-colors hover:text-[#df5708]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactLabel({
  icon,
  text,
}: {
  icon: "phone" | "email" | "pin";
  text: string;
}) {
  const paths = {
    phone:
      "M5 2 2 4c0 7 5 12 12 12l2-3-4-2-1 2c-3-1-5-3-6-6l2-1-2-4Z",
    email: "M2 4h14v10H2V4Zm1 1 6 5 6-5",
    pin:
      "M9 17s6-6 6-10A6 6 0 0 0 3 7c0 4 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  };

  return (
    <span className="mb-0.5 flex items-center gap-1 text-base leading-7 text-white sm:text-lg">
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="h-3 w-3 shrink-0 fill-none stroke-[#df5708] stroke-[1.2]"
      >
        <path d={paths[icon]} />
      </svg>

      {text}
    </span>
  );
}
