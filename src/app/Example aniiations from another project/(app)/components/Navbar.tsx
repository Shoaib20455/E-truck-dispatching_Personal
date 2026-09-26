"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLinkItem = {
  label: string;
  href: string;
};

type DropdownId = "truck-types" | "services" | "states";

type NavItem = {
  label: string;
  href?: string;
  dropdownId?: DropdownId;
  children?: NavLinkItem[];
};

const truckTypeItems: NavLinkItem[] = [
  {
    label: "Flatbed",
    href: "/flatbed_dispatch_services",
  },
  {
    label: "Step Deck",
    href: "/step_deck_dispatch",
  },
  {
    label: "Reefer Dispatch",
    href: "/refer_dispatch_service",
  },
  {
    label: "Hotshot",
    href: "/hotshot_truck_dispatch_service",
  },
  {
    label: "Power Only",
    href: "/power_only_dispatch_service",
  },
  {
    label: "Dry Van",
    href: "/dry-van-dispatch",
  },
];

const serviceItems: NavLinkItem[] = [
  {
    label: "Accounting",
    href: "/accounting",
  },
  {
    label: "Dedicated Truck Dispatching",
    href: "/dedicated-truck-dispatching",
  },
  {
    label: "Document Management",
    href: "/document-management-revised",
  },
  {
    label: "Driver Recruiting",
    href: "/driver-recruiting",
  },
  {
    label: "Factoring",
    href: "/factoring",
  },
  {
    label: "Lease on Company",
    href: "/lease_on_company",
  },
  {
    label: "Load Booking",
    href: "/load_booking",
  },
  {
    label: "MC Setup",
    href: "/mc_setup",
  },
];

const stateItems: NavLinkItem[] = [
  {
    label: "California",
    href: "/california",
  },
];

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Truck Types",
    href: "/truck_types",
    dropdownId: "truck-types",
    children: truckTypeItems,
  },
  {
    label: "Services",
    href: "/services",
    dropdownId: "services",
    children: serviceItems,
  },
  {
    label: "States",
    href: "/states",
    dropdownId: "states",
    children: stateItems,
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DropdownId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  const closeNavigation = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownId: DropdownId) => {
    setOpenDropdown((current) =>
      current === dropdownId ? null : dropdownId,
    );
  };

  // Make the navbar fixed after scrolling 30px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the navbar and dropdowns on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        closeNavigation();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`inset-x-0 z-[999] w-full bg-white/5 text-white backdrop-blur-lg ${
        isScrolled
          ? "fixed top-0"
          : "absolute top-[30px]"
      }`}
    >
      <div className="relative mx-auto grid h-20 w-full max-w-[1560px] grid-cols-[auto_1fr_auto] items-center px-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="E Truck Dispatching home"
          onClick={closeNavigation}
          className="group z-10 flex min-w-0 shrink-0 items-center gap-2"
        >
          <Image
            src="/Logo.png"
            alt="E Truck Dispatching logo"
            width={70}
            height={50}
            className="h-[32px] w-auto shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[40px]"
            priority
          />

          <Image
            src="/Dispatching.png"
            alt="DISPATCHING"
            width={250}
            height={50}
            className="h-[16px] w-auto shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-[22px]"
            priority
          />
        </Link>

        {/* Main Navigation */}
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          data-lenis-prevent
          className={`absolute left-5 right-5 top-[92px] z-[1000] origin-top overflow-y-auto rounded-xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-[calc(100vh-150px)] translate-y-0 scale-100 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 scale-[0.98] opacity-0"
          } xl:pointer-events-auto xl:absolute xl:left-1/2 xl:right-auto xl:top-1/2 xl:block xl:max-h-none xl:w-auto xl:-translate-x-1/2 xl:-translate-y-1/2 xl:scale-100 xl:overflow-visible xl:rounded-none xl:border-0 xl:bg-transparent xl:opacity-100 xl:shadow-none xl:backdrop-blur-none`}
        >
          <ul className="flex flex-col gap-1 p-4 xl:flex-row xl:items-center xl:gap-8 xl:p-0 2xl:gap-[44px]">
            {navItems.map((item, index) => {
              if (
                item.href &&
                item.dropdownId &&
                item.children?.length
              ) {
                const dropdownId = item.dropdownId;
                const isDropdownOpen =
                  openDropdown === dropdownId;

                return (
                  <DropdownNavItem
                    key={dropdownId}
                    label={item.label}
                    href={item.href}
                    dropdownId={dropdownId}
                    items={item.children}
                    isOpen={isDropdownOpen}
                    onOpen={() => {
                      setOpenDropdown(dropdownId);
                    }}
                    onClose={() => {
                      setOpenDropdown(null);
                    }}
                    onToggle={() => {
                      toggleDropdown(dropdownId);
                    }}
                    onNavigate={closeNavigation}
                  />
                );
              }

              if (!item.href) {
                return null;
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeNavigation}
                    className={`block whitespace-nowrap rounded-lg px-4 py-3 font-['Outfit'] text-base font-bold leading-none transition-all duration-200 ease-out hover:translate-x-1 hover:bg-white/5 hover:text-[#b45309] xl:px-0 xl:py-0 xl:hover:translate-x-0 xl:hover:bg-transparent ${
                      index === 0
                        ? "text-[#b45309]"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Get A Load */}
            <li className="pt-3 xl:hidden">
              <Link
                href="/get-a-load"
                onClick={closeNavigation}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-[#b45309] px-5 font-['Outfit'] text-base font-medium text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408]"
              >
                Get A Load
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA and Hamburger */}
        <div className="z-10 col-start-3 flex justify-end">
          {/* Desktop CTA */}
          <Link
            href="/get-a-load"
            onClick={closeNavigation}
            className="hidden h-11 shrink-0 items-center justify-center bg-[#b45309] px-5 font-['Outfit'] text-lg font-medium capitalize leading-none text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d95408] xl:inline-flex"
          >
            Get A Load
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setIsMenuOpen((current) => !current);

              if (isMenuOpen) {
                setOpenDropdown(null);
              }
            }}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 bg-black/20 transition-all duration-300 ease-out hover:bg-white/10 xl:hidden ${
              isMenuOpen ? "bg-white/10" : ""
            }`}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-all duration-200 ease-out ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

type DropdownNavItemProps = {
  label: string;
  href: string;
  dropdownId: DropdownId;
  items: NavLinkItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onNavigate: () => void;
};

function DropdownNavItem({
  label,
  href,
  dropdownId,
  items,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  onNavigate,
}: DropdownNavItemProps) {
  const dropdownElementId =
    `${dropdownId}-dropdown`;

  return (
    <li
      className="relative w-full xl:w-auto"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(event) => {
        const nextElement =
          event.relatedTarget as Node | null;

        if (
          !event.currentTarget.contains(nextElement)
        ) {
          onClose();
        }
      }}
    >
      {/* Parent page link and dropdown arrow */}
      <div className="group/dropdown flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-['Outfit'] text-base font-bold leading-none transition-all duration-200 ease-out hover:bg-white/5 xl:w-auto xl:justify-center xl:gap-2 xl:whitespace-nowrap xl:px-0 xl:py-0 xl:hover:bg-transparent">
        <Link
          href={href}
          onClick={onNavigate}
          className="text-white transition-colors duration-200 group-hover/dropdown:text-[#b45309]"
        >
          {label}
        </Link>

        <button
          type="button"
          aria-label={`Toggle ${label} dropdown`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={dropdownElementId}
          onClick={onToggle}
          className="ml-3 flex shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent text-white transition-colors duration-200 group-hover/dropdown:text-[#b45309] xl:ml-0"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        } xl:absolute xl:left-0 xl:top-full xl:z-[1001] xl:block xl:pt-3 ${
          isOpen
            ? "xl:visible xl:pointer-events-auto xl:translate-y-0 xl:opacity-100"
            : "xl:invisible xl:pointer-events-none xl:-translate-y-2 xl:opacity-0"
        }`}
      >
        <div className="overflow-hidden xl:overflow-visible">
          <ul
            id={dropdownElementId}
            role="menu"
            className={`ml-4 mt-1 space-y-1 border-l border-white/15 bg-[#1b1b1b]/95 pb-2 pl-3 xl:ml-0 xl:mt-0 xl:space-y-0 xl:overflow-hidden xl:rounded-xl xl:border xl:border-white/10 xl:bg-[#1b1b1b] xl:p-2 xl:shadow-[0_1.25rem_3.75rem_rgba(0,0,0,0.45)] ${
              dropdownId === "services"
                ? "xl:w-[20rem]"
                : "xl:w-[17rem]"
            }`}
          >
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={onNavigate}
                  className="block rounded-lg px-4 py-3 font-['Outfit'] text-[0.9375rem] font-medium leading-tight text-white/85 transition-all duration-200 ease-out hover:translate-x-1 hover:bg-[#2a2a2a] hover:text-[#b45309] focus:bg-[#2a2a2a] focus:text-[#b45309] focus:outline-none xl:px-5 xl:py-3.5 xl:text-[1.0625rem]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}