"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  /** Render dropdown in two columns (for long lists) */
  wideDropdown?: boolean;
}

const navLinks: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      { label: "Service Areas", href: "/service-areas" },
      { label: "History", href: "/history" },
      { label: "Awards", href: "/awards" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Roofing Services",
    href: "/roofing-services",
    wideDropdown: true,
    dropdown: [
      { label: "Residential Roofing", href: "/residential-roofing" },
      { label: "Slate and Tile Roofing", href: "/slate-tile-roofing" },
      { label: "Shingle Roofs", href: "/shingle-roofs-cape-coral" },
      { label: "Metal Roofing", href: "/metal-roofing" },
      { label: "Storm Damage Repair", href: "/storm-damage-repair" },
      { label: "Thermal Roof Inspections", href: "/thermal-roof-inspection" },
      { label: "Roof Replacement", href: "/roof-replacement" },
      { label: "Roof Repair", href: "/roof-repair" },
      { label: "Re-Roofing", href: "/reroofing" },
      { label: "Gutter Repair & Replacement", href: "/gutter-repair" },
      { label: "Emergency Roof Repair", href: "/emergency-roof-repair" },
      { label: "Roof Financing", href: "/financing" },
      { label: "Solar Panels", href: "/solar-panels" },
      { label: "Commercial Roofing", href: "/commercial-roofing" },
      { label: "TPO and PVC Roofing", href: "/commercial-tpo-pvc-roofing" },
      { label: "Flat Metal Roofing", href: "/commercial-flat-metal-roofing" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  {
    label: "How It Works",
    href: "/how-it-works",
    dropdown: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Insurance", href: "/insurance" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "rgb(19, 19, 19)" }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1320 }}>
        <div className="flex items-center justify-between" style={{ height: 98 }}>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo-1.svg"
              alt="Roof EZ - Florida Roofing Company"
              width={175}
              height={83}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-ethno text-white transition-colors uppercase"
                  style={{ fontSize: 15, letterSpacing: "0.02em" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FF7600")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="currentColor"
                      className="mt-0.5 shrink-0"
                    >
                      <path d="M0 0l5 6 5-6H0z" />
                    </svg>
                  )}
                </Link>

                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 py-2"
                    style={{
                      background: "rgb(19,19,19)",
                      border: "1px solid rgba(249,172,0,0.3)",
                      minWidth: link.wideDropdown ? 480 : 220,
                      zIndex: 100,
                    }}
                  >
                    {link.wideDropdown ? (
                      /* Two-column layout for long dropdowns */
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        {link.dropdown.map((item) => (
                          <DropdownItem key={item.label} item={item} />
                        ))}
                      </div>
                    ) : (
                      link.dropdown.map((item) => (
                        <DropdownItem key={item.label} item={item} />
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Us CTA */}
          <Link
            href="/contact-us"
            className="hidden md:inline-flex items-center justify-center font-visbyxb"
            style={{
              background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
              padding: "12px 28px",
              fontSize: 18,
              color: "#020202",
            }}
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="block py-3 text-white font-ethno text-sm uppercase hover:text-orange-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      className="text-white p-2"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.label ? null : link.label
                        )
                      }
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="currentColor"
                        style={{
                          transform:
                            mobileExpanded === link.label
                              ? "rotate(180deg)"
                              : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        <path d="M0 0l5 6 5-6H0z" />
                      </svg>
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div className="pl-4 pb-2 border-l border-white/10">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-white/70 font-visbydb text-sm hover:text-orange-400 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              className="mt-3 inline-flex items-center justify-center font-visbyxb"
              style={{
                background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
                padding: "10px 24px",
                color: "#020202",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function DropdownItem({ item }: { item: { label: string; href: string } }) {
  return (
    <Link
      href={item.href}
      className="block px-4 py-2 font-visbydb text-sm transition-colors"
      style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#FF7600";
        e.currentTarget.style.background = "rgba(255,118,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.85)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {item.label}
    </Link>
  );
}
