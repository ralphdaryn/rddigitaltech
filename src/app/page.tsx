// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reviews from "@/components/Reviews";
import Capabilities from "@/components/Capabilities";
import Advantage from "@/components/Advantage";
import FeaturedWork from "@/components/FeaturedWork";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={`section bg-hero on-blue ${styles.hero}`} id="home">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className={styles.heroImage}
        />
        <div aria-hidden className={styles.heroOverlay} />

        <Container className={`text-center md:text-left ${styles.heroInner}`}>
          <p className="eyebrow">RD DIGITAL TECHNOLOGY</p>

          <div className="max-w-2xl">
            <h1 className={styles.heroTitle}>
              Build smarter.
              <br className="hidden sm:block" /> Automate faster.
              <br className="hidden sm:block" /> Grow with clarity.
            </h1>

            <p className={styles.heroBody}>
              We turn ideas into fast, data-driven websites with simple
              automations—so your business runs while you focus on what matters.
            </p>
          </div>

          <div className={styles.heroCtas}>
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
              View Work
            </Link>
          </div>

          <ul className={styles.heroBadges}>
            <li>1-week turnaround</li>
            <li>Mobile performance</li>
            <li>Clear analytics</li>
          </ul>
        </Container>
      </section>

      {/* What we build */}
      <section id="capabilities">
        <Capabilities />
      </section>

      {/* Why it works */}
      <section id="advantage">
        <Advantage
          metrics={{
            sitesLaunched: 18,
            avgLoadMs: 1200,
            monthlyReports: true,
          }}
        />
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
        <Container className="text-center md:text-left">
          <h2>Ready to start your project?</h2>
          <p className={styles.ctaText}>
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