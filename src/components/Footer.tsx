import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[var(--rd-border)] bg-white">
      <Container className="_container py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[color:var(--rd-ink)]/90">
              RD DIGITAL TECHNOLOGY
            </h3>

            <p className="mt-3 max-w-xs text-sm fw-light text-[color:var(--rd-muted)]">
              Websites. Automations. Analytics.
            </p>
          </div>

          <div>
            <h4 className="text-sm fw-bold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm fw-regular">
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

          <div>
            <h4 className="text-sm fw-bold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm fw-regular">
              <li>
                <Link className="hover:underline" href="/service">
                  Service
                </Link>
              </li>
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

          <div>
            <h4 className="text-sm fw-bold">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:underline"
                  href="mailto:info@rddigitaltech.ca?subject=Project%20inquiry"
                >
                  info@rddigitaltech.ca
                </a>
              </li>
              <li className="text-[color:var(--rd-muted)] fw-light">
                Toronto, ON
              </li>
              <li className="flex gap-3 fw-regular">
                <a
                  className="underline underline-offset-2"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="underline underline-offset-2"
                  href="https://instagram.com/rddigitaltech"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-[var(--rd-border)]" />

        <div className="flex items-center justify-center">
          <p className="text-xs text-[color:var(--rd-muted)] text-center fw-light">
            © {year} RD Digital Technology. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
