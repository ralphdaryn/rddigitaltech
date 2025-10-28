// components/Capabilities.tsx
import Image from "next/image";
import { ReactNode } from "react";

type Capability = {
  key: string;
  title: string;
  blurb: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  stack: string[];
  ctaHref: string;
  ctaLabel: string;
  proof?: string[];
};

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--rd-border,rgba(255,255,255,0.12))] bg-white/70 px-2 py-1 text-xs font-medium text-black/80 dark:bg-white/10 dark:text-white/90">
      {children}
    </span>
  );
}

const CAPABILITIES: Capability[] = [
  {
    key: "websites",
    title: "Websites",
    blurb:
      "Fast, accessible sites that convert—built with a modern DX and simple content editing.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Developer workspace with code on screen, representing modern web builds",
    deliverables: [
      "Next.js (App Router), SEO + schema.org",
      "Forms + email (Postmark/Resend), CMS (Sanity/Contentlayer)",
      "Core Web Vitals ≥ 90 & accessibility pass",
    ],
    stack: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "Netlify",
      "Drizzle ORM",
      "PostgreSQL (Neon/Supabase)",
    ],
    proof: ["≤1.5s LCP target", "Sitemaps & OG tags", "WCAG-minded UI"],
    ctaHref: "/work",
    ctaLabel: "See websites",
  },
  {
    key: "automation",
    title: "Automation & AI",
    blurb:
      "Connect your tools and add lightweight AI so leads route instantly and follow-ups send themselves.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Automation flow concept with connected services",
    deliverables: [
      "Lead routing to CRM/Sheets/Notion",
      "Zapier/Make/n8n workflows & webhooks",
      "Chat/assistants + templated replies",
    ],
    stack: [
      "Node.js",
      "n8n / Zapier / Make",
      "OpenAI API",
      "Airtable / Notion",
      "Webhooks",
      "Postmark",
    ],
    proof: ["<5 min response SLA (automated)", "Zero-copy handoffs"],
    ctaHref: "/contact",
    ctaLabel: "Automate my flow",
  },
  {
    key: "analytics",
    title: "Analytics",
    blurb:
      "Track what matters. Clear dashboards and weekly insights so you can see what’s working at a glance.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard on a laptop showing charts and key metrics",
    deliverables: [
      "GA4 events & conversions (forms, clicks, CTAs)",
      "PostHog/Plausible product analytics",
      "Weekly email summaries & goals",
    ],
    stack: [
      "GA4",
      "PostHog",
      "Plausible",
      "BigQuery",
      "dbt (light)",
      "LogRocket/OpenReplay",
    ],
    proof: ["Privacy-first scripts", "Goal tracking & funnels"],
    ctaHref: "/contact",
    ctaLabel: "Measure results",
  },
];

export default function Capabilities() {
  const headingId = "capabilities-heading";

  return (
    <section id="capabilities" aria-labelledby={headingId} className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8 rounded-2xl">
          <header className="mb-6">
            <h2 id={headingId} className="text-2xl md:text-3xl font-semibold">
              What We Build
            </h2>
            <p className="mt-3 max-w-2xl font-light text-[color:var(--rd-muted)]">
              Websites built for speed and clarity, automations that cut
              busywork, and analytics that show what’s working—aligned to your
              goals.
            </p>
          </header>

          <ul role="list" className="grid gap-6 md:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <li
                key={c.key}
                className="group card p-5 rounded-2xl border border-[color:var(--rd-card-border,rgba(255,255,255,0.08))]
                           bg-[color:var(--rd-card-bg,rgba(255,255,255,0.02))] shadow-sm outline-none transition
                           motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow focus-within:ring-2 focus-within:ring-cyan-400/40"
              >
                {/* Image inside same padding */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Tighter rhythm to match Advantage */}
                <h3 className="mt-4 text-base md:text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--rd-muted)]">
                  {c.blurb}
                </p>

                {/* Deliverables as concise bullets */}
                <ul className="mt-3 text-sm text-[color:var(--rd-muted)] list-disc list-inside space-y-1">
                  {c.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                {/* Proof badges (optional) */}
                {c.proof?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.proof.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center rounded-full bg-[color:var(--rd-chip-bg,rgba(21,183,232,0.1))]
                                   px-2 py-1 text-xs font-medium text-[color:var(--rd-muted)]
                                   ring-1 ring-[color:var(--rd-chip-ring,rgba(21,183,232,0.25))]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* subtle affordance line for continuity */}
                <div className="mt-3 h-px w-0 bg-[color:var(--rd-chip-ring,rgba(21,183,232,0.35))] transition-all motion-safe:duration-300 group-hover:w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}