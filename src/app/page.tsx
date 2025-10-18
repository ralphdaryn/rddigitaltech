import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import TechStack from "@/components/TechStack";
import Reviews from "@/components/Reviews";
import Capabilities from "@/components/Capabilities";
import Advantage from "@/components/Advantage";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="section bg-hero relative overflow-hidden on-blue"
        id="home"
      >
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
        {/* Gradient overlay for contrast (slightly lighter for clarity) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,33,88,0.28),rgba(1,33,88,0.45))]"
        />

        {/* Content */}
        <Container className="_container relative z-10 text-center md:text-left">
          <p className="eyebrow">RD DIGITAL TECHNOLOGY</p>

          {/* Constrain text width for readability */}
          <div className="max-w-2xl">
            {/* Headline */}
            <h1 className="mt-3 font-extrabold leading-[1.05] text-[clamp(2.3rem,4.9vw,3.9rem)]">
              Build smarter.
              <br className="hidden sm:block" /> Automate faster.
              <br className="hidden sm:block" /> Grow with clarity.
            </h1>

            {/* Subhead */}
            <p className="mt-4 fw-light text-[17px] opacity-95">
              We turn ideas into fast, data-driven websites with simple
              automations—so your business runs while you focus on what matters.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start text-[15px]">
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

          {/* Value strip */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center md:justify-start text-sm opacity-90">
            <li>1-week turnaround</li>
            <li>Mobile performance</li>
            <li>Clear analytics</li>
          </ul>
        </Container>
      </section>

      {/* Tech ecosystem */}
      <section id="tech">
        <TechStack />
      </section>

      {/* What we build */}
      <section id="capabilities">
        <Capabilities />
      </section>

      {/* Why it works */}
      <section id="advantage">
        <Advantage />
      </section>

      {/* Proof */}
      <section id="work">
        <FeaturedWork />
      </section>

      {/* REVIEWS */}
      <section id="reviews">
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
      </section>

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