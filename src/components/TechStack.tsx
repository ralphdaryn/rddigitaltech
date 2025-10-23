export default function TechStack() {
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Restful APIs",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Auth.js",
    "GA4",
  ] as const;

  return (
    <div className="border-y border-[var(--rd-border)] bg-white/70 backdrop-blur">
      <div className="_container py-3">
        <h2 className="sr-only">Technology stack</h2>
        <ul
          aria-label="Technology stack"
          className="text-sm flex flex-wrap items-center gap-x-6 gap-y-2 justify-center"
        >
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
