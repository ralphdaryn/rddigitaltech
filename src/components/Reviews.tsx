import Container from "@/components/Container";

type Review = {
  quote: string;
  author: string;
  meta?: string; // role / company (optional)
};

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
    <section className={className}>
      <Container className="py-12 md:py-16">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        </header>

        {/* 2 up on desktop, 1 up on mobile */}
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((t, i) => (
            <li
              key={i}
              className="rounded-xl border border-[var(--rd-border)] bg-white p-5"
            >
              <blockquote className="text-[15px] leading-relaxed">
                “{t.quote}”
              </blockquote>
              <div className="mt-4 text-sm font-medium">{t.author}</div>
              {t.meta && <div className="text-xs opacity-70">{t.meta}</div>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}