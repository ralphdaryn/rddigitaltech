import Container from "@/components/Container/Container";

export const metadata = {
  title: "Contact — RD Digital Tech",
  description: "Start a project or ask a question.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Tell us about your project. We’ll reply within 1 business day.
      </p>
      <p className="mt-6">
        Email:{" "}
        <a
          className="underline"
          href="mailto:info@rddigitaltech.ca?subject=Project%20inquiry"
        >
          info@rddigitaltech.ca
        </a>
      </p>
    </Container>
  );
}