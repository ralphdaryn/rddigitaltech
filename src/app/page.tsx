import Link from "next/link";
import Container from "@/components/Container";
import TechStackBar from "@/components/TechStackBar";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section bg-hero on-blue">
        <Container className="_container text-center md:text-left">
          <p className="eyebrow">RD DIGITAL TECHNOLOGY</p>
          <h1 className="mt-3 font-extrabold leading-[1.05] text-[clamp(2.3rem,4.9vw,3.9rem)]">
            Websites.
            <br className="hidden sm:block" /> Automations.
            <br className="hidden sm:block" /> Analytics.
          </h1>
          <p className="mt-5 max-w-2xl fw-light text-[17px] opacity-95">
            We build fast websites, add simple automations, and set up clear
            analytics—so you can focus on the work that matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="btn btn-primary"
              aria-label="Book a free audit"
            >
              Book a Free Audit
            </Link>
            <Link
              href="/work"
              className="btn btn-ghost"
              aria-label="See case studies"
            >
              See Case Studies
            </Link>
          </div>
        </Container>
      </section>

      {/* Tech stack bar */}
      <TechStackBar />

      {/* WHAT WE DO */}
      <section className="section">
        <Container className="_container">
          <div className="panel p-6 md:p-8">
            <h2>What we do</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              We design fast, professional websites, set up simple automations
              that save time, and add clear analytics—so you can focus on the
              work that matters.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="card">
                <h3 className="fw-bold">Websites</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Next.js/React, responsive, fast</li>
                  <li>Forms + email, SEO basics</li>
                  <li>Core Web Vitals pass</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="fw-bold">Automation &amp; AI</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Zapier/Make workflows</li>
                  <li>Email/SMS sequences</li>
                  <li>Chat widgets/assistants</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="fw-bold">Analytics</h3>
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
                aria-label="View work"
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

      {/* CTA */}
      <section className="section">
        <Container className="_container text-center md:text-left">
          <h2>Ready to start your project?</h2>
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
