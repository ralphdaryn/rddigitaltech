// components/Advantage.tsx
import { ReactElement } from "react";

/** Optional metrics you can pass from the page (social proof helps conversion). */
type Metrics = {
  sitesLaunched?: number; // e.g., 25
  avgLighthouse?: number; // kept in type so your existing calls don't error, but not displayed
  avgLoadMs?: number; // e.g., 1200
  monthlyReports?: boolean; // true to show "Monthly reports included"
};

type Feature = {
  icon: ReactElement;
  title: string;
  blurb: string;
};

const IconBolt = (
  <svg aria-hidden viewBox="0 0 24 24" className="size-6">
    <path fill="currentColor" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
  </svg>
);

const IconRobot = (
  <svg aria-hidden viewBox="0 0 24 24" className="size-6">
    <path
      fill="currentColor"
      d="M11 2h2v3h-2zM6 7a5 5 0 00-5 5v6a2 2 0 002 2h18a2 2 0 002-2v-6a5 5 0 00-5-5H6zm2.5 4A1.5 1.5 0 119 12.5 1.5 1.5 0 018.5 11zm7 0A1.5 1.5 0 1116 12.5 1.5 1.5 0 0115.5 11zM6 17h12v2H6z"
    />
  </svg>
);

const IconChart = (
  <svg aria-hidden viewBox="0 0 24 24" className="size-6">
    <path
      fill="currentColor"
      d="M3 3h2v18H3zM8 13h2v8H8zM13 9h2v12h-2zM18 5h2v16h-2z"
    />
  </svg>
);

const FEATURES: Feature[] = [
  {
    icon: IconBolt,
    title: "Performance-First Websites",
    blurb:
      "Next.js + TypeScript builds tuned for Core Web Vitals—fast, accessible, and SEO-ready on mobile and desktop.",
  },
  {
    icon: IconRobot,
    title: "Automation & AI",
    blurb:
      "Connect forms and CRM with Zapier/n8n + OpenAI—auto-route leads, send follow-ups, and reduce manual busywork.",
  },
  {
    icon: IconChart,
    title: "Analytics that Drive Action",
    blurb:
      "GA4 + lightweight dashboards show visits, conversions, and top pages in real time—so you know what’s working.",
  },
];

type Props = {
  metrics?: Metrics;
};

export default function Advantage({ metrics }: Props) {
  const headingId = "advantage-heading";

  return (
    <section id="advantage" aria-labelledby={headingId} className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8 rounded-2xl">
          <header className="mb-6">
            <h2 id={headingId} className="text-2xl md:text-3xl font-semibold">
              Why Clients Choose RD Digitech
            </h2>
            <p className="mt-3 max-w-2xl font-light text-[color:var(--rd-muted)]">
              We ship fast, measurable websites—then prove it with analytics.
              Build once, automate the busywork, and watch visits turn into
              customers.
            </p>
          </header>

          {/* Proof bar (optional metrics) */}
          {(metrics?.sitesLaunched ||
            metrics?.avgLoadMs ||
            metrics?.monthlyReports) && (
            <ul
              role="list"
              className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm"
            >
              {metrics?.sitesLaunched && (
                <li className="card rounded-xl p-3 border border-white/10">
                  <span className="block font-semibold">
                    {metrics.sitesLaunched}+
                  </span>
                  <span className="text-[color:var(--rd-muted)]">
                    Sites launched
                  </span>
                </li>
              )}
              {/* Avg Lighthouse intentionally not displayed */}
              {typeof metrics?.avgLoadMs === "number" && (
                <li className="card rounded-xl p-3 border border-white/10">
                  <span className="block font-semibold">
                    {Math.round(metrics.avgLoadMs)} ms
                  </span>
                  <span className="text-[color:var(--rd-muted)]">
                    Median page load
                  </span>
                </li>
              )}
              {metrics?.monthlyReports && (
                <li className="card rounded-xl p-3 border border-white/10">
                  <span className="block font-semibold">Included</span>
                  <span className="text-[color:var(--rd-muted)]">
                    Monthly reports
                  </span>
                </li>
              )}
            </ul>
          )}

          <ul
            role="list"
            className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="group card p-5 rounded-2xl border border-[color:var(--rd-card-border,rgba(255,255,255,0.08))]
                           bg-[color:var(--rd-card-bg,rgba(255,255,255,0.02))] shadow-sm outline-none transition
                           motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow
                           focus-within:ring-2 focus-within:ring-cyan-400/40"
              >
                <div
                  className="inline-flex items-center justify-center rounded-xl
                             bg-[color:var(--rd-chip-bg,rgba(21,183,232,0.1))]
                             p-2 ring-1 ring-[color:var(--rd-chip-ring,rgba(21,183,232,0.25))]"
                  aria-hidden
                >
                  {f.icon}
                </div>

                <h3 className="mt-3 text-base md:text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--rd-muted)]">
                  {f.blurb}
                </p>

                {f.title === "Performance-First Websites" && (
                  <ul className="mt-3 text-sm text-[color:var(--rd-muted)] list-disc list-inside space-y-1">
                    <li>90+ Lighthouse targets</li>
                    <li>Accessible by default (WCAG-minded)</li>
                    <li>SEO basics: meta, OG, sitemap, robots</li>
                  </ul>
                )}
                {f.title === "Automation & AI" && (
                  <ul className="mt-3 text-sm text-[color:var(--rd-muted)] list-disc list-inside space-y-1">
                    <li>Lead routing to email/CRM</li>
                    <li>Auto follow-ups & summaries</li>
                    <li>Zero-copy data handoffs</li>
                  </ul>
                )}
                {f.title === "Analytics that Drive Action" && (
                  <ul className="mt-3 text-sm text-[color:var(--rd-muted)] list-disc list-inside space-y-1">
                    <li>GA4 events for form submits & clicks</li>
                    <li>Simple dashboard for traffic & conversions</li>
                    <li>Privacy-respecting, lightweight scripts</li>
                  </ul>
                )}

                <div className="mt-3 h-px w-0 bg-[color:var(--rd-chip-ring,rgba(21,183,232,0.35))] transition-all motion-safe:duration-300 group-hover:w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}