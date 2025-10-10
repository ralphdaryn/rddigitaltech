import Container from "@/components/Container/Container";

export const metadata = {
  title: "About — RD Digital Tech",
  description: "Who we are and how we build.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        RD Digital Tech builds fast, automated websites for small businesses. We
        focus on speed to value, automation first, and measured outcomes.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Speed to value</h2>
          <p className="mt-2 opacity-80">
            Ship a usable site fast, iterate weekly.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Automation first</h2>
          <p className="mt-2 opacity-80">
            Remove manual busywork with simple workflows.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Measured outcomes</h2>
          <p className="mt-2 opacity-80">Analytics that show what’s working.</p>
        </div>
      </div>
    </Container>
  );
}