import { ReactNode } from "react";

type Feature = { icon: ReactNode; title: string; blurb: string };

const FEATURES: Feature[] = [
  {
    icon: <span aria-hidden>⚡</span>,
    title: "Performance-First Websites",
    blurb:
      "Built with Next.js & TypeScript, optimized for Core Web Vitals and mobile—fast, accessible, and SEO-ready.",
  },
  {
    icon: <span aria-hidden>🤖</span>,
    title: "Automation & AI",
    blurb:
      "Connect tools with Zapier/n8n and OpenAI to route leads, send emails, and handle repetitive work automatically.",
  },
  {
    icon: <span aria-hidden>📊</span>,
    title: "Analytics with Clarity",
    blurb:
      "GA4 + lightweight dashboards turn activity into insights—track conversions and see what’s working, in real time.",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8">
          <header className="mb-6">
            <h2>Our Advantage</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              Every RD Digitech build is engineered to perform, automate, and
              measure—so your site becomes a system that grows your business.
            </p>
          </header>

          <ul className="grid gap-4 md:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="card p-5">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-2 fw-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--rd-muted)]">
                  {f.blurb}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}