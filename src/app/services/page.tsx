import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Services — RD Digital Tech",
  description: "Websites, automations, and analytics that deliver results.",
};

export default function ServicesPage() {
  return (
    <Container className="py-12 md:py-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        <p className="mt-3 max-w-2xl opacity-80">
          We build fast websites, connect your tools with simple automations,
          and wire analytics so you can see what’s working.
        </p>
      </header>

      {/* 3 cards */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border p-5">
          <h2 className="text-xl font-semibold">Websites</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 opacity-90">
            <li>Next.js/React, responsive, fast</li>
            <li>Forms + email, SEO basics</li>
            <li>Core Web Vitals pass</li>
          </ul>
        </article>

        <article className="rounded-xl border p-5">
          <h2 className="text-xl font-semibold">Automation & AI</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 opacity-90">
            <li>Zapier/Make workflows</li>
            <li>Email/SMS sequences</li>
            <li>Chat widgets/assistants</li>
          </ul>
        </article>

        <article className="rounded-xl border p-5">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <ul className="mt-3 list-disc pl-5 space-y-1 opacity-90">
            <li>GA4 events & conversions</li>
            <li>Dashboard reporting</li>
            <li>Weekly email summaries</li>
          </ul>
        </article>
      </section>

      <footer className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                     bg-[var(--rd-electric)] text-[var(--rd-navy)] hover:opacity-90 transition"
        >
          Start a Project
        </Link>
      </footer>
    </Container>
  );
}