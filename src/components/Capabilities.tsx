import Image from "next/image";
import Link from "next/link";

type Capability = {
  key: string;
  title: string;
  blurb: string;
  image: string; // Unsplash URL
  deliverables: string[]; // concrete outputs recruiters/clients understand
  stack: string[]; // modern, hire-ready tools
  ctaHref: string;
  ctaLabel: string;
};

const CAPABILITIES: Capability[] = [
  {
    key: "websites",
    title: "Websites",
    blurb:
      "Fast, accessible, and conversion-focused sites with a modern DX and easy content editing.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      "Next.js (App Router), SEO + schema",
      "Forms, email (Resend/Postmark), CMS (Sanity/Contentlayer)",
      "Core Web Vitals pass & accessibility audit",
    ],
    stack: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Prisma",
      "PostgreSQL (Neon/Supabase)",
    ],
    ctaHref: "/work",
    ctaLabel: "See websites",
  },
  {
    key: "automation",
    title: "Automation & AI",
    blurb:
      "Connect the tools you already use and add lightweight AI to remove busywork and speed up responses.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    deliverables: [
      "Lead routing to CRM/Sheets/Notion",
      "Zapier/Make/n8n workflows & webhooks",
      "Chat/assistants, templated replies",
    ],
    stack: [
      "Node.js",
      "n8n / Zapier / Make",
      "OpenAI API",
      "LangChain",
      "Airtable / Notion",
      "Resend",
      "Webhooks",
    ],
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
    deliverables: [
      "GA4 events & conversions",
      "PostHog/Plausible product analytics",
      "Weekly email summaries & goals",
    ],
    stack: ["GA4", "PostHog", "Plausible", "BigQuery", "dbt (light)", "Sentry"],
    ctaHref: "/contact",
    ctaLabel: "Measure results",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--rd-border)] bg-white/70 px-2 py-1 text-xs fw-regular">
      {children}
    </span>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8">
          <header className="mb-6">
            <h2>What We Build</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              Websites built for speed and clarity, automations that cut
              busywork and analytics that show what’s working — all aligned to
              your goals.
            </p>
          </header>

          <ul className="grid gap-4 md:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <li key={c.key} className="card overflow-hidden p-0">
                {/* Image */}
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="fw-bold">{c.title}</h3>
                  <p className="mt-2 text-sm fw-regular text-[color:var(--rd-muted)]">
                    {c.blurb}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-sm fw-bold">Deliverables</h4>
                    <ul className="mt-2 space-y-1 text-sm fw-light text-[color:var(--rd-muted)]">
                      {c.deliverables.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm fw-bold">Tech we use</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {c.stack.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link href={c.ctaHref} className="btn btn-ghost">
                      {c.ctaLabel}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}