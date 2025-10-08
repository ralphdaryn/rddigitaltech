import Link from "next/link";
import Container from "../components/Container/Container";

export default function Home() {
  return (
    <main className="home">
      {/* Hero — mobile first (stack) */}
      <section className="home__hero bg-[var(--rd-navy)] text-white">
        <Container className="py-12 md:py-20">
          <p className="home__eyebrow uppercase tracking-[0.2em] text-[var(--rd-electric)] text-sm">
            RD DIGITAL TECH
          </p>
          <h1 className="home__title mt-3 text-3xl font-semibold md:text-5xl">
            Websites that automate your operations.
          </h1>
          <p className="home__subtitle mt-4 text-white/90">
            I build fast sites, connect your tools, and wire dashboards so you
            see what works — and automate what doesn’t.
          </p>

          <div className="home__ctas mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn btn--primary rounded-xl bg-[var(--rd-electric)] px-4 py-3 text-center font-medium text-[var(--rd-navy)]"
            >
              Start a Project
            </Link>
            <Link
              href="/pricing"
              className="btn btn--ghost rounded-xl border border-white/30 px-4 py-3 text-center font-medium hover:bg-white/10"
            >
              See Pricing
            </Link>
          </div>
        </Container>
      </section>

      {/* Services — flex/grid: stacked on mobile, columns at md/xl */}
      <section className="home__services">
        <Container className="py-12 md:py-16">
          <h2 className="home__h2 text-2xl font-semibold md:text-3xl">
            What I do
          </h2>

          <div className="home__cards mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Websites",
                desc: "Next.js builds, performance, SEO basics, clean CMS handoff.",
              },
              {
                title: "Automation & AI",
                desc: "Forms → CRM, Zapier/Make, lightweight AI agents.",
              },
              {
                title: "Analytics",
                desc: "GA4 events, dashboards, and insights that drive decisions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="card rounded-2xl border border-black/10 p-5"
              >
                <h3 className="card__title text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="card__desc mt-2 text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — clear contrast, thumb-friendly */}
      <section className="home__cta bg-black text-white">
        <Container className="py-12 md:py-16">
          <h2 className="home__h2 text-2xl font-semibold md:text-3xl">
            Need it done fast?
          </h2>
          <p className="home__p mt-2 text-white/80">
            I’ll scope, build, and wire your automations with clear milestones.
          </p>
          <Link
            href="/contact"
            className="btn btn--light mt-6 inline-block rounded-xl bg-white px-4 py-3 font-medium text-black"
          >
            Get a quote
          </Link>
        </Container>
      </section>
    </main>
  );
}
