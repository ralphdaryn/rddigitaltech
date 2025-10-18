import Link from "next/link";
import Container from "@/components/Container";

export default function ThanksPage() {
  return (
    <main className="section">
      <Container className="_container text-center">
        <h1>Thanks — we got your message!</h1>
        <p className="mt-2 text-[color:var(--rd-muted)]">
          I’ll reach out shortly with next steps.
        </p>
        <Link href="/" className="btn btn-ghost mt-6">
          Back to home
        </Link>
      </Container>
    </main>
  );
}
