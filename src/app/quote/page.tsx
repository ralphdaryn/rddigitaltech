"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import Container from "@/components/Container";

/* ---------- stable pricing tables ---------- */
const BASES = {
  website: 600,
  ecommerce: 1200,
  booking: 900,
} as const;

const ADDONS = {
  pages: { label: "Extra Pages", pricePer: 80 },
  cms: { label: "CMS/Blog Setup", price: 200 },
  seo: { label: "Technical SEO", price: 250 },
  analytics: { label: "Analytics Dashboard", price: 300 },
  speed: { label: "Performance Pack", price: 200 },
  automations: { label: "Forms → Email/Sheet/Zap", price: 150 },
  rush: { label: "Rush (7 days)", multiplier: 1.25 },
} as const;
/* ------------------------------------------ */

export default function QuotePage() {
  // spec toggles
  const [projectType, setProjectType] = useState<keyof typeof BASES>("website");
  const [pageCount, setPageCount] = useState(3);
  const [useCMS, setUseCMS] = useState(true);
  const [useSEO, setUseSEO] = useState(true);
  const [useAnalytics, setUseAnalytics] = useState(true);
  const [useSpeed, setUseSpeed] = useState(true);
  const [useAutomations, setUseAutomations] = useState(true);
  const [rush, setRush] = useState(false);

  // lead details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  // spam honeypot
  const [website, setWebsite] = useState(""); // if filled => bot

  // ui
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const quote = useMemo(() => {
    let subtotal = BASES[projectType];
    const breakdown: { label: string; amount: number }[] = [
      { label: `${capital(projectType)} Base`, amount: BASES[projectType] },
    ];

    const extraPages = Math.max(0, pageCount - 3);
    if (extraPages > 0) {
      const amount = extraPages * ADDONS.pages.pricePer;
      subtotal += amount;
      breakdown.push({
        label: `${ADDONS.pages.label} x ${extraPages}`,
        amount,
      });
    }

    if (useCMS) {
      subtotal += ADDONS.cms.price;
      breakdown.push({ label: ADDONS.cms.label, amount: ADDONS.cms.price });
    }
    if (useSEO) {
      subtotal += ADDONS.seo.price;
      breakdown.push({ label: ADDONS.seo.label, amount: ADDONS.seo.price });
    }
    if (useAnalytics) {
      subtotal += ADDONS.analytics.price;
      breakdown.push({
        label: ADDONS.analytics.label,
        amount: ADDONS.analytics.price,
      });
    }
    if (useSpeed) {
      subtotal += ADDONS.speed.price;
      breakdown.push({ label: ADDONS.speed.label, amount: ADDONS.speed.price });
    }
    if (useAutomations) {
      subtotal += ADDONS.automations.price;
      breakdown.push({
        label: ADDONS.automations.label,
        amount: ADDONS.automations.price,
      });
    }

    let total = subtotal;
    if (rush) {
      const mult = ADDONS.rush.multiplier!;
      const before = total;
      total = Math.round(total * mult);
      breakdown.push({
        label: `${ADDONS.rush.label} (${mult}x)`,
        amount: total - before,
      });
    }

    const deposit = Math.round(total * 0.4);
    const remainder = total - deposit;

    return { subtotal, total, deposit, remainder, breakdown };
  }, [
    projectType,
    pageCount,
    useCMS,
    useSEO,
    useAnalytics,
    useSpeed,
    useAutomations,
    rush,
  ]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      // if honeypot filled, silently succeed
      if (website.trim()) {
        setSuccess("Got it! I’ll send a tailored proposal to your email.");
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
        setSubmitting(false);
        return;
      }

      const payload = {
        lead: { name, email, company, notes, website },
        spec: {
          projectType,
          pageCount,
          useCMS,
          useSEO,
          useAnalytics,
          useSpeed,
          useAutomations,
          rush,
        },
        quote,
        source: "rd-digitech-smart-quote",
      };

      const res = await fetch("/.netlify/functions/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      // optional GA4 custom event
      if (typeof window !== "undefined") {
        // @ts-expect-error gtag optional
        window.gtag?.("event", "rd_quote_submitted", {
          value: quote.total,
          project_type: projectType,
        });
      }

      setSuccess("Got it! I’ll send a tailored proposal to your email.");
      setName("");
      setEmail("");
      setCompany("");
      setNotes("");
      setWebsite("");
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 500);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Please try again or email info@rddigitaltech.ca."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <section className="section">
        <Container className="_container">
          <header className="mb-6">
            <p className="eyebrow">Instant estimate</p>
            <h1 className="text-2xl md:text-3xl fw-bold">
              Smart Quote + Lead Capture
            </h1>
            <p className="mt-2 max-w-2xl fw-light text-[color:var(--rd-muted)]">
              Get a ballpark now. I’ll follow up with a tailored proposal,
              timeline, and next steps.
            </p>
            <BuiltWith />
          </header>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
            {/* Spec form */}
            <section className="panel p-5 md:p-6 rounded-2xl">
              <h2 className="text-lg fw-bold mb-3">1) Project Spec</h2>
              <div className="grid gap-4">
                <Field label="Project Type">
                  <select
                    className="input"
                    value={projectType}
                    onChange={(e) =>
                      setProjectType(e.target.value as keyof typeof BASES)
                    }
                  >
                    <option value="website">Marketing Website</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="booking">Bookings/Events</option>
                  </select>
                </Field>

                <Field label={`Approx. Pages (${pageCount})`}>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    value={pageCount}
                    onChange={(e) => setPageCount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-[color:var(--rd-muted)] mt-1">
                    First 3 included
                  </div>
                </Field>

                <Toggle
                  label="CMS/Blog"
                  checked={useCMS}
                  onChange={setUseCMS}
                  hint="Manage content yourself"
                />
                <Toggle
                  label="Technical SEO"
                  checked={useSEO}
                  onChange={setUseSEO}
                  hint="Schema, metadata, sitemap"
                />
                <Toggle
                  label="Analytics Dashboard"
                  checked={useAnalytics}
                  onChange={setUseAnalytics}
                  hint="GA4 + simple BI"
                />
                <Toggle
                  label="Performance Pack"
                  checked={useSpeed}
                  onChange={setUseSpeed}
                  hint="Core Web Vitals"
                />
                <Toggle
                  label="Automations"
                  checked={useAutomations}
                  onChange={setUseAutomations}
                  hint="Forms → email/sheet"
                />
                <Toggle
                  label="Rush (7 days)"
                  checked={rush}
                  onChange={setRush}
                />
              </div>
            </section>

            {/* Quote card */}
            <section className="panel p-5 md:p-6 rounded-2xl">
              <h2 className="text-lg fw-bold mb-3">2) Instant Quote</h2>
              <ul className="divide-y divide-[var(--rd-border)] mb-3">
                {quote.breakdown.map((item, i) => (
                  <li key={i} className="flex justify-between py-2 text-sm">
                    <span className="text-[color:var(--rd-muted)]">
                      {item.label}
                    </span>
                    <span className="fw-bold">${item.amount}</span>
                  </li>
                ))}
              </ul>
              <KeyRow label="Subtotal" value={`$${quote.subtotal}`} />
              <KeyRow label="Deposit (40%)" value={`$${quote.deposit}`} />
              <KeyRow label="Remainder" value={`$${quote.remainder}`} />

              <div className="mt-4 card p-4 rounded-xl">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-[color:var(--rd-muted)]">
                      Estimated Total
                    </div>
                    <div className="text-2xl fw-bold tracking-tight">
                      ${quote.total}
                    </div>
                  </div>
                  <div className="text-xs text-[color:var(--rd-muted)] text-right">
                    Estimates only; final proposal by email.
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Lead form */}
          <form
            onSubmit={handleSubmit}
            className="panel p-5 md:p-6 rounded-2xl mt-6"
          >
            <h2 className="text-lg fw-bold mb-3">3) Get Your Exact Proposal</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Name">
                <input
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field label="Company (optional)">
                <input
                  className="input"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Field>

              <div className="md:col-span-3">
                <label className="label">Notes (what success looks like)</label>
                <textarea
                  className="input min-h-[110px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., 10 bookings/month, faster site, collect emails, etc."
                />
              </div>

              {/* Honeypot (hidden to humans) */}
              <div className="hidden">
                <label className="label">Website</label>
                <input
                  className="input"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                disabled={submitting}
                className="btn btn-primary disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send me the proposal"}
              </button>
              {success && <p className="text-emerald-600 text-sm">{success}</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>

            <p className="text-xs text-[color:var(--rd-muted)] mt-2">
              By submitting, you agree to hear from RD Digitech. No spam—ever.
            </p>
          </form>
        </Container>
      </section>
    </main>
  );
}

/* ---------- helpers & tiny UI primitives ---------- */

function capital(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
  hint,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-xl border border-[var(--rd-border)] bg-white/60 p-3">
      <div>
        <div className="text-sm fw-bold">{label}</div>
        {hint && (
          <div className="text-xs text-[color:var(--rd-muted)]">{hint}</div>
        )}
      </div>
      <input
        type="checkbox"
        className="h-5 w-5"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}

function KeyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[color:var(--rd-muted)]">{label}</span>
      <span className="fw-bold">{value}</span>
    </div>
  );
}

function BuiltWith() {
  const stack = [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Netlify Functions",
    "Resend",
    "GA4",
  ];
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {stack.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-md border border-[var(--rd-border)] bg-white/70 px-2 py-1 text-xs font-medium text-black/80"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
