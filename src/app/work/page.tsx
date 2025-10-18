// src/app/work/page.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Type for each project card (includes `image`)
type Project = {
  title: string;
  summary: string;
  stack: string[];
  href: string;
  image: StaticImageData | string; // local StaticImport OR remote URL
  alt: string;
};

// Example data (uses remote URLs so it compiles without local files)
const PROJECTS: Project[] = [
  {
    title: "RD Digitech — Landing",
    summary:
      "Marketing site focused on speed, lead capture, and clean analytics.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    href: "/work/rd-digitech",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
    alt: "Laptop on desk with analytics dashboard",
  },
  {
    title: "KSnap Studio — Portfolio",
    summary:
      "Photography portfolio with optimized images and simple booking flow.",
    stack: ["Next.js", "Image Optimization", "Netlify"],
    href: "/work/ksnap-studio",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    alt: "DSLR camera on a table",
  },
  {
    title: "StepByStep Stars — Events",
    summary:
      "Events & bookings with serverless functions and email notifications.",
    stack: ["Netlify Functions", "Stripe", "MySQL"],
    href: "/work/stepbystep",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    alt: "People collaborating around a laptop",
  },
];

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
      <p className="mt-2 text-neutral-600">
        Selected projects and experiments. Click any card to see details.
      </p>

      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <li
            key={p.title}
            className="group overflow-hidden rounded-2xl border bg-white/50 shadow-sm transition hover:shadow-md"
          >
            <Link href={p.href} className="block">
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.summary}</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border bg-white px-2 py-0.5 text-xs text-neutral-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}