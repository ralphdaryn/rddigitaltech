// components/FeaturedWork.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Project = {
  title: string;
  summary: string;
  image: string; // Unsplash or /public path
  imageAlt?: string; // optional but recommended
  stack: string[];
  href: string;
  result?: string;
};

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--rd-border,rgba(255,255,255,0.12))] bg-white/70 px-2 py-1 text-xs font-medium text-black/80 dark:bg-white/10 dark:text-white/90">
      {children}
    </span>
  );
}

const PROJECTS: Project[] = [
  {
    title: "KSnap Studio",
    summary: "Photography booking site with SEO, fast forms, and analytics.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Photographer’s workspace with camera gear and a laptop",
    stack: ["Next.js", "TypeScript", "Vercel", "Resend", "GA4"],
    href: "#",
    result: "Bookings up in first month",
  },
  {
    title: "StepByStepStars",
    summary: "Events & payments with automated confirmations and dashboards.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team collaboration with laptops and notes",
    stack: ["React", "Stripe", "Node.js", "PostgreSQL", "Sentry"],
    href: "#",
    result: "No-show rate down with reminders",
  },
  {
    title: "Rikakuma",
    summary: "Modern brochure site with lead routing to Notion & email.",
    image:
      "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Minimal landing page concept on a laptop screen",
    stack: ["Next.js", "Tailwind", "Notion API", "Resend", "Plausible"],
    href: "#",
  },
];

export default function FeaturedWork() {
  const headingId = "featured-work-heading";

  return (
    <section id="featured-work" aria-labelledby={headingId} className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8 rounded-2xl">
          <header className="mb-6">
            <h2 id={headingId} className="text-2xl md:text-3xl font-semibold">
              Featured Work
            </h2>
            <p className="mt-3 max-w-2xl font-light text-[color:var(--rd-muted)]">
              Recent projects that blend clean design, automation, and
              analytics.
            </p>
          </header>

          <ul role="list" className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <li
                key={p.title}
                className="group card p-5 rounded-2xl border border-[color:var(--rd-card-border,rgba(255,255,255,0.08))]
                           bg-[color:var(--rd-card-bg,rgba(255,255,255,0.02))] shadow-sm outline-none transition
                           motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow"
              >
                {/* Image sits inside the same padding as content */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.imageAlt || ""}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Tighter vertical rhythm to match Advantage */}
                <h3 className="mt-4 text-base md:text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--rd-muted)]">
                  {p.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                {p.result && (
                  <div className="mt-3 text-sm">
                    <span className="font-semibold">Result:</span> {p.result}
                  </div>
                )}

                <div className="mt-5">
                  <Link
                    href={p.href}
                    className="btn btn-ghost inline-flex items-center justify-center"
                  >
                    View project
                  </Link>
                </div>

                {/* subtle affordance line for visual continuity */}
                <div className="mt-3 h-px w-0 bg-[color:var(--rd-chip-ring,rgba(21,183,232,0.35))] transition-all motion-safe:duration-300 group-hover:w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}