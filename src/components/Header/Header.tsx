"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rd-border)] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex items-center justify-between h-16">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="fw-bold tracking-wide"
        >
          RD DIGITECH
        </Link>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="site-nav"
        >
          <span
            className={`absolute block h-0.5 w-6 bg-black transition-all ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-black transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 bg-black transition-all ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2">
            {NAV.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              const isQuote = href === "/quote";

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-lg px-3 py-2 fw-regular ${
                      isQuote
                        ? "btn btn-primary"
                        : isActive
                        ? "bg-black/5"
                        : "hover:bg-black/5"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>

      {/* Mobile menu */}
      <nav
        id="site-nav"
        aria-label="Mobile"
        className={`md:hidden fixed inset-x-0 top-[64px] z-40 border-t border-[var(--rd-border)] bg-white/95 backdrop-blur transition-all ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Container className="py-3">
          <ul className="grid gap-1">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-black/5 fw-regular"
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