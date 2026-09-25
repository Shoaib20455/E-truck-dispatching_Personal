"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Credentials & Enrollment",
    href: "/credentials-and-enrollment",
  },
  {
    label: "Medical Billing Analysis",
    href: "/medical-billing-analysis",
  },
  {
    label: "RCM Services",
    href: "/rcm-services-location",
  },
  {
    label: "RCM",
    href: "/rcm",
  },
  {
    label: "Denial Management",
    href: "/denial-management",
  },
  {
    label: "Medical Billing",
    href: "/medical-billing",
  },
  {
    label: "Small Practices",
    href: "/small-practices",
  },
  {
    label: "AR Follow-Up",
    href: "/ar-followup",
  },
   {
    label: "Medical Coding",
    href: "/medical-coding",
  },
   {
    label: "State Licensing",
    href: "/state-licensing",
  },
    {
    label: "EHR/EMR Partners",
    href: "/ehr-emr-support",
  },
   {
    label: "Services Location",
    href: "/services-location",
  },
  {
    label: "Speciality Listing",
    href: "/speciality-listing",
  },
  {
    label: "Speciality Detail",
    href: "/speciality-detail",
  },
  {
    label: "Speciality State",
    href: "/speciality-state",
  },
   {
    label: "Speciality City Location",
    href: "/speciality-city-location",
  },
   {
    label: "Speciality Country Location",
    href: "/speciality-country-location",
  },
   {
    label: "State We Serve",
    href: "/state-we-serve",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  const closeNavigation = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (headerRef.current && !headerRef.current.contains(target)) {
        closeNavigation();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative z-[999] w-full">
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}
      <div className="w-full bg-zinc-700">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1520px]
            items-center
            justify-between
            gap-6
            px-5
            py-1
          "
        >
          {/* Tagline */}
          <p
            className="
              font-['Manrope']
              text-sm
              font-bold
              leading-8
              text-white
              lg:text-base
            "
          >
            We Handle the Billing. You Handle the Healing
          </p>

          {/* Desktop Contact Information */}
          <div
            className="
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-8
            "
          >
            {/* Phone */}
            <a
              href="tel:+17377872147"
              className="
                flex
                items-center
                gap-2
                font-['Manrope']
                text-xs
                font-normal
                leading-8
                text-white
                transition-colors
                duration-200
                hover:text-sky-400
              "
            >
              <PhoneIcon />

              <span>(737) 787 2147</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@imedclaims.com"
              className="
                flex
                items-center
                gap-2
                font-['Manrope']
                text-xs
                font-normal
                leading-8
                text-white
                transition-colors
                duration-200
                hover:text-sky-400
              "
            >
              <MailIcon />

              <span>info@imedclaims.com</span>
            </a>

            {/* Address */}
            <div
              className="
                flex
                items-center
                gap-2
                font-['Manrope']
                text-xs
                font-normal
                leading-8
                text-white
              "
            >
              <LocationIcon />

              <span>4309 Schubert, Colleyville Texas, TX 76034</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div
        className="
          w-full
          bg-white
          shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[1520px]
            items-center
            justify-between
            gap-8
            px-5
            py-[15px]
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            href="/"
            aria-label="Avenue Billing Services home"
            onClick={closeNavigation}
            className="
              group
              flex
              shrink-0
              items-center
            "
          >
            <Image
              src="/Home/1_rectangle_40.png"
              alt="Avenue Billing Services"
              width={170}
              height={50}
              className="
                h-[50px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
              priority
            />
          </Link>

          {/* =================================================
              NAVIGATION
          ================================================== */}
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`
              absolute
              left-5
              right-5
              top-[calc(100%+12px)]
              z-[1000]
              origin-top
              overflow-hidden
              rounded-xl
              border
              border-neutral-200
              bg-white
              shadow-[0px_15px_45px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              ease-out

              ${
                isMenuOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-3 scale-[0.98] opacity-0"
              }

              xl:pointer-events-auto
              xl:static
              xl:block
              xl:w-auto
              xl:translate-y-0
              xl:scale-100
              xl:overflow-visible
              xl:rounded-none
              xl:border-0
              xl:bg-transparent
              xl:opacity-100
              xl:shadow-none
            `}
          >
            <ul
              className="
                flex
                flex-col
                p-3

                xl:flex-row
                xl:items-center
                xl:gap-7
                xl:p-0

                2xl:gap-9
              "
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeNavigation}
                    className="
                      block
                      whitespace-nowrap
                      rounded-lg
                      px-4
                      py-3
                      font-['Inter']
                      text-base
                      font-semibold
                      leading-8
                      text-zinc-700
                      transition-colors
                      duration-200
                      hover:bg-sky-50
                      hover:text-sky-500

                      xl:px-0
                      xl:py-0
                      xl:hover:bg-transparent
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setIsMenuOpen((current) => !current);
            }}
            className="
              flex
              size-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-neutral-200
              bg-white
              text-zinc-700
              transition-colors
              duration-200
              hover:border-sky-500
              hover:text-sky-500

              xl:hidden
            "
          >
            <span className="relative block h-5 w-6">
              <span
                className={`
                  absolute
                  left-0
                  top-0
                  h-0.5
                  w-6
                  bg-current
                  transition-all
                  duration-300

                  ${isMenuOpen ? "translate-y-2 rotate-45" : ""}
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-2
                  h-0.5
                  w-6
                  bg-current
                  transition-all
                  duration-200

                  ${isMenuOpen ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-4
                  h-0.5
                  w-6
                  bg-current
                  transition-all
                  duration-300

                  ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}
                `}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   ICONS
========================================================= */

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 shrink-0 text-sky-500"
    >
      <path
        d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 shrink-0 text-sky-500"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 shrink-0 text-sky-500"
    >
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
