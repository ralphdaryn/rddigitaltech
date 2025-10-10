import Link from "next/link";
import Container from "../components/Container/Container";

export default function Home() {
  return (
    <main className="home">
      {/* Hero — mobile first (stack) */}
      <section className="home__hero bg-[var(--rd-navy)] text-white">
        <Container className="py-14 md:py-24 text-center md:text-left">
          {/* Brand eyebrow (fluid size) */}
          <p
            className="home__eyebrow uppercase font-semibold tracking-[0.25em]
                       text-[var(--rd-electric)] leading-tight
                       text-[clamp(1.125rem,3.2vw,2.25rem)]"
          >
            RD DIGITECH
          </p>

          {/* Headline */}
          <h1 className="home__title mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
            Websites.
            <br className="hidden sm:block" /> Automations.
            <br className="hidden sm:block" /> Analytics.
          </h1>

          {/* Subtitle */}
          <p className="home__subtitle mt-6 max-w-3xl text-white/90 text-base md:text-lg leading-relaxed">
            We build fast, data-driven websites that automate your workflows and
            deliver results.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            {/* Start a Project = rd-electric */}
            <Link
              href="/contact"
              aria-label="Start a Project"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                         bg-[var(--rd-electric)] text-[var(--rd-navy)] hover:opacity-90 transition"
            >
              Start a Project
            </Link>

            {/* Contact Us (ghost on dark bg) */}
            <Link
              href="/contact"
              aria-label="Contact Us"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                         border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="home__services">
        <Container className="py-12 md:py-16">
          <h2 className="home__h2 text-2xl font-semibold md:text-3xl">
            What we do
          </h2>

          <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed opacity-80">
            We design fast, professional websites, set up simple automations
            that save time, and add clear analytics—so you can focus on the work
            that matters.
          </p>

          <div className="mt-6">
            {/* View Work — ghost style adapted for light background */}
            <Link
              href="/work"
              aria-label="View Work"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                         border border-black/20 text-[var(--rd-text)] hover:bg-black/5 transition"
            >
              View Work
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA — clear contrast, thumb-friendly */}
      <section className="home__cta bg-black text-white">
        <Container className="py-12 md:py-16">
          <h2 className="home__h2 text-2xl font-semibold md:text-3xl">
            Ready to start your project?
          </h2>
          <p className="home__p mt-2 text-white/80">
            We build and automate systems that work — with clear goals and
            results.
          </p>
          <Link
            href="/contact"
            aria-label="Get a quote"
            className="mt-6 inline-block rounded-xl bg-white px-4 py-3 font-medium text-black"
          >
            Get a quote
          </Link>
        </Container>
      </section>
    </main>
  );
}