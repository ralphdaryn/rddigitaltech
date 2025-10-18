import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  summary: string;
  image: string; // Unsplash or /public path
  stack: string[];
  href: string;
  result?: string; // optional highlight metric
};

const PROJECTS: Project[] = [
  {
    title: "KSnap Studio",
    summary: "Photography booking site with SEO, fast forms, and analytics.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    stack: ["Next.js", "TypeScript", "Vercel", "Resend", "GA4"],
    href: "#",
    result: "Bookings up in first month",
  },
  {
    title: "StepByStepStars",
    summary: "Events & payments with automated confirmations and dashboards.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    stack: ["React", "Stripe", "Node.js", "PostgreSQL", "Sentry"],
    href: "#",
    result: "No-show rate down with reminders",
  },
  {
    title: "Rikakuma",
    summary: "Modern brochure site with lead routing to Notion & email.",
    image:
      "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&w=1600&q=80",
    stack: ["Next.js", "Tailwind", "Notion API", "Resend", "Plausible"],
    href: "#",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--rd-border)] bg-white/70 px-2 py-1 text-xs fw-regular">
      {children}
    </span>
  );
}

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="section">
      <div className="_container">
        <div className="panel p-6 md:p-8">
          <header className="mb-6">
            <h2>Featured Work</h2>
            <p className="mt-3 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              Recent projects that blend clean design, automation, and
              analytics.
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <li
                key={p.title}
                className="card overflow-hidden p-0 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="fw-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--rd-muted)]">
                    {p.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                  {p.result && (
                    <div className="mt-3 text-sm fw-regular">
                      Result: {p.result}
                    </div>
                  )}
                  <div className="mt-5">
                    <Link href={p.href} className="btn btn-ghost">
                      View project
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