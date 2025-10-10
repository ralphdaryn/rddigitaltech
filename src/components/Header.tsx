"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../components/Container";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (open) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }

    // cleanup if component unmounts while menu is open
    return () => html.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="hdr sticky top-0 z-50 border-b border-black/10 bg-white">
      <Container className="flex items-center justify-between py-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-semibold tracking-wide"
        >
          RD DIGITAL TECH
        </Link>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-nav"
        >
          <span
            className={[
              "absolute block h-0.5 w-6 bg-black transition-all duration-200",
              open ? "rotate-45" : "-translate-y-2",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-0.5 w-6 bg-black transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute block h-0.5 w-6 bg-black transition-all duration-200",
              open ? "-rotate-45" : "translate-y-2",
            ].join(" ")}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-3">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-lg px-3 py-2 hover:bg-black/5"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Mobile overlay */}
      <nav
        id="site-nav"
        aria-label="Mobile"
        className={[
          "md:hidden fixed inset-x-0 top-14 z-40",
          "border-t border-black/10 bg-white/95 backdrop-blur",
          "transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <Container className="py-3">
          <ul className="grid gap-1">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-black/5"
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
