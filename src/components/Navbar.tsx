"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "About Us",
    href: "/about-us/",
    dropdown: [
      { label: "About Us", href: "/about-us/" },
      { label: "Awards", href: "/awards/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
  {
    label: "Roofing Services",
    href: "/roofing-services/",
    dropdown: [
      { label: "Roof Repair", href: "/roof-repair/" },
      { label: "Re-Roofing", href: "/reroofing/" },
      { label: "New Construction", href: "/new-construction-roofing/" },
      { label: "Solar In Florida", href: "/solar-roofing/" },
      { label: "Storm Damage Repair", href: "/storm-damage-repair/" },
    ],
  },
  { label: "Reviews", href: "/reviews/" },
  {
    label: "How It Works",
    href: "/how-it-works/",
    dropdown: [
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Insurance", href: "/insurance/" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-ethno text-white hover:text-orange-400 transition-colors text-sm tracking-wide uppercase"
                  style={{ fontSize: 15, letterSpacing: "0.02em" }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className="mt-0.5">
                      <path d="M0 0l5 6 5-6H0z" />
                    </svg>
                  )}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 min-w-48 py-2"
                    style={{ background: "rgb(19,19,19)", border: "1px solid rgba(249,172,0,0.3)" }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-white hover:text-orange-400 font-visbydb text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Us CTA */}
          <Link
            href="/contact-us/"
            className="hidden md:inline-flex items-center justify-center font-visbyxb text-black"
            style={{
              background: "linear-gradient(90deg, #F9AC00 0%, #FF7600 91%)",
              padding: "12px 28px",
              fontSize: 18,
              fontFamily: "VisbyCFExtraBold, sans-serif",
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
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-white font-ethno text-sm uppercase hover:text-orange-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us/"
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
