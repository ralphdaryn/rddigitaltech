import Link from "next/link";
import Container from "@/components/Container";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      {/* HERO — techy cyan→navy with soft green glow */}
      <section className="section bg-hero on-blue">
        <Container className="_container text-center md:text-left">
          {/* Eyebrow must be Futura Bold */}
          <p className="eyebrow">RD DIGITAL TECHNOLOGY</p>

          <h1 className="mt-3 text-4xl md:text-6xl fw-bold leading-[1.05]">
            Websites.
            <br className="hidden sm:block" /> Automations.
            <br className="hidden sm:block" /> Analytics.
          </h1>

          <p className="mt-5 max-w-2xl text-[17px] fw-light opacity-95">
            We build fast, data-driven websites that automate your workflows and
            deliver results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="btn btn-primary"
              aria-label="Start a Project"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="btn btn-ghost"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO — white panel on light page bg */}
      <section className="section">
        <Container className="_container">
          <div className="panel p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl fw-bold">What we do</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              We design fast, professional websites, set up simple automations
              that save time, and add clear analytics—so you can focus on the
              work that matters.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="card">
                <h3 className="text-lg fw-bold">Websites</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Next.js/React, responsive, fast</li>
                  <li>Forms + email, SEO basics</li>
                  <li>Core Web Vitals pass</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="text-lg fw-bold">Automation &amp; AI</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Zapier/Make workflows</li>
                  <li>Email/SMS sequences</li>
                  <li>Chat widgets/assistants</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="text-lg fw-bold">Analytics</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>GA4 events &amp; conversions</li>
                  <li>Dashboard reporting</li>
                  <li>Weekly email summaries</li>
                </ul>
              </article>
            </div>

            <div className="mt-8">
              <Link
                href="/work"
                className="btn btn-ghost"
                aria-label="View Work"
              >
                View Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* REVIEWS */}
      <Reviews
        items={[
          {
            quote:
              "Clean build and fast turnaround. Our contact form finally routes correctly—exactly what we needed.",
            author: "J. Singh",
            meta: "Owner, Lakeside Fitness",
          },
          {
            quote:
              "Automations save us hours each week. Leads go straight to our sheet and we get a weekly summary.",
            author: "M. Patel",
            meta: "Clinic Manager",
          },
        ]}
      />

      {/* CTA on light bg */}
      <section className="section">
        <Container className="_container text-center md:text-left">
          <h2 className="text-2xl md:text-3xl fw-bold">
            Ready to start your project?
          </h2>
          <p className="mt-2 fw-light text-[color:var(--rd-muted)]">
            We build and automate systems that work — with clear goals and
            results.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary mt-6"
            aria-label="Get a quote"
          >
            Get a quote
          </Link>
        </Container>
      </section>
    </main>
  );
}