import Container from "@/components/Container";

type Review = { quote: string; author: string; meta?: string };

export default function Reviews({
  items,
  className = "",
  title = "What clients say",
}: {
  items: Review[];
  className?: string;
  title?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <Container className="_container">
        <h2 className="text-2xl md:text-3xl fw-bold">{title}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((t, i) => (
            <li key={i} className="card">
              <blockquote className="text-[15px] leading-relaxed fw-regular">
                “{t.quote}”
              </blockquote>
              <div className="mt-4 text-sm fw-bold">{t.author}</div>
              {t.meta && (
                <div className="text-xs text-[color:var(--rd-muted)] fw-light">
                  {t.meta}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}