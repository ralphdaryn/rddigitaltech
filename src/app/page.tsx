import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import TechStackBar from "@/components/TechStackBar";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="section bg-hero relative overflow-hidden on-blue">
        {/* Background image */}
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-40 select-none pointer-events-none"
        />

        {/* Gradient overlay for contrast */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,33,88,0.35),rgba(1,33,88,0.55))]"
        />

        {/* Content */}
        <Container className="_container relative z-10 text-center md:text-left">
          <p className="eyebrow">RD DIGITAL TECHNOLOGY</p>

          {/* Catchy, motivating headline */}
          <h1 className="mt-3 font-extrabold leading-[1.05] text-[clamp(2.3rem,4.9vw,3.9rem)]">
            Build smarter. Automate faster. Grow with clarity.
          </h1>

          {/* Crisp subhead */}
          <p className="mt-4 max-w-2xl fw-light text-[17px] opacity-95">
            We turn ideas into fast, data-driven websites with simple
            automations—so your business runs while you focus on what matters.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="btn btn-primary"
              aria-label="Start your project"
            >
              Start Project
            </Link>
            <Link
              href="/work"
              className="btn btn-ghost"
              aria-label="See case studies"
            >
              View Results
            </Link>
          </div>

          {/* Value strip (quiet social-proof style) */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start text-sm opacity-90">
            <li>1-week turnaround</li>
            <li>Mobile-first performance</li>
            <li>Clear analytics & goals</li>
          </ul>
        </Container>
      </section>

      {/* Tech stack bar */}
      <TechStackBar />

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section">
        <Container className="_container">
          <div className="panel p-6 md:p-8">
            <h2>What we do</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              We design fast, professional websites, set up simple automations
              that save time, and add clear analytics—so you can focus on the
              work that matters.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="card p-4">
                <h3 className="fw-bold">Websites</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Next.js/React, responsive, fast</li>
                  <li>Forms + email, SEO basics</li>
                  <li>Core Web Vitals pass</li>
                </ul>
              </article>

              <article className="card p-4">
                <h3 className="fw-bold">Automation &amp; AI</h3>
                <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                  <li>Zapier/Make workflows</li>
                  <li>Email/SMS sequences</li>
                  <li>Chat widgets/assistants</li>
                </ul>
              </article>

              <article className="card p-4">
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
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "John Doe",
            meta: "Owner, Lakeside Fitness",
          },
          {
            quote:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            author: "Jane Smith",
            meta: "Clinic Manager",
          },
        ]}
      />

      {/* CTA */}
      <section className="section">
        <Container className="_container text-center md:text-left">
          <h2>Ready to start your project?</h2>
          <p className="mt-2 fw-light text-[color:var(--rd-muted)]">
            Let’s launch something fast, automated, and easy to measure.
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
