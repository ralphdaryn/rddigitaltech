import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <Container className="py-10">
        {/* Top grid */}
        <div className="grid gap-[calc(var(--spacing)*6)] md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[var(--rd-electric)]">
              RD DIGITECH
            </h3>
            <p className="mt-3 max-w-xs text-sm opacity-80">
              Websites. Automations. Analytics.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/services">
                  Websites
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/services">
                  Automation &amp; AI
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/services">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:underline"
                  href="mailto:info@rddigitaltech.ca?subject=Project%20inquiry"
                >
                  info@rddigitaltech.ca
                </a>
              </li>
              <li className="opacity-80">Toronto, ON</li>
              <li className="flex gap-3">
                <a
                  className="underline underline-offset-2"
                  href="https://instagram.com/rddigitaltech"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="underline underline-offset-2"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-black/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 items-center justify-between md:flex-row md:items-center">
          <p className="text-xs opacity-70 text-center w-full">
            © {year} RD Digital Technology. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
