import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="section">
      <Container className="_container">
        <h1>Projects</h1>
        <p className="mt-2 text-[color:var(--rd-muted)]">
          Problems solved. Results delivered. Tech that fits your business.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="card overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <h3 className="fw-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--rd-muted)]">
                  {p.summary}
                </p>
                <div className="mt-2 text-xs">{p.stack.join(" · ")}</div>
                <div className="mt-3 text-sm fw-regular">
                  Result: {p.result}
                </div>
                <Link
                  className="btn btn-ghost mt-4"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}