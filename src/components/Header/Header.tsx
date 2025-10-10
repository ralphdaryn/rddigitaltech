"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../Container/Container";

type NavItem = { href: string; label: string };

const NAV: ReadonlyArray<NavItem> = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    const html = document.documentElement;
    if (open) html.classList.add("overflow-hidden");
    else html.classList.remove("overflow-hidden");
    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="hdr sticky top-0 z-50 border-b border-black/10 bg-white">
      {/* top bar */}
      <Container className="hdr__inner flex items-center justify-between py-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="hdr__brand font-semibold tracking-wide"
        >
          RD DIGITECH
        </Link>

        {/* hamburger (mobile only) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="hdr__toggle relative inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          <span
            className={[
              "hdr__burger absolute block h-0.5 w-6 bg-black transition-all duration-200",
              open ? "rotate-45" : "-translate-y-2",
            ].join(" ")}
          />
          <span
            className={[
              "hdr__burger absolute block h-0.5 w-6 bg-black transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "hdr__burger absolute block h-0.5 w-6 bg-black transition-all duration-200",
              open ? "-rotate-45" : "translate-y-2",
            ].join(" ")}
          />
        </button>

        {/* desktop nav */}
        <nav className="hdr__nav hidden md:block" aria-label="Primary">
          <ul className="hdr__list flex items-center gap-3">
            {NAV.map(({ href, label }) => (
              <li key={href} className="hdr__item">
                <Link
                  href={href}
                  className="hdr__link rounded-lg px-3 py-2 hover:bg-black/5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* MOBILE OVERLAY MENU (fixed, not in normal flow) */}
      <nav
        id="site-nav"
        aria-label="Mobile"
        className={[
          "md:hidden fixed inset-x-0 top-14 z-40", // 14 = 56px ≈ header height
          "border-t border-black/10 bg-white/95 backdrop-blur",
          "transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <Container className="py-3">
          <ul className="hdr__list grid gap-1">
            {NAV.map(({ href, label }) => (
              <li key={href} className="hdr__item">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="hdr__link block rounded-lg px-3 py-2 hover:bg-black/5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}