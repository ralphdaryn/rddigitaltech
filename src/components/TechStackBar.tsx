// components/TechStackBar.tsx
type Variant = "services" | "ecommerce" | "saas";

const STACKS: Record<Variant, string[]> = {
  services: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Vercel",
    "Auth.js",
    "GA4",
  ],
  ecommerce: [
    "React",
    "Next.js",
    "TypeScript",
    "Shopify",
    "Stripe",
    "Klaviyo",
    "PostgreSQL",
    "Prisma",
    "Vercel",
    "Plausible",
    "Sentry",
  ],
  saas: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL (Supabase)",
    "Prisma",
    "tRPC / REST",
    "Vercel",
    "Auth.js / Clerk",
    "Stripe",
    "PostHog",
    "Sentry",
  ],
};

export default function TechStackBar({
  variant = "services",
}: {
  variant?: Variant;
}) {
  const items = STACKS[variant];
  return (
    <div className="border-y border-[var(--rd-border)] bg-white/70 backdrop-blur">
      <div className="_container py-3">
        <h2 className="sr-only">Technology stack</h2>
        <ul className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
          {items.map((name) => (
            <li key={name} className="opacity-70">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
